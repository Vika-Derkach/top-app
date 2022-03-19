import React from "react";
import { declOfNum, priceUa } from "../../helpers";
import { Button } from "../Button/Button";
import { Card } from "../Card/Card";
import { Devider } from "../Devider/Devider";
import { Rating } from "../Rating/Rating";
import { Tag } from "../Tag/Tag";
import styles from "./Product.module.css";
import { ProducthProps } from "./Product.props";

const NEXT_PUBLIC_DOMAIN = "https://courses-top.ru";

export const Product = ({
  product,

  className,
  ...props
}: ProducthProps): JSX.Element => {
  return (
    <Card className={styles.product}>
      <div className={styles.logo}>
        <img src={NEXT_PUBLIC_DOMAIN + product.image} alt={product.title} />
      </div>
      <div className={styles.title}>{product.title}</div>
      <div className={styles.price}>
        {priceUa(product.price)}
        {product.oldPrice && (
          <Tag className={styles.oldPrice} color="green">
            {priceUa(product.price - product.oldPrice)}{" "}
          </Tag>
        )}{" "}
      </div>
      <div className={styles.credit}>
        {priceUa(product.credit)} /<span className={styles.month}>мес</span>
      </div>
      <div className={styles.rating}>
        <Rating rating={product.reviewAvg ?? product.initialRating} />
      </div>
      <div className={styles.tags}>
        {product.categories.map((c) => (
          <Tag className={styles.category} key={c} color="ghost">
            {c}
          </Tag>
        ))}
      </div>
      <div className={styles.priceTitle}>Price</div>
      <div className={styles.creditTitle}>Credit</div>
      <div className={styles.rateTitle}>
        {product.reviewCount}{" "}
        {declOfNum(product.reviewCount, ["отзыв", "отзыва", "отзывов"])}
      </div>
      <Devider className={styles.hr} />
      <div className={styles.description}>{product.description}</div>
      <div className={styles.feature}>
        {product.characteristics.map((c) => (
          <div className={styles.characteristics} key={c.name}>
            <span className={styles.characteristicsName}>{c.name}</span>
            <span className={styles.characteristicsDots}></span>
            <span className={styles.characteristicsValue}>{c.value}</span>
          </div>
        ))}
      </div>
      <div className={styles.advBlock}>
        {product.advantages && (
          <div className={styles.advantages}>
            <div className={styles.advTitle}>Advantages</div>
            <div>{product.advantages}</div>
          </div>
        )}

        {product.disAdvantages && (
          <div className={styles.disadvantages}>
            <div className={styles.advTitle}>Disadvantages</div>
            <div>{product.disAdvantages}</div>
          </div>
        )}
      </div>
      <Devider className={styles.hr} />

      <div className={styles.actions}>
        <Button appearance="primary">Read more</Button>
        <Button
          appearance="ghost"
          arrow="right"
          className={styles.reviewButton}
        >
          Read reviews
        </Button>
      </div>
    </Card>
  );
};
