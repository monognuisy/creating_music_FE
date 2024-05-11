from node:20-alpine 

run apk add --no-cache libc6-compat
run apk add git
workdir /app
# git 에 있는 파일 가져오기
run git clone https://github.com/creating-music/creating_music_FE.git
workdir /app/creating_music_FE
# env 만 수동으로
copy .env ./

run yarn --frozen-lockfile
run yarn build
expose 3000
cmd ["yarn","start"]
