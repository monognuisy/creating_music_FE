import Image from "next/image";
import Search from "./Search";
import Href from "./Href";
import Login from "./Login";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="flex h-[56px] w-full bg-u-gray-400">
      <div className="mx-auto flex h-full w-full max-w-[1200px] items-center justify-between gap-[16px]">
        <div className="flex">
          <Link href={{ pathname: "/" }}>
            <Image
              alt={`로고`}
              src={`${process.env.NEXT_PUBLIC_IMAGE}/showpang_logo.png`}
              width={240}
              height={48}
              className="h-[36px] w-[180px] flex-shrink-0 object-cover"
            />
          </Link>
          <Search />
        </div>
        <Href />
        <Login />
      </div>
    </header>
  );
}
