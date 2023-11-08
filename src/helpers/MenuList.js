import Pepperoni from "../assets/pepperoni.jpg";
import Margherita from "../assets/margherita.jpg";
import PedroTechSpecial from "../assets/pedrotechspecial.jpg";
import Vegan from "../assets/vegan.jpg";
import Pineapple from "../assets/pineapple.jpg";
import Expensive from "../assets/expensive.jpg";

export const MenuList = [
  {
    id: 1,
    name: "Pepperoni Pizza",
    image: Pepperoni,
    price: 15.99,
    overview: "Our classic Pepperoni Pizza is a timeless favorite. With a perfect balance of savory and spicy, it's a slice of heaven for pizza lovers everywhere.",
    ingredients: 'Pizza dough, Tomato sauce or pizza sauce, Mozzarella cheese, Pepperoni slices, Olive oil, Dried oregano, Red pepper flakes',
  },
  {
    id: 2,
    name: "Margherita Pizza",
    image: Margherita,
    price: 11.99,
    overview: "Simplicity at its best, our Margherita Pizza is a true Italian masterpiece. Fresh, vibrant, and full of flavor, it's the essence of traditional pizza.",
    ingredients: 'Tomato, Mozzarella, Basil',
  },
  {
    id: 3,
    name: "BBQ Chicken Pizza",
    image: PedroTechSpecial,
    price: 18.99,
    overview: "For those craving a unique and smoky experience, our BBQ Chicken Pizza is the perfect choice. Sweet and tangy, it's a taste sensation like no other.",
    ingredients: "BBQ Sauce, Grilled Chicken, Red Onions, Mozzarella Cheese"
  },
  {
    id: 4,
    name: "Vegan Pizza",
    image: Vegan,
    price: 17.99,
    overview : "Our Vegan Pizza offers a plant-based delight that's not only cruelty-free but also incredibly delicious. A guilt-free treat for your taste buds.",
    ingredients: "Tomato Sauce, Mozzarella Cheese, Bell Peppers,Mushrooms, Olives"
  },
  {
    id: 5,
    name: "Pineapple Pizza",
    image: Pineapple,
    price: 14.99,
    overview: "Our Pineapple Pizza is a tropical paradise on a plate. Sweet, tangy, and savory, it's a delightful combination that's bound to transport your taste buds.",
    ingredients: "Tomato Sauce, Mozzarella, Cheese, Ham, Pineapple"
  },
  {
    id: 6,
    name: "Supreme Pizza",
    image: Expensive,
    price: 19.99,
    overview: " When you want it all, our Supreme Pizza delivers. Packed with a variety of toppings, it's a flavor explosion that will satisfy every pizza craving.",
    ingredients: "Tomato Sauce, Pepperoni Slices, Sausage, Bell Peppers,Onions, Olives"
  },
];
