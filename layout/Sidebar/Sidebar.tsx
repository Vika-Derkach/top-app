import cn from "classnames";
import React from "react";
import styles from "./Sidebar.module.css";
import { SidebarProps } from "./Sidebar.props";

export const Sidebar = ({ ...props }: SidebarProps): JSX.Element => {
  return (
    <div className={cn(styles.paragraph)} {...props}>
      Sidebar
    </div>
  );
};
