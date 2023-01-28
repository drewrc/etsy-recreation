import { data } from "./etsy-object.js";

const source = document.getElementById("news-item-template").innerHTML;
const template = Handlebars.compile(source);

console.log(source);
console.log(data);

const context = {
  results: [
    {
      title: data.results[.0].title,
      body: data.results[.0].title
    },
    {
      title: data.results[1].title,
      body: `Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
        "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain...`,
    },
    
    {
      title: data.results[2].title,
      body: `Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
    "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain...`,
    },

    {
        title: data.results[3].title,
        body: `Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
      "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain...`,
      },
      {
        title: data.results[4].title,
        body: `Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
      "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain...`,
      },
      {
        title: data.results[5].title,
        body: `Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
      "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain...`,
      },
      {
        title: data.results[6].title,
        body: `Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
      "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain...`,
      },
      {
        title: data.results[7].title,
        body: `Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
      "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain...`,
      },
      {
        title: data.results[8].title,
        body: `Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
      "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain...`,
      },
      {
        title: data.results[9].title,
        body: `Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
      "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain...`,
      },
  ],
};

//context has to be an object

console.log(context);
const html = template(context);
console.log(html);

document
  .querySelector(".parent-container")
  .insertAdjacentHTML("afterBegin", html);
