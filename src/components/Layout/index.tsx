import React from "react";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="flex flex-col items-center mx-3 lg:mx-5 my-5">
      {children}
    </div>
  );
};

export default Layout;
