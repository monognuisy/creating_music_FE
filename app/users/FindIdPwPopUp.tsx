"use client";
import test from "node:test";
import {} from "./userUtil";
import React, { useState } from "react";

interface Props {
  getFind: boolean;
  chModal: (value: number) => void;
  clocseModal: () => void;
}

const FindIdPwPopUp: React.FC<Props> = ({ getFind, chModal, clocseModal }) => {
  const [getUserName, setUserName] = useState("");
  const [getEmail, setEmail] = useState("");
  const [getPw1, setPw1] = useState("");
  const [getPw2, setPw2] = useState("");

  if (getFind == false) {
    return null;
  } else {
    return (
      <div>
        {/* 모달 div */}
        <div className="bg-gray max-w-sm rounded-2xl bg-u-gray-400 p-8 ">
          <h5 className="flex justify-center text-xl font-bold">ID/PW 찾기</h5>
          <br></br>
          <p className="flex items-center">
            <span className="flex-grow text-gray-200">사용할 닉네임</span>
            <span className="text-right text-gray-200 ">
              {/* 좌우 로 가르는데 나중에 비번 같은지 표시하는것도 이걸로 만들어보자*/}
              <button
                className=" text-xs   text-gray-200 underline "
                onClick={(e) => {}}
              >
                중복 확인
              </button>
            </span>
          </p>
          <input
            className="rounded-full border bg-u-gray-500 p-2"
            type="text"
            placeholder="닉네임"
            name="UserName"
            value={getEmail}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
          <br />
          <br />
          <p className="text-gray-200">이메일</p>
          <input
            className="rounded-full border bg-u-gray-500 p-2"
            type="email"
            placeholder="email"
            name="email"
            value={getEmail}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />

          <p className="text-gray-200">비밀번호</p>

          <p>
            <input
              className="rounded-full border bg-u-gray-500 p-2"
              type="password"
              placeholder="New Password"
              name="password1"
              value={getPw1}
              onChange={(e) => {
                setPw1(e.target.value);
              }}
            />
          </p>
          <p>
            <input
              className="rounded-full border bg-u-gray-500 p-2"
              type="password"
              placeholder="New Password"
              name="password2"
              value={getPw2}
              onChange={(e) => {
                setPw2(e.target.value);
              }}
            />
          </p>
          <br></br>
          <div className="flex justify-center ">
            <button
              // className="rounded-full bg-white text-black px-4 py-2 center"
              // className="mx-auto rounded-full bg-white text-black px-6 py-3"
              className="mx-4 rounded-full border bg-white px-16 font-bold text-black"
              onClick={(e) => {}}
            >
              회원가입
            </button>
          </div>
          {/* <p> */}
          <br></br>
          <div className="flex justify-center ">
            {/* <br/> */}
            {/* <br></br> */}
            <button
              className=" text-xs   text-gray-200 underline"
              onClick={(e) => {
                chModal(1);
              }}
            >
              로그인하기{" "}
            </button>
            {/* 여기 */}
            {"\u00A0"}
            {"\u00A0"}
            <button
              className=" text-xs text-gray-200 underline"
              onClick={(e) => {
                chModal(2);
              }}
            >
              {" "}
              회원가입
            </button>
          </div>
          {/* </p> */}
        </div>
        <div></div>
      </div>
    );
  }
};
export default FindIdPwPopUp;
