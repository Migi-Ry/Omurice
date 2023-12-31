const recipes = [
  {
    id: 1,
    userName: "Taylor Swift",
    avatar: require("../../../assets/images/Avatar1.png"),
    image: require("../../../assets/images/Recipe1.png"),
    name: "Pancake",
    category: "Dessert",
    time: " • > 60 min",
    recipes: '20',
    follow: '254',
    followers: '135,865'
  },
  {
    id: 2,
    userName: "Peeta Mellark",
    avatar: require("../../../assets/images/Avatar2.png"),
    image: require("../../../assets/images/Recipe2.png"),
    name: "Salad",
    category: "Food",
    time: " • > 60 min",
    recipes: '58',
    follow: '473',
    followers: '5,847'
  },
  {
    id: 3,
    userName: "Katniss Everdeen",
    avatar: require("../../../assets/images/Avatar3.png"),
    image: require("../../../assets/images/Recipe3.png"),
    name: "Pho",
    category: "Food",
    time: " • > 60 min",
    recipes: '24',
    follow: '128',
    followers: '345'
  },
  {
    id: 4,
    userName: "Frank Abagnale",
    avatar: require("../../../assets/images/Avatar4.png"),
    image: require("../../../assets/images/Recipe4.png"),
    name: "Salad",
    category: "Food",
    time: " • > 60 min",
    recipes: '82',
    follow: '599',
    followers: '6,967'
  },
  {
    id: 5,
    userName: "Adaline Bowman",
    avatar: require("../../../assets/images/Avatar5.png"),
    image: require("../../../assets/images/Recipe5.png"),
    name: "Tiramisu",
    category: "Dessert",
    time: " • > 60 min",
    recipes: '127',
    follow: '958',
    followers: '2,487'
  },
  {
    id: 6,
    userName: "Ellis Jones",
    avatar: require("../../../assets/images/Avatar6.png"),
    image: require("../../../assets/images/Recipe6.png"),
    name: "Crepes",
    category: "Dessert",
    time: " • > 60 min",
    recipes: '48',
    follow: '488',
    followers: '6,387'
  },
  {
    id: 7,
    userName: "Gilbert Blyte",
    avatar: require("../../../assets/images/Avatar7.png"),
    image: require("../../../assets/images/Recipe7.png"),
    name: "Curry",
    category: "Food",
    time: " • > 60 min",
    recipes: '12',
    follow: '298',
    followers: '3,487'
  },
  {
    id: 8,
    userName: "Alice Kepley",
    avatar: require("../../../assets/images/Avatar8.png"),
    image: require("../../../assets/images/Recipe8.png"),
    name: "Omurice",
    category: "Food",
    time: " • > 60 min",
    recipes: '77',
    follow: '475',
    followers: '1,387'
  },
];

export default recipes;

export const SEARCH_FOOD = ({ value }) => [recipes.map(item => ({
  ...item,
  id: Math.random().toString(),
}))];

export const SEARCH_DRINK = ({ value }) => [recipes.map(item => ({
  ...item,
  id: Math.random().toString(),
}))];

export const SEARCH_DESSERT = ({ value }) => [recipes.map(item => ({
  ...item,
  id: Math.random().toString(),
}))];

export const SEARCH_ALL = [...SEARCH_FOOD, ...SEARCH_DRINK, ...SEARCH_DESSERT];