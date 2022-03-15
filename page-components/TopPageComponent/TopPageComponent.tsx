import React from "react";
import { AdvantagesData, HhData, Htag, Tag } from "../../components";
import { TopLevelCategory } from "../../interfaces/page.interface";
import styles from "./TopPageComponent.module.css";
import { TopPageComponentProps } from "./TopPageComponent.props";

export const TopPageComponent = ({
  page,
  products,
  firstCategory,
}: TopPageComponentProps): JSX.Element => {
  console.log(page.advantages[0]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <Htag tag="h1">{page.title} </Htag>
        {products && (
          <Tag color="gray" size="m">
            {" "}
            {products.length}
          </Tag>
        )}
        <span>Sort</span>
      </div>
      <div>
        {products && products.map((m) => <li key={m.title}>{m.title}</li>)}
      </div>
      <div className={styles.hhTitle}>
        <Htag tag="h2"> Ваканції {page.category} </Htag>
        {products && (
          <Tag color="red" size="m">
            {" "}
            hh.ua
          </Tag>
        )}
      </div>
      {firstCategory == TopLevelCategory.Courses && <HhData {...page.hh} />}
      {firstCategory == TopLevelCategory.Courses &&
        page.advantages.map((a) => <AdvantagesData key={a._id} {...a} />)}
    </div>
  );
};
