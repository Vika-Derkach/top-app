export const api = async <T>(path: string): Promise<T> => {
  const data = await import(`./${path}.json`);
  // console.log(data, "here");

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
