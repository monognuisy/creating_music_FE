"use client";

import GoogleAuthLogin from "./GoogleAuthLogin";

export default function Home() {
  // const [selectedGenre, setSelectedGenre] = useState<string>("");
  // const [selectedMood, setSelectedMood] = useState<string>("");
  // const [selectedTempo, setSelectedTempo] = useState<string>("");

  // const onChangeSelectedGenre = (genre: string) => setSelectedGenre(genre);
  // const onChangeSelectedMood = (mood: string) => setSelectedMood(mood);
  // const onChangeSelectedTempo = (tempo: string) => setSelectedTempo(tempo);
  // const [getState, setState] = useState<boolean>(false);
  // const onChangeSelectedState = (st: boolean) => setState(st);

  return (
    <main className="flex-1  bg-black px-[2rem] py-16">
      <GoogleAuthLogin />
    </main>
  );
}
