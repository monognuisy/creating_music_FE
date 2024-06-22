import axios from "axios";
import { resLogin, doReSession } from "../user/userUtil";

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
    console.log("[DEBUG] axiosinterceptors.ts config.url", config.url);
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
    console.log("[DEBUG]tmp axiosintercepters.ts res.data ", res.data);
    // 기존  return axiosInstance(config); 뭐가 다른거지?
    return res.data;
  },
  (error) => doReSession({ ...error }),
);
export default axiosInstance;
