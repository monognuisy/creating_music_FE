"use client";

import Image from "next/image";
import type { Music } from "@/app/_types/music";
import { Button } from "@mui/base";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Hls from "hls.js";
import axios from "@/app/_api/axiosinterceptors";
import MusicProgressBar from "./MusicProgressBar";
interface Props {
  order: number;
  music: Music;
}

export default function MusicBar({ music, order }: Props) {
  const musicRef = useRef<HTMLMediaElement | null>(null);
  const hlsRef = useRef<Hls | null>(null);
  const [playing, setPlaying] = useState(false);
  const [remain, setRemain] = useState(music.length);
  const timerIdRef = useRef<NodeJS.Timer | undefined>(undefined);

  const { data: musicSrc } = useQuery({
    queryKey: ["musics", music.music_id, "streaming"],
    queryFn: () =>
      axios.get(`/musics/${music.music_id}/streaming`, {
        withCredentials: true,
      }),
    select: (res) => (res as unknown as any).result.index_file_url,
  });

  useEffect(() => {
    if (!Hls.isSupported() || !musicRef.current || !musicSrc) return;
    hlsRef.current = new Hls({
      autoStartLoad: false,
    });
    hlsRef.current.loadSource(musicSrc);
    hlsRef.current.attachMedia(musicRef.current);
  }, [musicSrc]);

  useEffect(() => {
    if (!playing) {
      clearInterval(timerIdRef.current);
      return;
    }

    timerIdRef.current = setInterval(() => {
      const total = musicRef.current?.duration ?? music.length;
      const elapsed = musicRef.current?.currentTime ?? 0;
      const remain =
        Math.floor(total - elapsed) > 0 ? Math.floor(total - elapsed) : 0;
      setRemain(remain);
      if (remain <= 0) setPlaying(false);
    }, 1000);

    return () => {
      clearInterval(timerIdRef.current);
    };
  }, [playing, music.length]);

  const handleClickPlay = () => {
    if (!musicRef.current || !hlsRef.current) return;

    hlsRef.current.startLoad();
    if (musicRef.current.paused) {
      musicRef.current.play();
      setPlaying(true);
    } else {
      musicRef.current.pause();
      setPlaying(false);
    }
  };

  const total = musicRef.current?.duration ?? music.length;
  const progress = ((total - remain) / total) * 100;

  return (
    <div className="bg-ugray-500 flex h-[120px] w-full px-[1.5rem] py-[1.25rem]">
      <div className="line-clamp-1 flex h-full w-[80px] items-center justify-center overflow-ellipsis text-[1.25rem] font-medium text-white">
        {order}
      </div>
      <Button className="relative h-[80px] w-[80px] flex-shrink-0 overflow-hidden rounded-[4px]">
        {music.cover_url ? (
          <Image alt="" src={music.cover_url} fill />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-u-gray-300">
            <Image
              src={`${process.env.NEXT_PUBLIC_ICON}/${"music.svg"}`}
              alt=""
              width={40}
              height={40}
            />
          </div>
        )}
      </Button>
      <div className="flex h-full w-[240px] flex-col justify-center text-center">
        <Link href="">
          <h3 className="line-clamp-1 w-full overflow-ellipsis">
            {music.music_name}
          </h3>
        </Link>
      </div>
      <div className="line-clamp-1 flex h-full w-[80px] items-center justify-center overflow-ellipsis text-u-gray-200">
        <Link href="">{music.genre}</Link>
      </div>
      <div className="flex h-full w-[80px] items-center justify-center">
        <audio ref={musicRef} className="hidden" />
        <Button onClick={handleClickPlay}>
          <Image
            src={`${process.env.NEXT_PUBLIC_ICON}/${
              playing ? "pause.svg" : "play.svg"
            }`}
            alt=""
            width={24}
            height={24}
          />
        </Button>
      </div>
      <div className="flex h-full w-[80px] items-center justify-center text-u-gray-200">
        {parseSecToString(remain)}
      </div>
      <div className="flex h-full w-[280px] items-center justify-center text-u-gray-200">
        <MusicProgressBar progress={progress} />
      </div>
    </div>
  );
}

const parseSecToString = (sec: number, format: "mm:ss" = "mm:ss") => {
  switch (format) {
    case "mm:ss":
      const mm =
        sec / 60 < 10 ? `0${Math.floor(sec / 60)}` : `${Math.floor(sec / 60)}`;
      const ss = sec % 60 < 10 ? `0${sec % 60}` : `${sec % 60}`;

      return `${mm}:${ss}`;

    default:
      throw new Error("unreachable");
  }
};
