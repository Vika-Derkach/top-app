import React from "react";
import Logo from "../logo.svg";
import { Menu } from "../Menu/Menu";
import styles from "./Sidebar.module.css";
import { SidebarProps } from "./Sidebar.props";

export const Sidebar = ({ className, ...props }: SidebarProps): JSX.Element => {
  return (
    <div {...props} className={className}>
      <div className={styles.sidebar}>
        <Logo className={styles.logo} />
        <div>Search</div>
        <Menu />
      </div>
    </div>
  );
};
