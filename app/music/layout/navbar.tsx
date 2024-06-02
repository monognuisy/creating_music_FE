import Image from "next/image";
import Search from "./_components/search";
import Href from "./_components/href";
import Login from "./_components/login";
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
              width={200}
              height={56}
              className="aspect-[25/7] h-full"
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
