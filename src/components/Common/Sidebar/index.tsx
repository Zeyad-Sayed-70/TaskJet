import React from "react";
import UserProfile from "./UserProfile";
import Navigations from "./Navigations";
import CopyRights from "./CopyRights";

const SideBar = () => {
  return (
    <div className="md:h-[100vh] p-6 flex  md:flex-col items-center flex-wrap gap-10">
      <UserProfile />
      <div className="h-fit p-4 bg-gray-50 mx-auto rounded-md">
        <Navigations />
      </div>
      <div className="hidden md:block mt-auto">
        <CopyRights />
      </div>
    </div>
  );
};

export default SideBar;
