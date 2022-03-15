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
        <Htag tag="h2">Ваканції {page.category} </Htag>
        {products && (
          <Tag color="red" size="m">
            {" "}
            hh.ua
          </Tag>
        )}
      </div>
      {firstCategory == TopLevelCategory.Courses && page.hh && (
        <HhData {...page.hh} />
      )}

      {page.advantages && page.advantages.length > 0 && (
        <>
          <Htag tag="h2">Преимущества</Htag>

          <AdvantagesData advantages={page.advantages} />
        </>
      )}

      {page.seoText && (
        <div
          className={styles.seo}
          dangerouslySetInnerHTML={{ __html: page.seoText }}
        />
      )}

      <Htag tag="h2">Получаемые навыки</Htag>
      {page.tags.map((t, i) => (
        <Tag className={styles.tag} size="s" color="primary" key={i}>
          {t}{" "}
        </Tag>
      ))}
    </div>
  );
};
