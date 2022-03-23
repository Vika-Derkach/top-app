import { IReviewSentResponce } from "../components/ReviewForm/ReviewForm.interface";

export const api = async <T>(path: string): Promise<T> => {
  const data = await import(`./${path}.json`);

  return data.pageProps;
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       if (Math.random() > 0.99) {
  //         reject(new Error("Something bad happened"));
  //       } else {
  //         resolve(this.data);
  //       }
  //     }, 700);
  //   });
};
//{key: {}}
export const review = {};

export const submit = async (props: any): Promise<IReviewSentResponce> => {
  console.log(props);

  return new Promise<IReviewSentResponce>((resolve) => {
    setTimeout(() => {
      resolve({ message: "kyky" });
    }, 100);
  });
};
