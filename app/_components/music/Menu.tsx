"use client";

import Choice from "./Choice";
// import { ChoiceType } from "@/app/music/create/types";
import { ChoiceType } from "@/app/_types/music";

interface MenuProps {
  title: string;
  list: ChoiceType[];
  selected: string;
  onChangeSelected: (label: string) => void;
}
export default function Menu({
  title,
  list,
  selected,
  onChangeSelected,
}: MenuProps) {
  return (
    <section className="mx-auto mb-[1rem] mt-[1rem] w-full max-w-[87.5rem] rounded-[1rem] bg-u-gray-400 pl-[6rem] pr-[6rem]">
      <p className="h-[6.25rem] py-[1.625rem] text-center text-[2rem] font-bold  text-white">
        {title}
      </p>
      <hr className="mb-[0.25rem] h-0 w-full border-[2px] border-[#5A5A5A] " />
      <div className="flex h-[6.25rem] flex-row gap-[0.625rem] py-[1.875rem] pt-[1.625rem]">
        {list.map((item) => (
          <Choice
            key={item.label}
            label={item.label}
            selected={selected}
            onChangeSelected={onChangeSelected}
          />
        ))}
      </div>
    </section>
  );
}
