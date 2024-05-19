"use client";

import { MouseEventHandler, useEffect, useState } from "react";
import MusicCover from "./music_cover";
import MusicCreateInput from "./music_create_input";
import MusicCreateSelect from "./music_create_select";
import { createMusic } from "@/app/music/create/createUtil";
import { Button } from "@mui/base";

interface MusicCreateFormProps {}

export default function MusicCreateForm({}: MusicCreateFormProps) {
  const [title, setTitle] = useState<string>("");
  const onChangeTitle = (title: string) => setTitle(title);
  const [getState, setState] = useState<boolean>(false);
  const onChangeSelectedState = (st: boolean) => setState(st);
  const [selectedGenre, setSelectedGenre] = useState<string>("");
  const [selectedMood, setSelectedMood] = useState<string>("");
  const [selectedTempo, setSelectedTempo] = useState<string>("");
  const onChangeSelectedGenre = (genre: string) => setSelectedGenre(genre);
  const onChangeSelectedMood = (mood: string) => setSelectedMood(mood);
  const onChangeSelectedTempo = (tempo: string) => setSelectedTempo(tempo);
  const [buttonEnabled, setButtonEnabled] = useState<boolean>(true);

  useEffect(() => {
    if (title !== "" && selectedGenre !== "" && selectedMood !== "")
      setButtonEnabled(true);
    else setButtonEnabled(false);
  }, [title, selectedGenre, selectedMood]);
  const onSubmit: MouseEventHandler<HTMLButtonElement> = async (e) => {
    e.preventDefault();
    let ret = await createMusic(
      title,
      selectedGenre,
      selectedMood,
      selectedTempo,
    );
  };

  return (
    <form name="music-create">
      <section className="mx-auto w-full max-w-[87.5rem] rounded-[1rem] bg-u-gray-400 p-[7.5rem] pb-[5rem]">
        <div className="flex flex-row gap-[5.5rem]">
          <MusicCover />
          {/* 여기가 음악 장르 부분인거 같아 */}
          <div className="flex flex-col">
            <MusicCreateInput title={title} onChangeTitle={onChangeTitle} />
            <MusicCreateSelect
              selectedGenre={selectedGenre}
              selectedMood={selectedMood}
              selectedTempo={selectedTempo}
              getState={getState}
              onChangeSelectedGenre={onChangeSelectedGenre}
              onChangeSelectedMood={onChangeSelectedMood}
              onChangeSelectedTempo={onChangeSelectedTempo}
              onChangeSelectedState={onChangeSelectedState}
            />
          </div>
        </div>
        <div className="mt-[3.75rem] flex justify-end gap-[1rem]">
          <Button
            type="submit"
            disabled={!buttonEnabled}
            onClick={onSubmit}
            slotProps={{
              root: {
                className:
                  "bg-[#52525b] rounded-[20px] font-medium text-[1.5rem] h-[40px] px-[24px] disabled:text-[#27272a]",
              },
            }}
          >
            생성하기
          </Button>
        </div>
      </section>
    </form>
  );
}
