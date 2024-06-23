"use client";
import React from "react";
interface Props {
  getLoginStatus: boolean;
  getProfileIMG: string;
}

const UserProfile: React.FC<Props> = ({ getLoginStatus, getProfileIMG }) => {
  var profile = sessionStorage.getItem("profile");
  if(profile==null){
    profile =
      "https://static-00.iconduck.com/assets.00/profile-default-icon-512x511-v4sw4m29.png";
  }
  if (getLoginStatus == false) {
    return null;
  } else {
    return (
      <>
        <div className="h-12 w-12 overflow-hidden rounded-full">
          <a href="/userinfo">
            <img
              src={profile}
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
