import React from "react";
import styles from "./AdvantagesData.module.css";
import { AdvantagesDataProps } from "./AdvantagesData.props";
import TickTcon from "./tick.svg";

export const AdvantagesData = ({
  advantages,
}: AdvantagesDataProps): JSX.Element => {
  return (
    <>
      {advantages.map((a) => (
        <div key={a._id} className={styles.advantage}>
          <TickTcon />
          <div className={styles.title}>{a.title} </div>
          <hr className={styles.vline} /> <div>{a.description}</div>
        </div>
      ))}
    </>
    // <div className={styles.advantages}>
    //   <div className={styles.tick}>
    //     <TickTcon />
    //     <div></div>
    //   </div>
    //   <div className={styles.content}>
    //     <Htag tag="h3">{title}</Htag>
    //     <Paragraph size="l">{description}</Paragraph>
    //   </div>
    // </div>
  );
};
