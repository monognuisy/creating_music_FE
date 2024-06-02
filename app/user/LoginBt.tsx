"use client";

import { useState } from "react";
import MainModalPopup from "./mainModal";
import { doLogOut } from "./userUtil";
import { Button } from "@mui/base";
interface Props {
  getLoginStatus: boolean;
  // eLoginStatus: (status: boolean) => void;
  chLogin: () => void;
  chLogout: () => void;
  deleteuserinfo: () => void;
}

const LoginBt: React.FC<Props> = ({
  getLoginStatus,
  chLogin,
  chLogout,
  deleteuserinfo,
}) => {
  const [getLoginBt, setLoginBt] = useState(false);

  const LoginOpen = () => {
    setLoginBt(true);
  };
  const LogOut = () => {
    // 사용자 정보 지우는 핸들러 추가
    // eLoginStatus(false);
    chLogout();
    deleteuserinfo();
    doLogOut();
  };

  const [getModal, setModla] = useState(false);
  const ModalOpen = () => {
    setModla(true);
  };
  if (getLoginStatus == true) {
    return (
      <>
        {/* 로그 아웃 */}
        {/* 유저 프로파일 컴포넌트 아직 미완성 */}
        {/* <UserProfile getLoginStatus={getLoginStatus}></UserProfile> */}
        <button
          className="mx-2 rounded-full border bg-white px-6 font-bold text-black"
          onClick={LogOut}
        >
          로그아웃
        </button>
      </>
    );
  } else {
    return (
      <>
        <Button
          slotProps={{
            root: {
              className:
                "mx-auto rounded-full border bg-white px-6 font-bold text-black",
            },
          }}
          onClick={ModalOpen}
        >
          로그인
        </Button>
        <MainModalPopup
          getModal={getModal}
          setModal={setModla}
          chLogin={chLogin}
          chLogout={chLogout}
        />
      </>
    );
  }
};
export default LoginBt;
