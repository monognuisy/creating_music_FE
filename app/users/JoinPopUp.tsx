"use client";
import { doCodeCheck, doMailCheck, doSignUp } from "./userUtil";
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
    } else {
      let ret: resMailCheck = await doMailCheck(getEmail);
      if (ret.code === 200) {
        // 전송 성공 했습니다
        setHidden(true);
        alert(ret.message);
      } else if (ret.code === 400) {
        // 중복
        alert(ret.message);
      }
    }
    // test 용 코드 주석제거 필요
  };
  const codeCheck = async () => {
    if (getCode === null) {
      alert("코드를 입력 해주세요");
    } else {
      let ret = await doCodeCheck(getEmail, getCode);
      if (ret.isSuccess == true) {
        alert("인증 성공");
        setHidden(false);
      } else {
        alert("인증 실패");
      }
    }
  };
  if (getJoin == false) {
    return null;
  } else {
    return (
      <div>
        {/* 모달 div */}
        <div className="bg-gray flex w-max max-w-sm flex-col gap-[20px] rounded-2xl bg-u-gray-400 p-8">
          <h5 className="w-full text-center text-xl font-bold">회원가입</h5>
          <div className="flex flex-col gap-[8px]">
            <label htmlFor="email" className="text-gray-200">
              닉네임
            </label>
            <input
              className="rounded-full border bg-u-gray-500 p-2 "
              type="text"
              placeholder="Nick name"
              name="UserName"
              value={getUserName}
              onChange={(e) => {
                setUserName(e.target.value);
              }}
            />
          </div>
          <div className="flex flex-col gap-[8px]">
            <div className="flex justify-between">
              <label htmlFor="password" className="text-gray-200">
                이메일
              </label>
              <label className="text-right text-gray-200 ">
                <button
                  className=" text-xs   text-gray-200 underline "
                  onClick={(e) => {
                    
                    mailCheck();
                  }}
                >
                  인증 코드 요청
                </button>
              </label>
            </div>
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
          </div>
          {getHidden === true ? (
            <div className="flex flex-col gap-[8px]">
              <div className="flex justify-between">
                <label htmlFor="password" className="text-gray-200">
                  인증코드
                </label>
                <label className="text-right text-gray-200 ">
                  <button
                    className=" text-xs   text-gray-200 underline "
                    onClick={(e) => {
                      codeCheck();
                    }}
                  >
                    인증 코드 확인
                  </button>
                </label>
              </div>
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
          ) : null}
          <div className="flex flex-col gap-[8px]">
            <label htmlFor="email" className="text-gray-200">
              비밀번호
            </label>
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
          </div>
          <div className="flex flex-col gap-[8px]">
            <label htmlFor="password" className="text-gray-200">
              비밀번호 확인
            </label>
            <input
              className=" rounded-full border bg-u-gray-500 p-2"
              type="password"
              placeholder="New Password"
              name="password2"
              value={getPw2}
              onChange={(e) => {
                setPw2(e.target.value);
              }}
            />
          </div>
          <div className="mt-3 flex items-center justify-center">
            <button
              // className="rounded-full bg-white text-black px-4 py-2 center"
              // className="mx-auto rounded-full bg-white text-black px-6 py-3"
              className="mx-4 rounded-full border bg-white px-16 py-2 font-bold text-black"
              onClick={(e) => {
                sign();
              }}
            >
              회원가입
            </button>
          </div>

          <div className="flex justify-center gap-[12px]">
            <button
              className=" text-xs   text-gray-200 underline"
              onClick={(e) => {
                chModal(4);
              }}
            >
              회원가입 선택{" "}
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
      </div>
    );
  }
};
export default JoinPopUp;
