import { MouseEventHandler, useEffect, useState } from "react";
import MusicCover from "./music_cover";
import MusicCreateInput from "./music_create_input";
import MusicCreateInput1 from "./music_create_input1";
import Button from "@/app/_components/Button";
import { createMusic } from "@/app/music/create/createUtil";

interface MusicCreateFormProps {
  selectedGenre: string;
  selectedMood: string;
  selectedTempo: string;
  getState: boolean;
  onChangeSelectedGenre: (label: string) => void;
  onChangeSelectedMood: (label: string) => void;
  onChangeSelectedTempo: (label: string) => void;
  onChangeSelectedState: (st: boolean) => void;
}

export default function MusicCreateForm({
  selectedGenre,
  selectedMood,
  selectedTempo,
  getState,
  onChangeSelectedGenre,
  onChangeSelectedMood,
  onChangeSelectedTempo,
  onChangeSelectedState,
}: MusicCreateFormProps) {
  const [title, setTitle] = useState<string>("");
  const onChangeTitle = (title: string) => setTitle(title);

  const [buttonEnabled, setButtonEnabled] = useState<boolean>(false);
  useEffect(() => {
    if (title !== "" && selectedGenre !== "" && selectedMood !== "")
      setButtonEnabled(true);
    else setButtonEnabled(false);
  }, [title, selectedGenre, selectedMood]);

  const onSubmit: MouseEventHandler<HTMLButtonElement> = async (e) => {
    console.log("submit");
    // console.log(title)
    // console.log(selectedGenre)
    // console.log(selectedMood)
    e.preventDefault();
    let ret = await createMusic(
      title,
      selectedGenre,
      selectedMood,
      selectedTempo,
    );

    // api 호출 ~
  };

  return (
    <form name="music-create">
      <section className="mx-auto w-[75rem] max-w-[87.5rem] rounded-[1rem] bg-u-gray-400 p-[7.5rem] pb-[5rem]">
        <div className="flex flex-row gap-[5.5rem]">
          <MusicCover />
          {/* 여기가 음악 장르 부분인거 같아 */}
          <MusicCreateInput1
            title={title}
            selectedGenre={selectedGenre}
            selectedMood={selectedMood}
            selectedTempo={selectedTempo}
            getState={getState}
            onChangeTitle={onChangeTitle}
            onChangeSelectedGenre={onChangeSelectedGenre}
            onChangeSelectedMood={onChangeSelectedMood}
            onChangeSelectedTempo={onChangeSelectedTempo}
            onChangeSelectedState={onChangeSelectedState}
          />
        </div>
        <div className="mt-[3.75rem] flex justify-end gap-[1rem]">
          <Button
            type="submit"
            disabled={!buttonEnabled}
            label={"공개하기"}
            onClick={onSubmit}
            filled={false}
            size="md"
          />
          <Button
            type="submit"
            disabled={!buttonEnabled}
            label="저장하기"
            onClick={onSubmit}
            filled={false}
            size="md"
          />
        </div>
      </section>
    </form>
  );
}
