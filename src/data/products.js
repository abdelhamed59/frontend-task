import cam1 from "../assets/images/cam1.png";
import cam2 from "../assets/images/cam2.png";
import cam3 from "../assets/images/cam3.png";
import cam4 from "../assets/images/cam4.png";
import cam5 from "../assets/images/cam5.png";
import white from "../assets/images/product1/white.png";
import grey from "../assets/images/product1/grey.png";
import black from "../assets/images/product1/black.png";

// import cam3 from "../assets/images/cam3.png";
// import cam4 from "../assets/images/cam4.png";
// import cam5 from "../assets/images/cam5.png";


export const products = [
  {
    id: "cam-v4",
    step: 1,
    category: "cameras",
    name: "Wyze Cam v4",
    description: "The clearest Wyze Cam ever made.",
    price: 27.98,
    oldPrice: 35.98,
    discount: 22,
    image: cam1,
    variants: [
  { id: "white", name: "White", image: white },
  { id: "grey", name: "Grey", image: grey },
  { id: "black", name: "Black", image: black }
]
  },
  {
  id: "cam-pan",
  step: 1,
  category: "cameras",
  name: "Wyze Cam Pan v3",
  description: "360° security coverage.",
  price: 33.99,
  oldPrice: 42.99,
  discount: 20,
  image: cam2,

  variants: [
    { id: "white", name: "White", image: white },
    { id: "black", name: "Black", image: black }
  ]
},
{
  id: "cam-Floodlight",
  step: 1,
  category: "cameras",
  name: "Wyze Cam Floodlight v2",
  description: "2K floodlight camera with a 160° wide-angle view for your garage",
  price: 69.98,
  oldPrice: 89.98,
  discount: 22,
  image: cam3,
  variants: [
    { id: "white", name: "White", image: white },
    { id: "black", name: "Black", image: black }
  ]
},
{
  id: "Cam-Doorbell",
  step: 1,
  category: "cameras",
  name: "Wyze Duo Cam Doorbell",
  description: "Two cameras. Two views. Double the porch protection.",
  price: 69.98,
  // oldPrice: 89.98,
  // discount: 22,
  image: cam4,
  
},
{
  id: "cam-battery-pro",
name: "Wyze Battery Cam Pro",
  step: 1,
  category: "cameras",
  description: "2K floodlight camera with a 160° wide-angle view for your garage",
  price: 69.98,
  oldPrice: "$89.98",
  discount: 22,
  image: cam5,
  variants: [
    { id: "white", name: "White", image: white },
    { id: "black", name: "Black", image: black }
  ]
}
];