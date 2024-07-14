import Choice from "./Choice";
import { SelectSet } from "./SelectSet";
import { genreChoices, moodChoices, tempoChoices } from "../../_constants/data";
import React, { useState } from "react";
interface MusicCreateSelectProps {
  selectedGenre: string;
  selectedMood: string;
  selectedTempo: string;
  onChangeSelectedGenre: (label: string) => void;
  onChangeSelectedMood: (label: string) => void;
  onChangeSelectedTempo: (label: string) => void;
}
export default function MusicCreateSelect({
  selectedGenre,
  selectedMood,
  selectedTempo,
  onChangeSelectedGenre,
  onChangeSelectedMood,
  onChangeSelectedTempo,
}: MusicCreateSelectProps) {
  const [getOption, setOption] = useState("");
  const [selectState, setSelectState] = useState(false);

  const onChangeOption = (inOption: string) => setOption(inOption);

  const onPopupGenre = () => {
    onChangeOption("Genre");
    handleChangeSelectedState(true);
  };

  const onPopupMood = () => {
    onChangeOption("Mood");
    handleChangeSelectedState(true);
  };

  const onPopupTempo = () => {
    onChangeOption("Tempo");
    handleChangeSelectedState(true);
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

  const handleChangeSelectedState = (st: boolean) => setSelectState(st);

  return (
    <div className="flex flex-col gap-[16px]">
      <div>
        <p className="text-[1.75rem] font-semibold text-white">Genre</p>
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
            className="h-[2.75rem] px-[1.5rem] py-[0.5rem] text-[1.25rem] text-[#52525B]"
            onClick={onPopupGenre}
          >
            장르를 선택해주세요
          </button>
        )}
      </div>
      <div>
        <p className="text-[1.75rem]  font-semibold text-white">Mood</p>
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
              className="h-[2.75rem] px-[1.5rem] py-[0.5rem]  text-[1.25rem] text-[#52525B]"
              onClick={onPopupMood}
            >
              무드를 선택해주세요
            </button>
          </>
        )}
      </div>
      <div>
        <p className="text-[1.75rem] font-semibold text-white">Tempo</p>
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
              className="h-[2.75rem] px-[1.5rem] py-[0.5rem]  text-[1.25rem] text-[#52525B]"
              onClick={onPopupTempo}
            >
              템포를 선택해주세요
            </button>
          </>
        )}
      </div>
      {selectState === true && getOption === "Genre" ? (
        <SelectSet
          PopupTitle={getOption}
          list={genreChoices}
          selected={selectedGenre}
          onChangeSelected={onChangeSelectedGenre}
          selectState={selectState}
          onChangeSelectedState={handleChangeSelectedState}
        ></SelectSet>
      ) : null}
      {selectState === true && getOption === "Mood" ? (
        <SelectSet
          PopupTitle={getOption}
          list={moodChoices}
          selected={selectedMood}
          onChangeSelected={onChangeSelectedMood}
          selectState={selectState}
          onChangeSelectedState={handleChangeSelectedState}
        ></SelectSet>
      ) : null}
      {selectState === true && getOption === "Tempo" ? (
        <SelectSet
          PopupTitle={getOption}
          list={tempoChoices}
          selected={selectedTempo}
          onChangeSelected={onChangeSelectedTempo}
          selectState={selectState}
          onChangeSelectedState={handleChangeSelectedState}
        ></SelectSet>
      ) : null}
    </div>
  );
}
