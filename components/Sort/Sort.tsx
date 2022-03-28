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
      <div className={styles.sortName} id="sort">
        Сортировка
      </div>
      <button
        id="rating"
        onClick={() => setSort(SortEnum.Rating)}
        className={cn({
          [styles.active]: sort == SortEnum.Rating,
        })}
        aria-selected={sort == SortEnum.Rating}
        aria-labelledby="sort rating"
        // onKeyDown={(key: KeyboardEvent) => setSortKey(key, SortEnum.Rating)}
        // tabIndex={0}
      >
        <SortIcon className={styles.sortIcon} /> По рейтингу
      </button>
      <button
        id="price"
        onClick={() => setSort(SortEnum.Price)}
        className={cn({
          [styles.active]: sort == SortEnum.Price,
        })}
        aria-selected={sort == SortEnum.Rating}
        aria-labelledby="sort price"
        // tabIndex={0}
        // onKeyDown={(key: KeyboardEvent) => setSortKey(key, SortEnum.Price)}
      >
        <SortIcon className={styles.sortIcon} /> По цене
      </button>
    </div>
  );
};
