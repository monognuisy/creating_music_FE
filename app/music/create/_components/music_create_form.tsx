"use client";

import { MouseEventHandler, useState } from "react";
import MusicCover from "./music_cover";
import MusicTextInput from "./music_text_input";
import MusicCreateSelect from "./music_create_select";
import {
  CreateMusicRequestBody,
  createMusic,
} from "@/app/music/create/createUtil";
import { Button } from "@mui/base";
import { useMutation } from "@tanstack/react-query";
import { Music } from "../../list/types";

interface MusicCreateFormProps {
  onSuccessCreate?: (music: Music) => void;
}

export default function MusicCreateForm({
  onSuccessCreate,
}: MusicCreateFormProps) {
  const [title, setTitle] = useState<string>("");
  const [selectedGenre, setSelectedGenre] = useState<string>("");
  const [selectedMood, setSelectedMood] = useState<string>("");
  const [selectedTempo, setSelectedTempo] = useState<string>("");
  const { mutate } = useMutation({
    mutationKey: ["create", "music"],
    mutationFn: async (body: CreateMusicRequestBody) => {
      const res = await createMusic(body);
      return res;
    },
    onSuccess: (res) => {
      if (!res) return;

      onSuccessCreate && onSuccessCreate(res.result);
    },
  });

  const onChangeTitle = (title: string) => setTitle(title);
  const onChangeSelectedGenre = (genre: string) => setSelectedGenre(genre);
  const onChangeSelectedMood = (mood: string) => setSelectedMood(mood);
  const onChangeSelectedTempo = (tempo: string) => setSelectedTempo(tempo);

  const onSubmit: MouseEventHandler<HTMLButtonElement> = async (e) => {
    e.preventDefault();
    mutate({
      name: title,
      genre: selectedGenre,
      mood: selectedMood,
      tempo: selectedTempo,
    });
  };

  const submitButtonEnabled = [
    title,
    selectedGenre,
    selectedMood,
    selectedTempo,
  ].every((v) => !!v);

  return (
    <form name="music-create">
      <section className="mx-auto w-full max-w-[87.5rem] rounded-[1rem] bg-u-gray-400 p-[7.5rem] pb-[5rem]">
        <div className="flex flex-row gap-[5.5rem]">
          <MusicCover />
          <div className="flex flex-col">
            <MusicTextInput value={title} onChange={onChangeTitle} />
            <MusicCreateSelect
              selectedGenre={selectedGenre}
              selectedMood={selectedMood}
              selectedTempo={selectedTempo}
              onChangeSelectedGenre={onChangeSelectedGenre}
              onChangeSelectedMood={onChangeSelectedMood}
              onChangeSelectedTempo={onChangeSelectedTempo}
            />
          </div>
        </div>
        <div className="mt-[3.75rem] flex justify-end gap-[1rem]">
          <Button
            type="submit"
            disabled={!submitButtonEnabled}
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
