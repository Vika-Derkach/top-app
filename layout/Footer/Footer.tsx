import React from "react";
import styles from "./Footer.module.css";
import { FooterProps } from "./Footer.props";

export const Footer = ({ ...props }: FooterProps): JSX.Element => {
  return (
    <div {...props}>
      <div className={styles.footer}>
        <div>OwlTop © 2020 - 2021 Все права защищены</div>
        <div>Пользовательское соглашение</div>
        <div>Политика конфиденциальности</div>
      </div>
    </div>
  );
};
