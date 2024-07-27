import React, { useState } from "react";
import Image from "next/image";
// import logoimg from "@/tmp/kakao.png";
// 로고 활성화 여기
// import logoimg from "@/tmp/kakaobt.png";
// const logoimg = "https://showpang.org/images/icons/kakao.svg";
const REST_API_KEY = "656cda00fe6f12998b76836a2f511ca5";
const REDIRECT_URI = "https://showpang.org/users/oauth/kakaologin";
const KakaoAuthLogin = () => {
  // popup { 열릴때 WindowProxy , 닫칠때 null } 반환
  const [getPopup, setPopup] = useState<WindowProxy | null>();
  const handleLogin = () => {
    // 구글 로그인 화면으로 이동시키기
    window.location.href = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&response_type=code&redirect_uri=${REDIRECT_URI}&scope=account_email,profile_image,profile_nickname`;
  };
  return (
    <>
      <div className="">
        <button
          type="button"
          onClick={handleLogin}
          className="flex items-center justify-center rounded-full focus:outline-none"
        >
          kakao
          <Image
            alt={`로고`}
            src={`${process.env.NEXT_PUBLIC_IMAGE}/showpang_logo.png`}
            // 로고 활성화 여기
            // src={logoimg}
            width={240}
            height={48}
            className="h-[36px] w-[180px] flex-shrink-0 object-cover"
          />
        </button>
      </div>
    </>
  );
};

export default KakaoAuthLogin;
