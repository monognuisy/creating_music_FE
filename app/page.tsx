import MusicCreateForm from "./music/create/_components/music_create_form";
import ContentFrame from "./music/list/_components/ContentFrame";
import MusicList from "./music/list/_components/MusicList";
import { Music } from "./music/list/types";

export default function Home() {
  const musicList: Music[] = [
    {
      music_id: "1",
      owner: "홍길동",
      music_name: "음악이름1",
      length: 180,
      genre: "New Age",
      cover_url: "",
    },
    {
      music_id: "1",
      owner: "홍길동",
      music_name: "음악이름1",
      length: 180,
      genre: "New Age",
      cover_url: "",
    },
  ];
  // owner 필요

  return (
    <main className="mx-auto flex w-full max-w-[1200px] flex-col gap-[40px] py-[40px]">
      <MusicCreateForm />
      <ContentFrame title="음악 들어보기">
        <MusicList musicList={musicList} />
      </ContentFrame>
    </main>
  );
}
