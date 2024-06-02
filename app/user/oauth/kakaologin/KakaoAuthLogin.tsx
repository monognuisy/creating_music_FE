// `use client`;
import React, { useState, useEffect } from "react";
import { doKakaoLogin, resLogin } from "../../userUtil";
import { useLogin } from "@/app/LoginContext";
const KakaoAuthLogin = () => {
  //   const [getCode, setCode] = useState<string | null>("");
  const { getLoginStatus, chLogin } = useLogin();
  const sendCode = async (inaccessCode: string | null) => {
    console.log("kakao");
    let ret: resLogin = await doKakaoLogin(inaccessCode);

    if (ret.isSuccess == true) {
      chLogin();
      window.location.href = "/";
      alert("로그인 성공");
      // 로그인 성공시 로그인버튼 -> 로그 아웃 버튼
      // 리다이렉트 시키기
    } else {
      alert("로그인 실패");
    }
    // setLoginStatus();
  };
  useEffect(() => {
    var url = window.location.search;
    const parsedUrl = new URLSearchParams(url);
    const accessCode = parsedUrl.get("code");
    console.log(accessCode);
    sendCode(accessCode);
  }, []);
  return (
    <>
      <h3>test</h3>
      <br></br>
    </>
  );
};

export default KakaoAuthLogin;
