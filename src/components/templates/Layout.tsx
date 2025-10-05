import React from "react";
//Components imports


interface ILayout {
  children: React.ReactNode;
}

export const Layout: React.FC<ILayout> = ({ children }) => {
  return (
    <div className="relative h-full">
      <div className="fixed top-0 left-0 right-0 z-50 px-4 md:px-20">
        {/* Header component */}
      </div>
      <main>{children}</main>
    </div>
  );
};