import type { pizzaDataTypes } from "../../types";

export const pizzaData: pizzaDataTypes[] = [
    {
        name: "Focaccia",
        desc: "Bread with italian olive oil and rosemary",
        price: "6000 $",
        pic: "pizzas/focaccia.jpg",
        soldOut: true
    },
    {
        name: "Pizza Margherita",
        desc: "Tomato and mozarella",
        price: "1000 $",
        pic: "pizzas/margherita.jpg",
        soldOut: false 
    },
    {
        name: "Pizza Spinaci",
        desc: "Tomato, mozarella, spinach, and ricotta cheese",
        price: "1200 $",
        pic: "pizzas/spinaci.jpg",
        soldOut: true
    },
    {
        name: "Pizza Funghi",
        desc: "Tomato, mozarella, mushrooms, and onion",
        price: "1300 $",
        pic: "pizzas/funghi.jpg",
        soldOut: true
    },
    {
        name: "Pizza Salamino",
        desc: "Tomato, mozarella, and pepperoni",
        price: "1550 $",
        pic: "pizzas/salamino.jpg",
        soldOut: true
    },
    {
        name: "Pizza Prosciutto",
        desc: "Tomato, mozarella, ham, aragula, and cheese",
        price: "1800 $",
        pic: "pizzas/prosciutto.jpg",
        soldOut: false
    },
];