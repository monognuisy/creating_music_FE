"use client";

import Link from "next/link";
import { useState } from "react";
import LoginBt from "@/app/user/LoginBt";
import UserProfile from "@/app/user/UserProfile";
import { useLogin } from "@/app/LoginContext";
import { Button } from "@mui/base";
const Login = () => {
  var vanni = true;
  const [login, setLogin] = useState<boolean>(false);
  const onClickSignUp = () => {};
  const onClickLogin = () => setLogin(!login);
  const onClickLogout = () => setLogin(!login);
  // 민석
  const { getLoginStatus, chLogin, chLogout } = useLogin();
  const [getProfileIMG, setProfileIMG] = useState(
    "https://static-00.iconduck.com/assets.00/profile-default-icon-512x511-v4sw4m29.png",
  );
  const [getName, setName] = useState("");
  const deleteuserinfo = () => {
    setProfileIMG("");
    setName("");
  };
  const chuserinfo = (inImg: string, inName: string) => {
    setProfileIMG(inImg);
    setName(inName);
  };
  if (vanni == true) {
    return (
      <div className="flex h-full flex-shrink-0 items-center gap-[1rem]">
        <UserProfile
          getLoginStatus={getLoginStatus}
          getProfileIMG={getProfileIMG}
        ></UserProfile>
        <LoginBt
          getLoginStatus={getLoginStatus}
          // eLoginStatus={eLoginStatus}
          chLogin={chLogin}
          chLogout={chLogout}
          deleteuserinfo={deleteuserinfo}
        ></LoginBt>
      </div>
    );
  } else {
    return (
      <div className="flex h-full flex-shrink-0 items-center gap-[1rem]">
        {login ? (
          <Link href="/mypage"></Link>
        ) : (
          <Button onClick={onClickSignUp}>회원가입</Button>
        )}
        <Button onClick={login ? onClickLogout : onClickLogin}>
          {login ? "로그아웃" : "로그인"}
        </Button>
      </div>
    );
  }
};
export default Login;
