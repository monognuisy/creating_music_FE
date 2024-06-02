"use client";

import MusicCreateForm from "./_components/music_create_form";
import Menu from "./_components/menu";
import { useState } from "react";
import { genreChoices, moodChoices } from "./data";

export default function Home() {
  return (
    <main className="flex-1  bg-black px-[2rem] py-16">
      <MusicCreateForm />
    </main>
  );
}
