import cn from "classnames";
import React from "react";
import styles from "./Paragraph.module.css";
import { ParagraphProps } from "./Paragraph.props";

export const Paragraph = ({
  size = "m",
  children,
  className,
  ...props
}: ParagraphProps): JSX.Element => {
  return (
    <p
      className={cn(styles.paragraph, className, {
        [styles.s]: size == "s",
        [styles.m]: size == "m",
        [styles.l]: size == "l",
      })}
      {...props}
    >
      {children}
    </p>
  );
};
