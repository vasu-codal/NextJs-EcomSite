import React from "react";

interface FooterItemsProps {
  children: React.ReactNode;
  className?: string;
}
const FooterItems: React.FC<FooterItemsProps> = ({ children, className }) => {
  return (
    <div
      className={
        className ??
        `w-full sm:w-1/2 md:w-1/4 lg:w-1/6 mb-6 flex flex-col gap-2`
      }
    >
      {children}
    </div>
  );
};

export default FooterItems;
