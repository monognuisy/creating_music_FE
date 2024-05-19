import Choice from "./choice";
import { SelectSet } from "./selectSet";
import { genreChoices, moodChoices, tempoChoices } from "../data";
import React, { useState } from "react";

interface MusicCreateSelectProps {
  selectedGenre: string;
  selectedMood: string;
  selectedTempo: string;
  getState: boolean;
  onChangeSelectedGenre: (label: string) => void;
  onChangeSelectedMood: (label: string) => void;
  onChangeSelectedTempo: (label: string) => void;
  onChangeSelectedState: (st: boolean) => void;
}
export default function MusicCreateSelect({
  selectedGenre,
  selectedMood,
  selectedTempo,
  getState,
  onChangeSelectedGenre,
  onChangeSelectedMood,
  onChangeSelectedTempo,
  onChangeSelectedState,
}: MusicCreateSelectProps) {
  const [getOption, setOption] = useState("");

  const onChangeOption = (inOption: string) => setOption(inOption);
  const onPupupGenre = () => {
    onChangeOption("Genre");
    onChangeSelectedState(true);
  };
  const onPupupMood = () => {
    onChangeOption("Mood");
    onChangeSelectedState(true);
  };
  const onPupupTempo = () => {
    onChangeOption("Tempo");
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
    <div>
      <p className="text-[2rem] font-semibold text-white">Genre</p>
      {selectedGenre !== "" ? (
        <button type="button" onClick={deleteGenre}>
          <Choice
            label={selectedGenre}
            selected={selectedGenre}
            onChangeSelected={onChangeSelectedGenre}
          />
        </button>
      ) : (
        <button
          type="button"
          className="h-[2.75rem] text-[1.25rem] text-[#52525B]"
          onClick={onPupupGenre}
        >
          장르를 선택해주세요
        </button>
      )}

      <p className="text-[2rem] font-semibold text-white">Mood</p>
      {selectedMood !== "" ? (
        <button type="button" onClick={deleteMood}>
          <Choice
            label={selectedMood}
            selected={selectedMood}
            onChangeSelected={onChangeSelectedMood}
          />
        </button>
      ) : (
        <>
          <button
            type="button"
            className="h-[2.75rem] text-[1.25rem] text-[#52525B]"
            onClick={onPupupMood}
          >
            무드를 선택해주세요
          </button>
        </>
      )}
      <p className="text-[2rem] font-semibold text-white">Tempo</p>
      {selectedTempo !== "" ? (
        <button type="button" onClick={deleteTempo}>
          <Choice
            label={selectedTempo}
            selected={selectedTempo}
            onChangeSelected={onChangeSelectedTempo}
          />
        </button>
      ) : (
        <>
          <button
            type="button"
            className="h-[2.75rem] text-[1.25rem] text-[#52525B]"
            onClick={onPupupTempo}
          >
            템포를 선택해주세요
          </button>
        </>
      )}
      {getState === true && getOption === "Genre" ? (
        <SelectSet
          PopupTitle={getOption}
          list={genreChoices}
          selected={selectedGenre}
          onChangeSelected={onChangeSelectedGenre}
          getState={getState}
          onChangeSelectedState={onChangeSelectedState}
        ></SelectSet>
      ) : null}
      {getState === true && getOption === "Mood" ? (
        <SelectSet
          PopupTitle={getOption}
          list={moodChoices}
          selected={selectedMood}
          onChangeSelected={onChangeSelectedMood}
          getState={getState}
          onChangeSelectedState={onChangeSelectedState}
        ></SelectSet>
      ) : null}
      {getState === true && getOption === "Tempo" ? (
        <SelectSet
          PopupTitle={getOption}
          list={tempoChoices}
          selected={selectedTempo}
          onChangeSelected={onChangeSelectedTempo}
          getState={getState}
          onChangeSelectedState={onChangeSelectedState}
        ></SelectSet>
      ) : null}
    </div>
  );
}
