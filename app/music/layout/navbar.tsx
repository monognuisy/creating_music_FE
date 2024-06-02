import Image from "next/image";
import Search from "./_components/search";
import Href from "./_components/href";
import Login from "./_components/login";

export default function Navbar() {
  return (
    <header className="flex h-[56px] w-full bg-u-gray-400">
      <div className="mx-auto flex h-full w-full max-w-[1200px] items-center justify-between gap-[16px]">
        <div className="flex">
          <Image
            alt={`로고`}
            src={`${process.env.NEXT_PUBLIC_IMAGE}/showpang_logo.png`}
            width={200}
            height={56}

            onClick={() => {
              location.href = "/";
            }}
            className="aspect-[25/7] h-full"
          />
          <Search />
        </div>
        <Href />
        <Login />
      </div>
    </header>
  );
}
