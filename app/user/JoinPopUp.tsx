"use client";
import { doMailCheck, doSignUp } from "./userUtil";
import React, { useState } from "react";
import { resMailCheck, resSignUp } from "./userUtil";
interface Props {
  getJoin: boolean;
  chModal: (value: number) => void;
  closeModal: () => void;
  msgModal: (msg: string) => void;
}

const JoinPopUp: React.FC<Props> = ({
  getJoin,
  chModal,
  closeModal,
  msgModal,
}) => {
  const [getUserName, setUserName] = useState("");
  const [getEmail, setEmail] = useState("");
  const [getCode, setCode] = useState("");
  const [getPw1, setPw1] = useState("");
  const [getPw2, setPw2] = useState("");
  const [getHidden, setHidden] = useState(false);
  const sign = async () => {
    let ret: resSignUp;
    if (getPw1 == getPw2) {
      ret = await doSignUp(getUserName, getEmail, getPw1, getCode);
      if (ret.isSuccess == true) {
        // msgModal(ret.result);
        // msgModal("");
        setUserName("");
        setEmail("");
        setPw1("");
        setPw2("");
        setCode("");
        setHidden(false);
        chModal(1);
        alert(ret.result);
        setTimeout(() => {
          closeModal();
        }, 2000);
      } else {
        alert("실패" + ret.result);
        // msgModal(ret.msg);
        // 10 초 정도 보여주고 msg 만 닫기
        // setTimeout(()=>{msgModal('');},20000);
      }
    } else {
      // msgModal('비밀번호가 같지 않습니다');
      alert("비밀 번호가 같지 않습니다");
      // setTimeout(()=>{msgModal('');},20000);
    }
  };
  const mailCheck = async () => {
    if (getEmail === null) {
      alert("메일을 입력 해주세요");
    }
    // test 용 코드 주석제거 필요
    let ret: resMailCheck = await doMailCheck(getEmail);
    // alert("메일을 확인 해주세요");
    // let ret = { code: 100, msg: "test" };
    if (ret.code === 200) {
      // 전송 성공 했습니다
      setHidden(true);
      alert(ret.message);
    } else if (ret.code === 400) {
      // 중복
      alert(ret.message);
    }
  };
  if (getJoin == false) {
    return null;
  } else {
    return (
      <div>
        {/* 모달 div */}
        <div className="bg-gray max-w-sm rounded-2xl bg-u-gray-400 p-8 ">
          <h5 className="flex justify-center text-xl font-bold">회원가입</h5>
          <br></br>
          <p className="flex items-center">
            <span className="flex-grow text-gray-200">닉네임</span>
            <span className="text-right text-gray-200 ">
              {/* 좌우 로 가르는데 나중에 비번 같은지 표시하는것도 이걸로 만들어보자*/}
              {/* 야 이게 css 에 hidden을 사용하며 숨겨지네 ㄷㄷ 지리고요 */}
              <button
                className="hidden text-xs text-gray-200 underline"
                onClick={(e) => {}}
              >
                중복 확인
              </button>
            </span>
          </p>
          <input
            className="rounded-full border bg-u-gray-500 p-2"
            type="text"
            placeholder="사용할 닉네임"
            name="UserName"
            value={getUserName}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
          <br />
          <br />
          <p className="flex items-center">
            <span className="flex-grow text-gray-200">이메일</span>
            <span className="text-right text-gray-200 ">
              <button
                className=" text-xs   text-gray-200 underline "
                onClick={(e) => {
                  mailCheck();
                }}
              >
                인증 코드 보내기
              </button>
            </span>
          </p>
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
          <br />
          {/* 인증코드 전송시 표시 */}
          {getHidden === true ? (
            <div>
              <p className="flex items-center">
                <span className="flex-grow text-gray-200">인증 코드</span>
              </p>
              <input
                className="rounded-full border bg-u-gray-500 p-2"
                type="password"
                placeholder="Auth Code"
                name="code"
                value={getCode}
                onChange={(e) => {
                  setCode(e.target.value);
                }}
              />
            </div>
          ) : (
            <div></div>
          )}
          <br />
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
              onClick={(e) => {
                sign();
              }}
            >
              회원가입
            </button>
          </div>
          <div className="flex justify-center space-x-2">
            <button
              className=" text-xs   text-gray-200 underline"
              onClick={(e) => {
                chModal(1);
              }}
            >
              로그인하기{" "}
            </button>
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
        </div>
        <div></div>
      </div>
    );
  }
};
export default JoinPopUp;
