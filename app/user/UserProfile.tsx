"use client";
import React from "react";
interface Props {
  getLoginStatus: boolean;
  getProfileIMG: string;
}

const UserProfile: React.FC<Props> = ({ getLoginStatus, getProfileIMG }) => {
  if (getLoginStatus == false) {
    return null;
  } else {
    return (
      <>
        <div className="h-12 w-12 overflow-hidden rounded-full">
          <a href="/userinfo">
            <img
              src={getProfileIMG}
              alt="tmp"
              className="h-full w-full object-cover"
            />
          </a>
        </div>
      </>
    );
  }
};
export default UserProfile;
