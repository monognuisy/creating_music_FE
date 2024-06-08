import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_DOMAIN,
  withCredentials: true,
});

const REFRESH_URL = process.env.NEXT_PUBLIC_DOMAIN;
axiosInstance.interceptors.request.use((config: any) => {
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
});

const getAccessToken = async (): Promise<string | void> => {
  try {
    // refresh token 을 같이 요청 하기 access 는 헤더에 존재
    const addr = "/users/reissue";
    const {
      data: { resLogin },
    } = await axiosInstance(addr, {
      method: "POST",
      withCredentials: true,
    });

    if (resLogin.result.accessToken !== null) {
      sessionStorage.setItem("accessToken", resLogin.result.accessToken);
      sessionStorage.setItem("email", resLogin.result.email);
      sessionStorage.setItem("nickname", resLogin.result.nickname);
      sessionStorage.setItem("profileUrl", resLogin.result.profileUrl);
    }
    return "a";
  } catch (error) {
    localStorage.removeItem("accessToken");
    return;
  }
};

axiosInstance.interceptors.response.use(
  (res) => res,
  async (err) => {
    const {
      config,
      response: { status },
    } = err;

    if (status !== 401 || config.sent) {
      return Promise.reject(err);
    }

    // 만약 만료 시간이 다 끝난 경우
    config.sent = true;
    const acToken = await getAccessToken();
    // access 토큰이 없는 경우
    if (!acToken) {
      return Promise.reject(err);
    }
    // config.headers.
    return axiosInstance(config);
  },
);
export default axiosInstance;
