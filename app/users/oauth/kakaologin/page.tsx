"use client";

import KakaoAuthLogin from "./KakaoAuthLogin";

export default function Home() {
  return (
    <main className="flex-1  bg-black px-[2rem] py-16">
      <KakaoAuthLogin />
    </main>
  );
}
