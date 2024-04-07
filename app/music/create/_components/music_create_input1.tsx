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
  onChangeTitle: (title: string) => void;
}
export default function MusicCreateInput({
  title,
  onChangeTitle,
}: MusicCreateInputProps) {
  return (
    <div className="flex w-full flex-col gap-[0.5rem] pr-[4rem]">
      <p className="text-[2rem] font-semibold text-white">Music Title</p>
      <Input
        type="text"
        required
        autoFocus
        value={title}
        // value={getti}
        onChange={(e) => onChangeTitle(e.target.value)}
        // onChange={(e) => setti(e.target.value)}
        placeholder="제목을 입력하세요."
        slotProps={{
          input: {
            className:
              "placeholder-[#52525B] placeholder text-[#A1A1AA] text-[1.5rem] w-full px-[1.5625rem] py-[0.5rem] bg-black border-none rounded-[1.5rem] focus:border-none focus:box-shadow-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-transparent",
          },
        }}
      />
    </div>
  );
}
