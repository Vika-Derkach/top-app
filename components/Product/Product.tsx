import React from "react";
import { Button } from "../Button/Button";
import { Card } from "../Card/Card";
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
      <div className={styles.price}>{product.price}</div>
      <div className={styles.credit}>{product.credit}</div>
      <div className={styles.rating}>
        <Rating rating={product.reviewAvg ?? product.initialRating} />
      </div>
      <div className={styles.tags}>
        {product.categories.map((c) => (
          <Tag key={c} color="ghost">
            {c}
          </Tag>
        ))}
      </div>
      <div className={styles.priceTitle}>Price</div>
      <div className={styles.creditTitle}>Credit</div>
      <div className={styles.rateTitle}>{product.reviewCount} reviews </div>
      <div className={styles.hr}>
        <hr />
      </div>
      <div className={styles.description}>{product.description}</div>
      <div className={styles.feature}>features</div>
      <div className={styles.advBlock}>
        <div className={styles.advantages}>
          <div>Advantages</div>
          <div>{product.advantages}</div>
        </div>
        <div className={styles.disAdvantages}>
          <div>Disadvantages</div>
          <div>{product.disAdvantages}</div>
        </div>
      </div>
      <div className={styles.hr}>
        <hr />
      </div>

      <div className={styles.actions}>
        <Button appearance="primary">Read more</Button>
        <Button appearance="ghost" arrow="right">
          Read reviews
        </Button>
      </div>
    </Card>
  );
};
