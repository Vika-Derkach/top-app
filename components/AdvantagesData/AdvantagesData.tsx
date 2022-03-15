import React from "react";
import { Htag } from "../Htag/Htag";
import { Paragraph } from "../Paragraph/Paragraph";
import styles from "./AdvantagesData.module.css";
import { AdvantagesDataProps } from "./AdvantagesData.props";
import TickTcon from "./tick.svg";

export const AdvantagesData = ({
  title,
  description,
}: AdvantagesDataProps): JSX.Element => {
  return (
    <div className={styles.advantages}>
      <div className={styles.tick}>
        <TickTcon />
        <div></div>
      </div>
      <div className={styles.content}>
        <Htag tag="h3">{title}</Htag>
        <Paragraph size="l">{description}</Paragraph>
      </div>
    </div>
  );
};
