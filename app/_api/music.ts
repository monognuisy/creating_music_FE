import axios from "@/app/_api/axiosinterceptors";
import type { Music } from "../_types/music";
import { AxiosError } from "axios";

interface resCreateMusic {
  inSucess: boolean;
  code: number;
  message: string;
  result: Music;
}

export interface CreateMusicRequestBody {
  name: string;
  genre: string;
  mood: string;
  tempo: string;
}

export const createMusic = async ({
  name,
  genre,
  mood,
  tempo,
}: CreateMusicRequestBody) => {
  let reqdata = {
    music_name: name,
    genre,
    mood,
    tempo,
  };
  try {
    const res = await axios.post(`/musics/generate`, reqdata);

    const ret: resCreateMusic = res.data;

    if (ret.code >= 400) throw new AxiosError();

    return ret;
  } catch (err) {
    console.error(err);
  }
};
