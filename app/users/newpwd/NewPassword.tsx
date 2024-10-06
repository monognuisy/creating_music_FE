// `use client`;
import React, { useState, useEffect } from "react";
import { doResetPasswd } from "../userUtil";
import Image from "next/image";

const GoogleAuthLogin = () => {
    const [getPw1, setPw1] = useState("");
    const [getPw2, setPw2] = useState("");
    const passwdch= async ()=>{
        const parsedUrl = new URLSearchParams(window.location.search);
        const passwdchToken = parsedUrl.get("token") || "";
        const userEmail = parsedUrl.get("email") || "";
        console.log(passwdchToken);
        if(getPw1!==getPw2){
            alert("비밀 번호가 일치 하지 않습니다");
            return;
        }
        if(passwdchToken !== undefined || userEmail!==undefined){
            let res=await doResetPasswd(passwdchToken,userEmail,getPw1);
            if(res.isSuccess==true){
                window.location.href="/";
            }else{
                alert("비밀번호 변경 실패 "+res.message);
            }
        }else{
            alert("비밀번호 변경 토큰 없음");
        }
    }
    
  useEffect(() => {

  }, []);
  return (
    <>
      <form name="music-create">
  {/* <section className="mx-auto w-full max-w-[65.5rem] rounded-[1rem] bg-u-gray-400 p-[4rem]"> */}
     {/* 패딩 추가 */}
  <section className="mx-auto w-max  rounded-[1rem] bg-u-gray-400 p-[3rem]"> {/* 패딩 추가 */}
    <div className="flex flex-col items-center ">
          <Image
              alt={`로고`}
              src={`${process.env.NEXT_PUBLIC_IMAGE}/showpang_logo.png`}
              width={240}
              height={48}
              // className="h-[36px] w-[180px] flex-shrink-0 object-cover mb-4"
              className="h-[48px] w-[240px] flex-shrink-0 object-cover mb-6"
            />
      <div className="flex flex-col gap-[16px] items-center">
        <div className="flex flex-col gap-[8px]"> {/* 전체 폭 사용 */}
        <label htmlFor="password1" className="text-gray-200 font-bold pl-4">
            비밀번호 변경
          </label>
          <input
            className="w-full border-0 bg-u-gray-500 rounded-full pl-4 pr-15 py-1.5 focus:outline-none"
            type="password"
            placeholder="새로운 비밀번호"
            name="password1"
            value={getPw1}
            onChange={(e) => setPw1(e.target.value)}
            required
          />
        </div>
        <div className="flex flex-col gap-[8px] w-full"> {/* 전체 폭 사용 */}
          {/* <label htmlFor="password2" className="text-gray-200">
            비밀번호 확인
          </label> */}
          <input
            className="w-full border-0 bg-u-gray-500 rounded-full pl-4 pr-15 py-1.5 focus:outline-none"
            type="password"
            placeholder="비밀번호 확인"
            name="password2"
            value={getPw2}
            onChange={(e) => setPw2(e.target.value)}
            required
          />
        </div>
        <div className="flex flex-col gap-[8px]">
        <button
          type="button" // "submit"으로 변경하여 폼 제출을 처리할 수 있음
          className="mt-4 rounded-full border bg-white px-12 py-1 font-bold text-black hover:bg-gray-300 "
          onClick={passwdch}
        >
          비밀번호 변경
        </button>
        </div>
        
      </div>
      
        {/* 선택적으로 오류/성공 메시지를 표시할 수 있음 */}
      {/* <div className="mt-[2.5rem] flex justify-end gap-[1rem]">
      </div> */}
    </div>
  </section>
</form>

    </>
  );
};

export default GoogleAuthLogin;
