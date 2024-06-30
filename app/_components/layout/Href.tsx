"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

const Href = () => {
  const pathname = usePathname();

  return (
    <nav className="flex">
      <Link
        href={"/"}
        className={`
            inline-flex h-[56px] items-center justify-center text-nowrap px-[20px] font-medium
            ${
              pathname.endsWith("/")
                ? "font-semibold text-white"
                : "text-u-gray-300"
            }
          `}
      >
        AI 음악 만들기
      </Link>
      <Link
        href={"/library"}
        className={`
        inline-flex h-[56px] items-center justify-center text-nowrap px-[20px] font-medium
            ${
              pathname.endsWith("/library")
                ? "font-semibold text-white"
                : "text-u-gray-300"
            }
          `}
      >
        음악 라이브러리
      </Link>
    </nav>
  );
};
export default Href;
