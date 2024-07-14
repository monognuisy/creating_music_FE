"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import LoginBt from "@/app/user/LoginBt";
import UserProfile from "@/app/user/UserProfile";
import { useLogin } from "@/app/LoginContext";
import { Button } from "@mui/base";
import { doLogOut } from "@/app/user/userUtil";
const Login = () => {
  var vanni = true;
  const [login, setLogin] = useState<boolean>(false);
  const onClickSignUp = () => {};
  const onClickLogin = () => setLogin(!login);
  const onClickLogout = () => {
    doLogOut();
    setLogin(!login);
  };
  // 민석
  const { getLoginStatus, chLogin, chLogout } = useLogin();
  const [getProfileIMG, setProfileIMG] = useState("");
  const [getName, setName] = useState("");
  const deleteuserinfo = () => {
    setProfileIMG("");
    setName("");
  };
  const chuserinfo = (inImg: string, inName: string) => {
    setProfileIMG(inImg);
    setName(inName);
  };
  const setProfile = () => {
    var IMG = sessionStorage.getItem("profile");
    if (IMG == null) {
      IMG =
        "https://static-00.iconduck.com/assets.00/profile-default-icon-512x511-v4sw4m29.png";
    }
    setProfileIMG(IMG);
  };
  useEffect(() => {
    setProfile();
  }, [getLoginStatus]);
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
    // 이루트는 절대 가지 않는다 사용하지 않는 더미 코드
    return (
      <div className="flex h-full flex-shrink-0 items-center gap-[1rem]">
        {login ? (
          <Link href="/user/"></Link>
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
