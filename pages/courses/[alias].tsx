import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import { ParsedUrlQuery } from "querystring";
import { api } from "../../api/api";
import { MenuItem } from "../../interfaces/menu.interface";
import { TopPageModal } from "../../interfaces/page.interface";
import { ProductModel } from "../../interfaces/product.interface";
import { withLayout } from "../../layout/Layout";

const firstCategory = 0;

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
  const menu = await api<MenuItem[]>("menu");

  return {
    paths: menu.flatMap((m) => m.pages.map((p) => "/courses/" + p.alias)),
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

  const menu = await api<MenuItem[]>("menu");
  const page = await api<TopPageModal>(`${params.alias}`);
  const products = await api<ProductModel[]>(`${params.alias}-products`);
  console.log("ffffff1", page, "ddddd");
  console.log(params.alias, "рукруку");
  console.log("products11", products, "products");

  return {
    props: { menu, firstCategory, page, products },
  };
};

interface CourseProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
  page: TopPageModal;
  products: ProductModel[];
}
