import React, { useState } from "react";
const REST_API_KEY = "656cda00fe6f12998b76836a2f511ca5";
const REDIRECT_URI = "https://showpang.org/user/oauth/kakaologin";
const KakaoAuthLogin = () => {
  // popup { 열릴때 WindowProxy , 닫칠때 null } 반환
  const [getPopup, setPopup] = useState<WindowProxy | null>();
  const handleLogin = () => {
    // 구글 로그인 화면으로 이동시키기
    window.location.href = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&response_type=code&redirect_uri=${REDIRECT_URI}&scope=account_email,profile_image,profile_nickname`;
  };
  return (
    <>
      <button onClick={handleLogin}>kakao login</button>
      <br></br>
    </>
  );
};

export default KakaoAuthLogin;
