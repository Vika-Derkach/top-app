import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import { ParsedUrlQuery } from "querystring";
import { api } from "../../api/api";
import { firstLevelMenu } from "../../helpers";
import { MenuItem } from "../../interfaces/menu.interface";
import {
  TopLevelCategory,
  TopPageModal,
} from "../../interfaces/page.interface";
import { ProductModel } from "../../interfaces/product.interface";
import { withLayout } from "../../layout/Layout";

function Course({ menu, page, products }: CourseProps): JSX.Element {
  return (
    <>
      {page && page.alias} hh
      {products && products.map((m) => <li key={m.title}>{m.title}</li>)}
      {products && products.length}
    </>
  );
}

export default withLayout(Course);

export const getStaticPaths: GetStaticPaths = async () => {
  let paths: string[] = [];
  for (const m of firstLevelMenu) {
    const menu = await api<MenuItem[]>("menu");

    paths = paths.concat(
      menu.flatMap((s) => s.pages.map((p) => `/${m.route}/${p.alias}`))
    );
  }
  console.log(paths);

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<CourseProps> = async ({
  params,
}: GetStaticPropsContext<ParsedUrlQuery>) => {
  if (!params) {
    return {
      notFound: true,
    };
  }

  const firstCategoryItem = firstLevelMenu.find((m) => m.route == params.type);
  if (!firstCategoryItem) {
    return {
      notFound: true,
    };
  }

  try {
    const menu = await api<MenuItem[]>("menu");
    const page = await api<TopPageModal>(`${params.alias}`);
    const products = await api<ProductModel[]>(`${params.alias}-products`);

    return {
      props: { menu, firstCategory: firstCategoryItem.id, page, products },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};

interface CourseProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: TopLevelCategory;
  page: TopPageModal;
  products: ProductModel[];
}
