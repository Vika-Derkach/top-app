import cn from "classnames";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { api } from "../../api/api";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";
import { Rating } from "../Rating/Rating";
import { Textarea } from "../Textarea/Textarea";
import CloseIcon from "./close.svg";
import { IReviewForm, IReviewSentResponce } from "./ReviewForm.interface";
import styles from "./ReviewForm.module.css";
import { ReviewFormProps } from "./ReviewForm.props";

export const ReviewForm = ({
  productId,
  className,
  ...props
}: ReviewFormProps): JSX.Element => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IReviewForm>();

  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [error, setError] = useState<string>();

  const onSubmit = (formData: IReviewForm) => {
    try {
      const { data } = await api<IReviewSentResponce>({
        ...formData,
        productId,
      });

      if (data.message) {
        setIsSuccess(true);
        reset();
      } else {
        setError("something went wrong");
      }

      console.log(formData, productId);
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={cn(styles.reviewForm, className)} {...props}>
        <Input
          {...register("name", {
            required: { value: true, message: "Type the name" },
          })}
          placeholder="Имя"
          error={errors.name}
        />
        <Input
          {...register("title", {
            required: { value: true, message: "Type the title" },
          })}
          className={styles.title}
          placeholder="Заголовок отзыва"
          error={errors.title}
        />
        <div className={styles.rating}>
          <span>Оценка:</span>
          <Controller
            control={control}
            name="rating"
            rules={{ required: { value: true, message: "Put the rating" } }}
            render={({ field }) => (
              <Rating
                rating={field.value}
                isEditable
                ref={field.ref}
                setRating={field.onChange}
                error={errors.rating}
              />
            )}
          ></Controller>
        </div>
        <Textarea
          {...register("description", {
            required: { value: true, message: "Type the text" },
          })}
          className={styles.description}
          placeholder="Текст отзыва"
          error={errors.description}
        />
        <div className={styles.submit}>
          <Button type="submit" appearance="primary">
            Отправить
          </Button>
          <span className={styles.info}>
            * Перед публикацией отзыв пройдет предварительную модерацию и
            проверку
          </span>
        </div>
      </div>
      {isSuccess && (
        <div className={cn(styles.success, styles.panel)}>
          <div className={styles.successTitle}>Ваш отзыв отправлен</div>
          <div>Спасибо, ваш отзыв будет опубликован после проверки.</div>
          <CloseIcon
            className={styles.close}
            onClick={() => setIsSuccess(false)}
          />
        </div>
      )}
      {error && (
        <div className={cn(styles.error, styles.panel)}>
          Что-то пошло не так, попробуйте обновить страницу
          <CloseIcon
            className={styles.close}
            onClick={() => setError(undefined)}
          />
        </div>
      )}
    </form>
  );
};
