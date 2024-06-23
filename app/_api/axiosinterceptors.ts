import axios from "axios";
import { doReSession } from "../user/userUtil";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_DOMAIN,
  withCredentials: true,
});

const REFRESH_URL = process.env.NEXT_PUBLIC_DOMAIN;
axiosInstance.interceptors.request.use(
  (config: any) => {
    if (!config.headers) return config;
    let token: string | null = null;
    // 리프레쉬 요청이 아니라면 token을 헤더에 넣기
    if (config.url !== REFRESH_URL) {
      token = sessionStorage.getItem("accessToken");
    }
    if (token !== null) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(
  (res) => {
    // 기존  return axiosInstance(config); 뭐가 다른거지?

    // 타입 체크가 안되어서 여기가 사진 문제 원인가능성
    return res.data;
  },
  (error) => doReSession({ ...error }),
);
export default axiosInstance;
