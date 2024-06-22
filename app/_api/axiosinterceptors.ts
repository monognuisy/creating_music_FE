import axios from "axios";
import { resLogin } from "../user/userUtil";

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
// const errorHandler = async (error: string) => {};
const getAccessToken = async (inerror: any): Promise<string | void> => {
  try {
    // refresh token 을 같이 요청 하기 access 는 헤더에 존재
    const addr = "/users/reissue";
    // const {
    //   data: { resLogin },
    // };
    const data: resLogin = await axiosInstance(addr, {
      method: "POST",
      withCredentials: true,
    });
    console.log("data");
    console.log(data);
    console.log("result");
    console.log(data.result);
    console.log("accessToken");
    console.log(data.result.accessToken);
    if (data.result.accessToken !== null) {
      console.log("true resession");
      sessionStorage.setItem("accessToken", data.result.accessToken);
      sessionStorage.setItem("email", data.result.email);
      sessionStorage.setItem("nickname", data.result.nickname);
      sessionStorage.setItem("profileUrl", data.result.profileUrl);
    }
    // 재요청 로직
    // return axiosInstance.request(inerror.config);
    return "a";
  } catch (error) {
    console.log("error resession");
    sessionStorage.removeItem("accessToken");
    sessionStorage.removeItem("email");
    sessionStorage.removeItem("nickname");
    sessionStorage.removeItem("profileUrl");
    sessionStorage.removeItem("st");
    return Promise.reject(inerror);
  }
};

axiosInstance.interceptors.response.use(
  (res) => {
    console.log("[DEBUG]tmp axiosintercepters.ts res.data ", res.data);
    // 기존  return axiosInstance(config); 뭐가 다른거지?
    return res.data;
  },
  (error) => getAccessToken({ ...error }),
);
export default axiosInstance;
