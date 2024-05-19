import axios from "@/app/axiosoverwrite/axiosinterceptors";

// var serveraddr = "http://192.168.0.4:8080";
// var serveraddr = "http://192.168.0.22:8080";
var serveraddr = "http://192.168.0.10:8080";
// webhook site
// var serveraddr = "https://webhook.site/bbdc11e7-f12a-4bb8-a9c1-72a6cfe60de5";

interface resUserInfo {
  accessToken: string;
  email: string;
  nickname: string;
  profileUrl: string;
}
interface musicdata {
  music_name: string; // 음악 이름
  genre: string; // 장르
  mood: string; // 무드
  tempo: string;
}
interface musicInfo {
  music_id: number;
  music_name: string;
  length: number;
  genre: string;
  cover_url: string;
}

interface resCreateMusic {
  inSucess: boolean;
  code: number;
  message: string;
  result: musicInfo;
}

export interface CreateMusicRequestBody {
  name: string;
  genre: string;
  mood: string;
  tempo: string;
}

const createMusic = async ({
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
  let ret;
  //   var addurl = "/musics/generate";
  var addurl = "/musics/generate";
  let res: resCreateMusic = await axios(serveraddr + addurl, {
    method: "POST",
    data: reqdata,
    withCredentials: true,
  });
  if (res.code === 100) {
    alert(res.message);
    console.log(res);
    ret = true;
  } else if (res.code === 200) {
    alert(res.message);
    ret = false;
  } else {
    alert(res.message);
    ret = false;
  }
  return ret;
};
export { createMusic };
