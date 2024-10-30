import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full flex items-center justify-center bg-orange-100 overflow-hidden">
      {children}
    </div>
  );
};

export default AuthLayout;
