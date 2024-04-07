import { Input } from "@mui/base";
import Choice from "./choice";
// import { SelectOption } from "@mui/base";
import { SelectSet } from "./selectSet";
import { genreChoices, moodChoices, tempoChoices } from "../data";
import { ChoiceType } from "../types";
import React, { useState } from "react";
import Button from "@/app/_components/Button";

interface MusicCreateInputProps {
  title: string;
  selectedGenre: string;
  selectedMood: string;
  selectedTempo: string;
  getState: boolean;
  onChangeTitle: (title: string) => void;
  onChangeSelectedGenre: (label: string) => void;
  onChangeSelectedMood: (label: string) => void;
  onChangeSelectedTempo: (label: string) => void;
  onChangeSelectedState: (st: boolean) => void;
}
export default function MusicCreateInput({
  title,
  selectedGenre,
  selectedMood,
  selectedTempo,
  getState,
  onChangeTitle,
  onChangeSelectedGenre,
  onChangeSelectedMood,
  onChangeSelectedTempo,
  onChangeSelectedState,
}: MusicCreateInputProps) {
  const [getTitle, setTitle] = useState("");
  const onPupupGenre = () => {
    setTitle("Genre");
    onChangeSelectedState(true);
  };
  const onPupupMood = () => {
    setTitle("Mood");
    onChangeSelectedState(true);
  };
  const onPupupTempo = () => {
    setTitle("Tempo");
    onChangeSelectedState(true);
  };
  const deleteGenre = () => {
    onChangeSelectedGenre("");
  };
  const deleteMood = () => {
    onChangeSelectedMood("");
  };
  const deleteTempo = () => {
    onChangeSelectedTempo("");
  };

  return (
    <div className="flex w-full flex-col gap-[0.5rem] pr-[4rem]">
      <p className="text-[2rem] font-semibold text-white">Music Title</p>
      <Input
        type="text"
        required
        // autoFocus
        value={title}
        onChange={(e) => onChangeTitle(e.target.value)}
        placeholder="제목을 입력하세요."
        slotProps={{
          input: {
            className:
              "placeholder-[#52525B] placeholder text-[#A1A1AA] text-[1.5rem] w-full px-[1.5625rem] py-[0.5rem] bg-black border-none rounded-[1.5rem] focus:border-none focus:box-shadow-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-transparent",
          },
        }}
      />
      <p className="text-[2rem] font-semibold text-white">Genre</p>
      {selectedGenre !== "" ? (
        <button onClick={deleteGenre}>
          <Choice
            label={selectedGenre}
            selected={selectedGenre}
            onChangeSelected={onChangeSelectedGenre}
          />
        </button>
      ) : (
        <button
          className="h-[2.75rem] text-[1.25rem] text-[#52525B]"
          onClick={onPupupGenre}
        >
          장르를 선택해주세요
        </button>
      )}

      <p className="text-[2rem] font-semibold text-white">Mood</p>
      {selectedMood !== "" ? (
        <button onClick={deleteMood}>
          <Choice
            label={selectedMood}
            selected={selectedMood}
            onChangeSelected={onChangeSelectedMood}
          />
        </button>
      ) : (
        <>
          <button
            className="h-[2.75rem] text-[1.25rem] text-[#52525B]"
            onClick={onPupupMood}
          >
            무드를 선택해주세요
          </button>
        </>
      )}
      <p className="text-[2rem] font-semibold text-white">Tempo</p>
      {selectedTempo !== "" ? (
        <button onClick={deleteTempo}>
          <Choice
            label={selectedTempo}
            selected={selectedTempo}
            onChangeSelected={onChangeSelectedTempo}
          />
        </button>
      ) : (
        <>
          <button
            className="h-[2.75rem] text-[1.25rem] text-[#52525B]"
            onClick={onPupupTempo}
          >
            템포를 선택해주세요
          </button>
        </>
      )}
      {getState === true && getTitle === "Genre" ? (
        <SelectSet
          PopupTitle={getTitle}
          list={genreChoices}
          selected={selectedGenre}
          onChangeSelected={onChangeSelectedGenre}
          getState={getState}
          onChangeSelectedState={onChangeSelectedState}
        ></SelectSet>
      ) : (
        <></>
      )}
      {getState === true && getTitle === "Mood" ? (
        <SelectSet
          PopupTitle={getTitle}
          list={moodChoices}
          selected={selectedMood}
          onChangeSelected={onChangeSelectedMood}
          getState={getState}
          onChangeSelectedState={onChangeSelectedState}
        ></SelectSet>
      ) : (
        <></>
      )}
      {getState === true && getTitle === "Tempo" ? (
        <SelectSet
          PopupTitle={getTitle}
          list={tempoChoices}
          selected={selectedTempo}
          onChangeSelected={onChangeSelectedTempo}
          getState={getState}
          onChangeSelectedState={onChangeSelectedState}
        ></SelectSet>
      ) : (
        <></>
      )}
    </div>
  );
}
