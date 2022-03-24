import React, { useEffect, useReducer } from "react";
import {
  AdvantagesData,
  HhData,
  Htag,
  Product,
  Sort,
  Tag,
} from "../../components";
import { SortEnum } from "../../components/Sort/Sort.props";
import { useScrollY } from "../../hooks/useScrollY";
import { TopLevelCategory } from "../../interfaces/page.interface";
import { sortReducer } from "./sort.reducer";
import styles from "./TopPageComponent.module.css";
import { TopPageComponentProps } from "./TopPageComponent.props";

export const TopPageComponent = ({
  page,
  products,
  firstCategory,
}: TopPageComponentProps): JSX.Element => {
  const [{ products: sortedProducts, sort }, dispatchSort] = useReducer(
    sortReducer,
    {
      products,
      sort: SortEnum.Rating,
    }
  );

  const y = useScrollY();

  const setSort = (sort: SortEnum) => {
    dispatchSort({ type: sort });
  };

  useEffect(() => {
    dispatchSort({ type: "reset", initialState: products });
  }, [products]);

  return (
    <div className={styles.wrapper}>
      {y}
      <div className={styles.title}>
        <Htag tag="h1">{page.title} </Htag>
        {products && (
          <Tag color="gray" size="m">
            {" "}
            {products.length}
          </Tag>
        )}
        <Sort sort={sort} setSort={setSort} />
      </div>
      <div>
        {sortedProducts &&
          sortedProducts.map((p) => (
            <Product layout key={p.title} product={p} />
          ))}
      </div>
      <div className={styles.hhTitle}>
        <Htag tag="h2">Ваканції {page.category} </Htag>

        <Tag color="red" size="m">
          hh.ua
        </Tag>
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
