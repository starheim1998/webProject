import reddress from "./img/red-dress.jpg";
import converse from "./img/converse.jpg";
import shoes from "./img/a-big-shoe.jpg";

export const initialItems = [
    {
        id: 1,
        name: "Levi's jeans",
        description: "undertittel",
        price: 1200,
        category: "bottomwear",
        subcategory: "jeans",
        color: "blue",
        size: "M",
        details: "slim fit",
        img: "https://i.imgur.com/PqfGMhn.png",
        counter: 3
    },
    {
        id: 2,
        name: "Nike ultimate running",
        description: "made for running",
        price: 1700,
        category: "shoes",
        subcategory: "running",
        color: "black",
        // TODO: SHOE SIZE ????
        size: "S",
        details: "200g",
        img: "https://i.imgur.com/PwoTdIy.jpg",
        counter: 5
    },
    {
        id: 3,
        name: "GAP sweater",
        description: "Comfy cotton top",
        price: 600,
        category: "topwear",
        subcategory: "sweater",
        color: "gray",
        size: "L",
        details: "normal fit",
        counter: 5,
        img: "https://down.imgspng.com/download/0720/sweater_PNG50.png"
    },
    {
        id: 102,
        img: converse,
        name: "Converse!",
        price: 1200,
        category: "",
        size: "",
        color:""
    },
    {
        id: 103,
        img: reddress,
        name: "Red dress!!!",
        price: 100000,
        category: "",
        size: "",
        color:""
    },
    {
        id: 104,
        img: shoes,
        name: "Shoes!!",
        price: 100000,
        category: "",
        size: "",
        color:""
    },
]
