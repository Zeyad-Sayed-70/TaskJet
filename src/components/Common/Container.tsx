import React from "react";

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mx-auto px-4 md:px-16 lg:px-24 max-w-[1200px]">
      {children}
    </div>
  );
};

export default Container;
