// `use client`;
import React, { useState, useEffect } from "react";
import { doGoogleLogin, resLogin } from "../../userUtil";
import { useLogin } from "@/app/LoginContext";
const GoogleAuthLogin = () => {
  //   const [getCode, setCode] = useState<string | null>("");
  const { getLoginStatus, chLogin } = useLogin();
  const sendCode = async (inaccessCode: string | null) => {
    let ret: resLogin = await doGoogleLogin(inaccessCode);

    if (ret.isSuccess == true) {
      alert("로그인 성공");
      // 로그인 성공시 로그인버튼 -> 로그 아웃 버튼
      chLogin();
      window.location.href = "/";
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
    // console.log(accessCode);
    sendCode(accessCode);
  }, []);
  return (
    <>
      <h3>test</h3>
      <br></br>
    </>
  );
};

export default GoogleAuthLogin;
