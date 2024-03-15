import React from "react";
import { Outlet, useLocation } from "react-router";
import { Link } from "../atoms/Link";
import css from "./style.module.scss";

interface NavListItemProps {
  text: string;
  href: string;
}

const NavListItem: React.FC<NavListItemProps> = (props) => {
  const location = useLocation();
  const href = `/${props.href.replace(/^[\s\/]*/, "")}`;
  const className = href === location.pathname ? css.active : "";

  return (
    <li className={className}>
      <Link to={href}>{props.text}</Link>
    </li>
  );
};

export const RootLayout: React.FC = () => {
  return (
    <div className={css["root-layout"]}>
      <main className={css.main}>
        <Outlet />
      </main>
    </div>
  );
};
