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

// Requiring fs module
// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require("fs");

// Storing the JSON format data in myObject
const data = fs.readFileSync("data.json");
const myObject = JSON.parse(data);

// Defining new data to be added
const newData = {
  country: "England",
};

// Adding the new data to our object
myObject.push(newData);

// Writing to our JSON file
const newData2 = JSON.stringify(myObject);
fs.writeFile("data2.json", newData2, (err) => {
  // Error checking
  if (err) throw err;
  console.log("New data added");
});
