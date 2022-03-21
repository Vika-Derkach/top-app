import cn from "classnames";
import { format } from "date-fns";
import { ru } from "date-fns/locale";
import React from "react";
import { Rating } from "../Rating/Rating";
import styles from "./Review.module.css";
import { ReviewProps } from "./Review.props";
import UserIcon from "./user.svg";

export const Review = ({
  review,
  children,
  className,
  ...props
}: ReviewProps): JSX.Element => {
  const { name, title, description, createdAt, rating } = review;
  return (
    <div
      className={cn(styles.review, className, {
        [styles.blue]: review,
      })}
      {...props}
    >
      <UserIcon className={styles.user} />
      <div className={styles.title}>
        <span className={styles.name}>{name}:</span>&nbsp;
        <span>{title}</span>
      </div>
      <div className={styles.date}>
        {format(new Date(createdAt), "dd MMMM yyyy", { locale: ru })}
      </div>
      <div className={styles.rating}>
        <Rating rating={rating} />
      </div>
      <div className={styles.description}>{description}</div>
    </div>
  );
};