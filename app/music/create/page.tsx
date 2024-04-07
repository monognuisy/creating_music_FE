"use client";

import MusicCreateForm from "./_components/music_create_form";
import Menu from "./_components/menu";
import { useState } from "react";
import { genreChoices, moodChoices } from "./data";

export default function Home() {
  // 이새끼가 음악 설정 상태인거 같아
  const [selectedGenre, setSelectedGenre] = useState<string>("");
  const [selectedMood, setSelectedMood] = useState<string>("");
  const [selectedTempo, setSelectedTempo] = useState<string>("");
  const [getState, setState] = useState<boolean>(false);

  const onChangeSelectedGenre = (genre: string) => setSelectedGenre(genre);
  const onChangeSelectedMood = (mood: string) => setSelectedMood(mood);
  const onChangeSelectedTempo = (tempo: string) => setSelectedTempo(tempo);
  const onChangeSelectedState = (st: boolean) => setState(st);

  return (
    <main className="flex-1  bg-black px-[2rem] py-16">
      <MusicCreateForm
        selectedGenre={selectedGenre}
        selectedMood={selectedMood}
        selectedTempo={selectedTempo}
        getState={getState}
        onChangeSelectedGenre={onChangeSelectedGenre}
        onChangeSelectedMood={onChangeSelectedMood}
        onChangeSelectedTempo={onChangeSelectedTempo}
        onChangeSelectedState={onChangeSelectedState}
      />
      {/* <Menu
        title="장르"
        list={genreChoices}
        selected={selectedGenre}
        onChangeSelected={onChangeSelectedGenre}
      /> */}
      {/* <Menu
        title="무드"
        list={moodChoices}
        selected={selectedMood}
        onChangeSelected={onChangeSelectedMood}
      /> */}
    </main>
  );
}
