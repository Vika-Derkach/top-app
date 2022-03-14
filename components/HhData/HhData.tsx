import React from "react";
import { Card } from "../Card/Card";
import styles from "./HhData.module.css";
import { hhDataProps } from "./HhData.props";
import RateTcon from "./rate.svg";

export const HhData = ({
  count,
  juniorSalary,
  middleSalary,
  seniorSalary,
}: hhDataProps): JSX.Element => {
  return (
    <div className={styles.hh}>
      <Card className={styles.count}>
        <div className={styles.title}>All vacancies</div>
        <div className={styles.countValue}>{count}</div>
      </Card>
      <Card className={styles.salary}>
        <div>
          <div className={styles.title}>Junior</div>
          <div className={styles.salaryValue}>{juniorSalary}</div>
          <div className={styles.rate}>
            <RateTcon className={styles.filled} />
            <RateTcon />
            <RateTcon />
          </div>
        </div>
        <div>
          <div className={styles.title}>Middle</div>
          <div className={styles.salaryValue}>{middleSalary}</div>
          <div className={styles.rate}>
            <RateTcon className={styles.filled} />
            <RateTcon className={styles.filled} />
            <RateTcon />
          </div>
        </div>
        <div>
          <div className={styles.title}>Senior</div>
          <div className={styles.salaryValue}>{seniorSalary}</div>
          <div className={styles.rate}>
            <RateTcon className={styles.filled} />
            <RateTcon className={styles.filled} />
            <RateTcon className={styles.filled} />
          </div>
        </div>
      </Card>
    </div>
  );
};
