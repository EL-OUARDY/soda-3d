import { SodaCanProps } from "@/components/SodaCan";

export const FLAVORS: {
  flavor: SodaCanProps["flavor"];
  color: string;
  name: string;
  price: number;
}[] = [
  { flavor: "blackCherry", color: "#710523", name: "Black Cherry", price: 38 },
  { flavor: "grape", color: "#572981", name: "Grape Goodness", price: 35 },
  { flavor: "lemonLime", color: "#164405", name: "Lemon Lime", price: 42 },
  {
    flavor: "strawberryLemonade",
    color: "#690B3D",
    name: "Strawberry Lemonade",
    price: 37,
  },
  {
    flavor: "watermelon",
    color: "#4B7002",
    name: "Watermelon Crush",
    price: 34,
  },
];
