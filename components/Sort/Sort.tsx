import cn from "classnames";
import React, { KeyboardEvent } from "react";
import styles from "./Sort.module.css";
import { SortEnum, SortProps } from "./Sort.props";
import SortIcon from "./sort.svg";

export const Sort = ({
  sort,
  setSort,
  className,
  ...props
}: SortProps): JSX.Element => {
  const setSortKey = (key: KeyboardEvent, sortEvent: SortEnum) => {
    if (key.code == "Space" || key.code == "Enter") {
      key.preventDefault();
      setSort(sortEvent);
    }
  };

  return (
    <div className={cn(styles.sort, className)} {...props}>
      <button
        onClick={() => setSort(SortEnum.Rating)}
        className={cn({
          [styles.active]: sort == SortEnum.Rating,
        })}
        // onKeyDown={(key: KeyboardEvent) => setSortKey(key, SortEnum.Rating)}
        // tabIndex={0}
      >
        <SortIcon className={styles.sortIcon} /> По рейтингу
      </button>
      <button
        onClick={() => setSort(SortEnum.Price)}
        className={cn({
          [styles.active]: sort == SortEnum.Price,
        })}
        // tabIndex={0}
        // onKeyDown={(key: KeyboardEvent) => setSortKey(key, SortEnum.Price)}
      >
        <SortIcon className={styles.sortIcon} /> По цене
      </button>
    </div>
  );
};
