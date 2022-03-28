import cn from "classnames";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { ForwardedRef, forwardRef, useRef, useState } from "react";
import { declOfNum, priceUa } from "../../helpers";
import { Button } from "../Button/Button";
import { Card } from "../Card/Card";
import { Devider } from "../Devider/Devider";
import { Rating } from "../Rating/Rating";
import { Review } from "../Review/Review";
import { ReviewForm } from "../ReviewForm/ReviewForm";
import { Tag } from "../Tag/Tag";
import styles from "./Product.module.css";
import { ProducthProps } from "./Product.props";

const NEXT_PUBLIC_DOMAIN = "https://courses-top.ru";

export const Product = motion(
  forwardRef(
    (
      {
        product,

        className,
        ...props
      }: ProducthProps,
      ref: ForwardedRef<HTMLDivElement>
    ): JSX.Element => {
      const [isReviewOpened, setIsReviewOpened] = useState<boolean>(false);
      const reviewRef = useRef<HTMLDivElement>(null);

      const scrollToReview = () => {
        setIsReviewOpened(true);
        reviewRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
        reviewRef.current?.focus();
      };

      const reviewVariants = {
        visible: {
          opacity: 1,
          height: "auto",

          transition: {
            duration: 0.7,
          },
        },
        hidden: { opacity: 0, height: 0 },
      };

      return (
        <div className={className} {...props} ref={ref}>
          <Card className={styles.product}>
            <div className={styles.logo}>
              {!NEXT_PUBLIC_DOMAIN ? (
                <Image
                  src={NEXT_PUBLIC_DOMAIN + product.image}
                  alt={product.title}
                  width={70}
                  height={70}
                />
              ) : (
                <img
                  src={NEXT_PUBLIC_DOMAIN + product.image}
                  alt={product.title}
                />
              )}
            </div>
            <div className={styles.title}>{product.title}</div>
            <div className={styles.price}>
              <span>
                <span className="visuallyHidden">Цена</span>
                {priceUa(product.price)}
              </span>
              {product.oldPrice && (
                <Tag className={styles.oldPrice} color="green">
                  <span className="visuallyHidden">Скидка</span>
                  {priceUa(product.price - product.oldPrice)}
                </Tag>
              )}
            </div>
            <div className={styles.credit}>
              <span className="visuallyHidden">Кредит</span>
              {priceUa(product.credit)} /
              <span className={styles.month}>мес</span>
            </div>
            <div className={styles.rating}>
              <span className="visuallyHidden">
                {"Рейтинг " + (product.reviewAvg ?? product.initialRating)}
              </span>
              <Rating rating={product.reviewAvg ?? product.initialRating} />
            </div>
            <div className={styles.tags}>
              {product.categories.map((c) => (
                <Tag className={styles.category} key={c} color="ghost">
                  {c}
                </Tag>
              ))}
            </div>
            <div className={styles.priceTitle} aria-hidden={true}>
              Price
            </div>
            <div className={styles.creditTitle} aria-hidden={true}>
              Credit
            </div>
            <div className={styles.rateTitle}>
              <a href="#ref" onClick={scrollToReview}>
                {product.reviewCount}{" "}
                {declOfNum(product.reviewCount, ["отзыв", "отзыва", "отзывов"])}
              </a>
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
            <Devider className={cn(styles.hr, styles.hr2)} />

            <div className={styles.actions}>
              <Button appearance="primary">Read more</Button>
              <Button
                appearance="ghost"
                arrow={isReviewOpened ? "down" : "right"}
                className={styles.reviewButton}
                onClick={() => setIsReviewOpened(!isReviewOpened)}
                aria-expanded={isReviewOpened}
              >
                Read reviews
              </Button>
            </div>
          </Card>
          <motion.div
            layout
            variants={reviewVariants}
            initial="hidden"
            animate={isReviewOpened ? "visible" : "hidden"}
          >
            <Card
              color="blue"
              ref={reviewRef}
              tabIndex={isReviewOpened ? 0 : -1}
              className={styles.reviews}
            >
              {product.reviews.map((r) => (
                <div key={r._id}>
                  <Review review={r} />
                  <Devider />
                </div>
              ))}
              <ReviewForm productId={product._id} isOpened={isReviewOpened} />
            </Card>
          </motion.div>
        </div>
      );
    }
  )
);
