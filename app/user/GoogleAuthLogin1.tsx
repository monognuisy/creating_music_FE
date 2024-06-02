// `use client`;
// import jwtDecode from "jwt-decode";
// import dotenv from "dotenv";
// dotenv.config();
// import { env } from "node:process";
// import { doGoogleLogin } from "./userUtil";
import React, { useState, useEffect } from "react";

const GoogleAuthLogin = () => {
  // popup { 열릴때 WindowProxy , 닫칠때 null } 반환
  const [getPopup, setPopup] = useState<WindowProxy | null>();
  const handleLogin = () => {
    // 구글 로그인 화면으로 이동시키기
    window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?
		client_id=607016687590-ms0vlgq7l4vaod00rhmko67vabdoium9.apps.googleusercontent.com
		&redirect_uri=https://showpang.org/user/oauth/googlelogin
		&response_type=code
		&scope=email profile`;
  };
  return (
    <>
      <button onClick={handleLogin}>google login</button>
      <br></br>
    </>
  );
};

export default GoogleAuthLogin;
