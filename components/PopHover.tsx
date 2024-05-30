import React from "react";

const PopHover = ({ title }: { title: string }) => {
  return (
    <span className="z-50 absolute top-5  hidden group-hover:block bg-slate-800  border-[1px] border-slate-300 text-white text-sm font-light rounded-md p-2 ">
      {title}
    </span>
  );
};

export default PopHover;
