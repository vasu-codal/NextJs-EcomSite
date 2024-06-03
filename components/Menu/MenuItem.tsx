import Link from "next/link";
import React from "react";

interface MenuItemProps {
  children: React.ReactNode;
  href: string;
}
const MenuItem: React.FC<MenuItemProps> = ({ children, href }) => {
  return (
    <li>
      <Link href={href}>
        <div className="px-4 py-2 hover:bg-neutral-100 transition hover:cursor-pointer">
          {children}
        </div>
      </Link>
    </li>
  );
};

export default MenuItem;
