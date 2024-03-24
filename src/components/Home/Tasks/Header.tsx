import React from "react";
import CreateTaskDialog from "./CreateDialog/CreateTaskDialog";

const Header = () => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-2xl text-gray-700 font-bold">My Tasks</h1>
        <CreateTaskDialog />
      </div>
      <hr className="bg-purple-200 h-[2px] rounded-full mt-3 mb-6" />
    </div>
  );
};

export default Header;
