FROM node:20-alpine AS base

# === Layer 1: 의존성 및 node_modules 설치
# 의존성 설치
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /src

# 노드 패키지 설치
COPY . ./
RUN yarn --frozen-lockfile
RUN rm -rf ./.next/cache

# === Layer 2: next 빌드 ===
# 프로젝트 빌드
FROM base AS builder
WORKDIR /src
COPY --from=deps /src/node_modules ./node_modules
COPY . ./
RUN yarn build

# === Layer 3: 프로젝트 실행 ===
FROM base AS runner
WORKDIR /src

ENV NODE_ENV=production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# COPY --from=builder /src/public ./public  # 나중에 public 폴더가 있으면 추가
COPY --from=builder --chown=nextjs:nodejs /src/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /src/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]
