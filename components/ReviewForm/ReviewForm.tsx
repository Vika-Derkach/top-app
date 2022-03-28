import cn from "classnames";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { submit } from "../../api/api";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";
import { Rating } from "../Rating/Rating";
import { Textarea } from "../Textarea/Textarea";
import CloseIcon from "./close.svg";
import { IReviewForm } from "./ReviewForm.interface";
import styles from "./ReviewForm.module.css";
import { ReviewFormProps } from "./ReviewForm.props";

export const ReviewForm = ({
  productId,
  isOpened,
  className,
  ...props
}: ReviewFormProps): JSX.Element => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    reset,
    clearErrors,
  } = useForm<IReviewForm>();

  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [error, setError] = useState<any>();

  const onSubmit = async (formData: IReviewForm) => {
    try {
      const data = await submit({
        ...formData,
        productId,
      });

      if (data.message) {
        setIsSuccess(true);
        reset();
      } else {
        setError("something went wrong");
      }
    } catch (e) {
      setError(e);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={cn(styles.reviewForm, className)} {...props}>
        <Input
          {...register("name", {
            required: { value: true, message: "Заполните имя" },
          })}
          placeholder="Имя"
          error={errors.name}
          tabIndex={isOpened ? 0 : -1}
          aria-invalid={errors.name ? true : false}
        />
        <Input
          {...register("title", {
            required: { value: true, message: "Заполните заголовок" },
          })}
          className={styles.title}
          placeholder="Заголовок отзыва"
          error={errors.title}
          tabIndex={isOpened ? 0 : -1}
          aria-invalid={errors.title ? true : false}
        />
        <div className={styles.rating}>
          <span>Оценка:</span>
          <Controller
            control={control}
            name="rating"
            rules={{ required: { value: true, message: "Укажите рейтинг" } }}
            render={({ field }) => (
              <Rating
                rating={field.value}
                isEditable
                ref={field.ref}
                setRating={field.onChange}
                error={errors.rating}
                tabIndex={isOpened ? 0 : -1}
              />
            )}
          ></Controller>
        </div>
        <Textarea
          {...register("description", {
            required: { value: true, message: "Заполните описание" },
          })}
          className={styles.description}
          placeholder="Текст отзыва"
          error={errors.description}
          tabIndex={isOpened ? 0 : -1}
          aria-label="Текст отзыва"
          aria-invalid={errors.description ? true : false}
        />
        <div className={styles.submit}>
          <Button
            type="submit"
            appearance="primary"
            tabIndex={isOpened ? 0 : -1}
            onClick={() => clearErrors()}
          >
            Отправить
          </Button>
          <span className={styles.info}>
            * Перед публикацией отзыв пройдет предварительную модерацию и
            проверку
          </span>
        </div>
      </div>
      {isSuccess && (
        <div role="alert" className={cn(styles.success, styles.panel)}>
          <div className={styles.successTitle}>Ваш отзыв отправлен</div>
          <div>Спасибо, ваш отзыв будет опубликован после проверки.</div>
          <button
            aria-label="Закрить алерт"
            className={styles.close}
            onClick={() => setIsSuccess(false)}
          >
            <CloseIcon />
          </button>
        </div>
      )}
      {error && (
        <div role="alert" className={cn(styles.error, styles.panel)}>
          Что-то пошло не так, попробуйте обновить страницу
          <button
            aria-label="Закрить алерт"
            className={styles.close}
            onClick={() => setError(undefined)}
          >
            <CloseIcon />
          </button>
        </div>
      )}
    </form>
  );
};
