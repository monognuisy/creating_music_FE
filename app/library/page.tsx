"use client";

import Frame from "@/app/_components/Frame";
import { Button } from "@mui/base";
import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../_api/axiosinterceptors";
import ContentFrame from "../_components/layout/ContentFrame";
import MusicList from "../_components/music/MusicList";

export default function Page() {
  const { data } = useQuery({
    queryKey: ["library"],
    queryFn: () => axiosInstance.get("/library/musics"),
    select: (res) => (res as any).result.musics,
  });

  const musicList = data ?? [];

  return (
    <>
      <Frame className="mx-auto flex w-full flex-col gap-[3rem] py-[3rem]">
        <ContentFrame
          title="내가 만든 음악"
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
