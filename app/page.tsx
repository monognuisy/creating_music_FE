"use client";

import { useState } from "react";
import MusicCreateForm from "./music/create/_components/music_create_form";
import ContentFrame from "./music/list/_components/ContentFrame";
import MusicList from "./music/list/_components/MusicList";
import { Music } from "./music/list/types";

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
