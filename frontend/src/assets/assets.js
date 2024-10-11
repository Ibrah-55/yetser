import basket_icon from './basket_icon.png'
import logo from './logo.png'
import header_img from './header_img.png'
import search_icon from './search_icon.png'
import menu_1 from './menu_1.png'
import menu_2 from './menu_2.png'
import menu_3 from './menu_3.png'
import menu_4 from './menu_4.png'
import menu_5 from './menu_5.png'
import menu_6 from './menu_6.png'

import food_1 from './food_1.png'
import food_2 from './food_2.png'
import food_3 from './food_3.png'
import food_4 from './food_4.png'
import food_5 from './food_5.png'
import food_6 from './food_6.png'
import food_7 from './food_7.png'
import food_8 from './food_8.png'
import food_9 from './food_9.png'
import food_10 from './food_10.png'
import food_11 from './food_11.png'
import food_12 from './food_12.png'
import food_13 from './food_13.png'
import food_14 from './food_14.png'
import food_15 from './food_15.png'
import food_16 from './food_16.png'
import food_17 from './food_17.png'
import food_18 from './food_18.png'
import food_19 from './food_19.png'


import add_icon_white from './add_icon_white.png'
import add_icon_green from './add_icon_green.png'
import remove_icon_red from './remove_icon_red.png'
import app_store from './app_store.png'
import play_store from './play_store.png'
import linkedin_icon from './linkedin_icon.png'
import facebook_icon from './facebook_icon.png'
import twitter_icon from './twitter_icon.png'
import cross_icon from './cross_icon.png'
import selector_icon from './selector_icon.png'
import rating_starts from './rating_starts.png'
import profile_icon from './profile_icon.png'
import bag_icon from './bag_icon.png'
import logout_icon from './logout_icon.png'
import parcel_icon from './parcel_icon.png'

export const assets = {
    logo,
    basket_icon,
    header_img,
    search_icon,
    rating_starts,
    add_icon_green,
    add_icon_white,
    remove_icon_red,
    app_store,
    play_store,
    linkedin_icon,
    facebook_icon,
    twitter_icon,
    cross_icon,
    selector_icon,
    profile_icon,
    logout_icon,
    bag_icon,
    parcel_icon
}

export const menu_list = [
    {
        menu_name: "Whole chicken",
        menu_image: menu_1
    },
    {
        menu_name: "Wings",
        menu_image: menu_2
    },
    {
        menu_name: "Thigh",
        menu_image: menu_3
    },
    {
        menu_name: "Drumstick",
        menu_image: menu_4
    },
    {
        menu_name: "Breast",
        menu_image: menu_5
    },
    {
        menu_name: "Gizzard",
        menu_image: menu_6
    }]

export const food_list = [
  // Whole Chicken
  {
    _id: "1",
    name: "Whole Chicken ",
    image: food_1,
    price: 20,
    description: "A whole chicken available on order",
    category: "Whole chicken",
  },
  {
    _id: "2",
    name: "Whole Chicken",
    image: food_2,
    price: 22,
    description: "A slow-roasted whole chicken, perfect for family meals.",
    category: "Whole chicken",
  },
  {
    _id: "3",
    name: "Whole Chicken",
    image: food_3,
    price: 25,
    description: "Smoked whole chicken with a deep, rich flavor.",
    category: "Whole chicken",
  },
  // Wings
  {
    _id: "4",
    name: "Spicy Chicken Wings",
    image: food_4,
    price: 12,
    description: "Crispy fried chicken wings with a spicy coating.",
    category: "Wings",
  },
  {
    _id: "5",
    name: "BBQ Chicken Wings",
    image: food_5,
    price: 14,
    description: "Succulent chicken wings glazed in tangy BBQ sauce.",
    category: "Wings",
  },
  {
    _id: "6",
    name: "Honey Garlic Chicken Wings",
    image: food_6,
    price: 15,
    description: "Wings coated in a sweet and savory honey garlic sauce.",
    category: "Wings",
  },
  // Thigh
  {
    _id: "7",
    name: "Grilled Chicken Thigh",
    image: food_7,
    price: 14,
    description: "Tender chicken thighs grilled to perfection.",
    category: "Thigh",
  },
  {
    _id: "8",
    name: "Marinated Chicken Thigh",
    image: food_8,
    price: 15,
    description: "Chicken thighs marinated in a blend of spices and herbs.",
    category: "Thigh",
  },
  {
    _id: "9",
    name: "Baked Chicken Thigh",
    image: food_9,
    price: 16,
    description:
      "Oven-baked chicken thighs with a crispy skin and tender inside.",
    category: "Thigh",
  },
  // Drumstick
  {
    _id: "10",
    name: "Fried Drumstick",
    image: food_10,
    price: 10,
    description: "Crispy fried chicken drumsticks, perfect for a quick snack.",
    category: "Drumstick",
  },
  {
    _id: "11",
    name: "Grilled Drumstick",
    image: food_11,
    price: 11,
    description: "Juicy chicken drumsticks grilled with a smoky flavor.",
    category: "Drumstick",
  },
  {
    _id: "12",
    name: "Spicy Drumstick",
    image: food_12,
    price: 12,
    description:
      "Chicken drumsticks with a hot and spicy rub, grilled to perfection.",
    category: "Drumstick",
  },
  // Breast
  {
    _id: "13",
    name: "Chicken Breast - Grilled",
    image: food_13,
    price: 18,
    description: "Lean chicken breast, grilled for a healthy meal option.",
    category: "Breast",
  },
  {
    _id: "14",
    name: "Stuffed Chicken Breast",
    image: food_14,
    price: 20,
    description: "Chicken breast stuffed with cheese and herbs, then baked.",
    category: "Breast",
  },
  {
    _id: "15",
    name: "Roasted Chicken Breast",
    image: food_15,
    price: 19,
    description:
      "Oven-roasted chicken breast with a crispy skin and juicy inside.",
    category: "Breast",
  },
  // Neck
  {
    _id: "16",
    name: "Fried Chicken Neck",
    image: food_16,
    price: 8,
    description: "Seasoned chicken neck, fried to a crispy finish.",
    category: "Neck",
  },
  {
    _id: "17",
    name: "Slow-Cooked Chicken Neck",
    image: food_17,
    price: 9,
    description: "Tender chicken necks, slow-cooked for a flavorful meal.",
    category: "Neck",
  },
  {
    _id: "18",
    name: "Grilled Chicken Neck",
    image: food_18,
    price: 10,
    description:
      "Grilled chicken neck with a smoky flavor, served with a tangy sauce.",
    category: "Neck",
  },
  // Extra Category if needed
  {
    _id: "19",
    name: "Baked Drumstick",
    image: food_19,
    price: 12,
    description: "Juicy baked drumsticks, seasoned with garlic and herbs.",
    category: "Drum stick",
  },
];
