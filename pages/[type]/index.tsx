import { GetStaticProps } from "next";
import React from "react";
import { api } from "../../api/api";
import { MenuItem } from "../../interfaces/menu.interface";
import { ProductModel } from "../../interfaces/product.interface";
import { withLayout } from "../../layout/Layout";

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const Courses = ({
  menu,
  firstCategory,
  products,
}: CoursesProps): JSX.Element => {
  console.log(getRandomInt(menu[getRandomInt(menu.length)].pages.length));

  return (
    <>
      <h2>Courses</h2>

      <p>now ponular: </p>
      {products && products.map((m) => <li key={m.title}>{m.title}</li>)}
    </>
  );
};

export default withLayout(Courses);

export const getStaticProps: GetStaticProps<CoursesProps> = async () => {
  const firstCategory = 0;
  const menu = await api<MenuItem[]>("menu");
  const randomManuLength = getRandomInt(menu.length);

  const products = await api<ProductModel[]>(
    `${
      menu[randomManuLength].pages[
        getRandomInt(menu[randomManuLength].pages.length)
      ].alias
    }-products`
  );

  return {
    props: { menu, firstCategory, products },
  };
};

interface CoursesProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
  products: ProductModel[];
}
