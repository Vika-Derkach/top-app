export interface Id {
  secondCategory: string;
}

export interface PageItem {
  alias: string;
  title: string;
  _id: string;
  category: string;
}

export interface MenuItem {
  _id: Id;
  pages: PageItem[];
}

export interface Domain {
  id: string;
  city: string;
  inCity: string;
}

export interface PageProps {
  menu: MenuItem[];
  firstCategory: number;
  domains: Domain[];
}

export interface RootObject {
  pageProps: PageProps;
  __N_SSG: boolean;
}
