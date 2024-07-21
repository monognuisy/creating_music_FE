import Image from "next/image";
export default function UserInfo() {
  const test =
    "https://static-00.iconduck.com/assets.00/profile-default-icon-512x511-v4sw4m29.png";
  return (
    <div>
      <div className="flex justify-center">
        <div className="flex justify-between">
          <div className="h-12 w-12 overflow-hidden rounded-full">
            <img
              src={test}
              alt="GOOGLE"
              className="h-full w-full object-cover"
            ></img>
          </div>
          <div className=" ">
            <h6>username</h6>
            <label>email</label>
          </div>
          <div className=" ">
            <button>tetst</button>
          </div>
        </div>
      </div>
    </div>
  );
}
