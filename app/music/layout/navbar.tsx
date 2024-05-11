import Image from "next/image";
import Search from "./_components/search";
import Href from "./_components/href";
import Login from "./_components/login";

export default function Navbar() {
  return (
    <nav>
      <div className="mx-auto flex h-[3rem] w-[75rem] items-center justify-between gap-[1rem] bg-u-gray-400">
        <div className="flex items-center">
          <Image
            alt={`로고`}
            src={`${process.env.NEXT_PUBLIC_IMAGE}/showpang_logo.png`}
            width={200}
            height={56}
          />
          <Search />
          <Href />
        </div>
        <Login />
      </div>
    </nav>
  );
}
