"use client";

import Frame from "@/app/_components/Frame";
import ContentFrame from "./_components/ContentFrame";
import { Button } from "@mui/base";
import MusicList from "@/app/music/list/_components/MusicList";
import { useQuery } from "@tanstack/react-query";
import axios from "../../axiosoverwrite/axiosinterceptors";

export default function Page() {
  const { data } = useQuery({
    queryKey: ["library", "my"],
    queryFn: () =>
      axios.get("http://192.168.0.10:8080/library/musics", {
        withCredentials: true,
      }),
    select: (res) => res.data.result.musics,
  });

  const musicList = data ?? [];

  return (
    <>
      <Frame className="mx-auto mt-[5rem] flex w-[79rem] flex-col gap-[3rem] px-[2rem] py-[3rem]">
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
        {/* <ContentFrame
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
          <MusicList musicList={musicMock} />
        </ContentFrame>
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
          <MusicList musicList={musicMock} />
        </ContentFrame> */}
      </Frame>
    </>
  );
}
