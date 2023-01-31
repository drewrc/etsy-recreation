import { data } from "./etsy-object.js";

const source = document.getElementById("news-item-template").innerHTML;
const template = Handlebars.compile(source);

console.log(source);
console.log(data);

const context = {
  results: [
    { img:  "https://i.etsystatic.com/13021096/r/il/e50711/3573404394/il_170x135.3573404394_dgmg.jpg",
      title: data.results[.0].title,
      body: data.results[.0].description,
      price: data.results[.0].price,
    },
    { img:  "https://i.etsystatic.com/11952338/r/il/c3820d/3457388097/il_170x135.3457388097_jm7q.jpg",
      title: data.results[1].title,
      body: data.results[1].description, 
      price: data.results[1].price,
    },
    
    { img:  "https://i.etsystatic.com/24995608/r/il/47f43f/3230327634/il_170x135.3230327634_sozs.jpg",
      title: data.results[2].title,
      body: data.results[2].description,
      price: data.results[2].price,
    },

    { img:  "https://i.etsystatic.com/6734294/r/il/3ad8e2/1733603944/il_170x135.1733603944_hjus.jpg",
        title: data.results[3].title,
        body: data.results[3].description,
        price: data.results[3].price, 
      },
      { img:   
        "https://i.etsystatic.com/5631899/r/il/83df5e/2800271136/il_170x135.2800271136_ocsg.jpg",
        title: data.results[4].title,
        body: data.results[4].description,
        price: data.results[4].price,
      },
      { img:  "https://i.etsystatic.com/34155659/r/il/7b4f9f/4557183912/il_170x135.4557183912_h4dk.jpg",
        title: data.results[5].title,
        body: data.results[5].description,
        price: data.results[5].price,
      },
      { img:  "https://i.etsystatic.com/16678465/r/il/49bf10/4017520423/il_170x135.4017520423_17hw.jpg",
        title: data.results[6].title,
        body: data.results[6].description,
        price: data.results[6].price,
      },
      { img:  
        "https://i.etsystatic.com/21768055/r/il/01d257/4466615670/il_170x135.4466615670_2t6s.jpg",
        title: data.results[7].title,
        body: data.results[7].description,
        price: data.results[7].price,
      },
      { img:  "https://i.etsystatic.com/9322695/c/775/616/0/0/il/57923c/2957915679/il_170x135.2957915679_eq1w.jpg",
        title: data.results[8].title,
        body: data.results[8].description,
        price: data.results[8].price,
      },
      { img:  
        "https://i.etsystatic.com/20919521/r/il/580651/3272738594/il_170x135.3272738594_bfzi.jpg",
        title: data.results[9].title,
        body: data.results[9].description,
        price: data.results[9].price,
      }
  ],
};

//context has to be an object

console.log(context);
const html = template(context);
console.log(html);

document
  .querySelector(".parent-container")
  .insertAdjacentHTML("afterBegin", html);
