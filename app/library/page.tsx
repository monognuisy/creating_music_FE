"use client";

import Frame from "@/app/_components/Frame";
import ContentFrame from "./_components/ContentFrame";
import { Button } from "@mui/base";
import MusicList from "@/app/library/_components/MusicList";
import { useQuery } from "@tanstack/react-query";
import axios from "../axiosoverwrite/axiosinterceptors";

export default function Page() {
  const { data } = useQuery({
    queryKey: ["library"],
    queryFn: () => axios.get("/library/musics"),
    select: (res) => res.data.result.musics,
  });

  const musicList = data ?? [];

  return (
    <>
      <Frame className="mx-auto flex w-full flex-col gap-[3rem] py-[3rem]">
        <ContentFrame
          title="인기차트"
          addon={
            <Button
              slotProps={{
                root: {
                  className: "text-u-gray-200 text-[1.125rem]",
                },
              }}
            >
              더보기
            </Button>
          }
        >
          <MusicList musicList={musicList} />
        </ContentFrame>
      </Frame>
    </>
  );
}
