"use client";

import { useState } from "react";
import MusicCreateForm from "./_components/music/MusicCreateForm";
import ContentFrame from "./_components/layout/ContentFrame";
import MusicList from "./_components/music/MusicList";
import { Music } from "./_types/music";

export default function Home() {
  const [musicList, setMusicList] = useState<Music[]>([]);

  return (
    <main className="mx-auto flex w-full max-w-[1200px] flex-col gap-[40px] py-[40px]">
      <MusicCreateForm
        onSuccessCreate={(music) => setMusicList([music, ...musicList])}
      />
      <ContentFrame title="음악 들어보기">
        <MusicList musicList={musicList} />
      </ContentFrame>
    </main>
  );
}
