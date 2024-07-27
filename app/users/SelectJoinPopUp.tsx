"use client";
import GoogleAuthLogin2 from "./GoogleAuthLogin2";
import KakaoAuthLogin2 from "./KakaoAuthLogin2";
import { doLogin, resLogin } from "./userUtil";
import Image from "next/image";
import React, { useState } from "react";
// import logoimg from "@/tmp/kakaosvg.svg";
// const logoimg = "https://showpang.org/images/showpang_logo.png";
// const logoimg = "https://showpang.org/images/icons/kakao.svg";
interface Props {
  getSelectJoin: boolean;
  chModal: (value: number) => void;
  closeModal: () => void;
  msgModal: (msg: string) => void;
}

const SelectJoinPopUp: React.FC<Props> = ({ getSelectJoin, chModal }) => {
  if (getSelectJoin == false) {
    return null;
  } else {
    return (
      <>
        <div className="bg-gray max-w-sm rounded-2xl bg-u-gray-400 p-8 ">
          <h5 className="flex justify-center text-xl font-bold">
            회원가입 선택
          </h5>
          <br></br>
          {/* 소셜 ,로컬 회원가입과 하단 네브 바의 간격 */}
          <div className="flex flex-col gap-[20px]">
            {/* 소셜 , 로컬 회원가입간의 간격 */}
            <div className="flex flex-col gap-[12px]">
              <label>
                <button
                  type="button"
                  onClick={(e) => {
                    chModal(2);
                  }}
                  className="flex items-center justify-center rounded-full focus:outline-none"
                >
                  local
                  <Image
                    alt={`로고`}
                    src={`${process.env.NEXT_PUBLIC_IMAGE}/showpang_logo.png`}
                    width={240}
                    height={48}
                    className="h-[36px] w-[180px] flex-shrink-0 object-cover"
                  />
                </button>
              </label>
              <label>
                <GoogleAuthLogin2></GoogleAuthLogin2>
              </label>
              <label>
                <KakaoAuthLogin2></KakaoAuthLogin2>
              </label>
            </div>

            <div className="flex justify-center gap-[12px]">
              <button
                className=" text-xs text-gray-200 underline "
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
        </div>
      </>
    );
  }
};
export default SelectJoinPopUp;
