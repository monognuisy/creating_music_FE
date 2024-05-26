// `use client`;
// import { GoogleLogin, GoogleOAuthProvider } from "react-oauth-google";
// import jwtDecode from "jwt-decode";
// import dotenv from "dotenv";
// dotenv.config();
// import { env } from "node:process";
// import { doGoogleLogin } from "./userUtil";
import React, { useState, useEffect } from "react";
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

      {/* <GoogleOAuthProvider
        clientId="607016687590-ms0vlgq7l4vaod00rhmko67vabdoium9.apps.googleusercontent.com
		&redirect_uri=http://localhost:8080/users/login/oauth2/code/google
		&response_type=code
		&scope=email profile"
      >
        <GoogleLogin
          onSuccess={doGoogleLogin}
          onError={not}
          width="300px"
          useOneTap
        ></GoogleLogin>
      </GoogleOAuthProvider> */}
    </>
  );
};

export default KakaoAuthLogin;
