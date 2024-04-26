"use client";
import GoogleAuthLogin from "./tmpGoogleAuthLogin";
import GoogleAuthLogin1 from "./GoogleAuthLogin1";
import KakaoAuthLogin from "./KakaoAuthLogin";
import { doLogin, resLogin } from "./userUtil";
import React, { useState } from "react";

interface Props {
  getLogin: boolean;
  chModal: (value: number) => void;
  closeModal: () => void;
  msgModal: (INmsg: string) => void;
  chLogin: () => void;
  chLogout: () => void;
  // setLoginStatus: (status: boolean) => void;
}

const LoginPopUp: React.FC<Props> = ({
  getLogin,
  chModal,
  closeModal,
  msgModal,
  chLogin,
  chLogout,
  // setLoginStatus,
}) => {
  const [getEmail, setEmail] = useState("");
  const [getPw, setPw] = useState("");

  const login = async () => {
    let ret: resLogin = await doLogin(getEmail, getPw);
    if (ret.isSuccess == true) {
      // msgModal(ret.msg);
      // 2 초 정도 알림 보여주고 로그인 msg 닫기
      // setTimeout(()=>{closeModal();msgModal('');},2000);
      alert("로그인 성공");
      // 로그인 성공시 로그인버튼 -> 로그 아웃 버튼
      // setLoginStatus(true);
      console.log("1입니다");
      chLogin();
      console.log("2입니다");
      setTimeout(() => {
        closeModal();
      }, 2000);
    } else {
      // setEmail('');
      // setPw('');
      alert("로그인 실패");
      // 10 초 정도 보여주고 msg 만 닫기
      // msgModal('fail');
      // setTimeout(()=>{msgModal('');},10000);
    }
  };
  if (getLogin == false) {
    return null;
  } else {
    return (
      <div>
        {/* 모달 div */}
        <div className="bg-gray max-w-sm rounded-2xl bg-u-gray-400 p-8 ">
          <h5 className="flex justify-center text-xl font-bold">로그인</h5>
          <br></br>
          <p className="text-gray-200">이메일</p>
          <input
            className="rounded-full border bg-u-gray-500 p-2"
            type="email"
            placeholder="Email"
            name="email"
            value={getEmail}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <p className="text-gray-200">비밀번호</p>
          <input
            className="rounded-full border bg-u-gray-500 p-2"
            type="password"
            placeholder="Password"
            name="password"
            value={getPw}
            onChange={(e) => {
              setPw(e.target.value);
            }}
          />
          <br />
          <br />
          <div className="flex justify-center ">
            <button
              // className="rounded-full bg-white text-black px-4 py-2 center"
              // className="mx-auto rounded-full bg-white text-black px-6 py-3"
              className="mx-4 rounded-full border bg-white px-16 font-bold text-black"
              onClick={(e) => {
                login();
              }}
            >
              로그인
            </button>
          </div>
          <div className="space-y-3">
            <div className="flex justify-center space-x-2">
              <button
                className=" text-xs   text-gray-200 underline "
                onClick={(e) => {
                  chModal(2);
                }}
              >
                회원가입{" "}
              </button>
              {"\u00A0"}
              <button
                className=" text-xs text-gray-200 underline"
                onClick={(e) => {
                  chModal(3);
                }}
              >
                {" "}
                아이디/비밀번호 찾기
              </button>
            </div>

            <hr className=" mb-[0.25rem] h-0 w-full border-[2px] border-[#5A5A5A] " />
            <div className="flex">
              {/* <button
                className="mx-4 rounded-full border bg-white px-4 font-bold text-black"
                onClick={GoogleLogin}
              >
                google
              </button> */}
              <GoogleAuthLogin1></GoogleAuthLogin1>
              <KakaoAuthLogin></KakaoAuthLogin>
              <button className="mx-4 rounded-full border bg-white px-4 font-bold text-black">
                kakao
              </button>
              {/* <button onClick={chLogin}>test</button> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
};
export default LoginPopUp;
