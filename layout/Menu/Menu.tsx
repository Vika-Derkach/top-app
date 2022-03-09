import cn from "classnames";
import React, { useContext } from "react";
import { AppContext } from "../../context/app.context";
import styles from "./Menu.module.css";

export const Menu = (): JSX.Element => {
  const { menu, firstCategory, setMenu } = useContext(AppContext);

  return (
    <div className={cn(styles.paragraph)}>
      {menu.map((m) => (
        <li key={m._id.secondCategory}>{m._id.secondCategory}</li>
      ))}
    </div>
  );
};
