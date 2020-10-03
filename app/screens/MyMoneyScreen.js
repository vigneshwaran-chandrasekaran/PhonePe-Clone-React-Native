import React from "react";
import { StyleSheet } from "react-native";
import banner1 from "../assets/banners/banner1.jpg";
import banner2 from "../assets/banners/banner2.jpg";
import banner3 from "../assets/banners/banner3.jpg";
import banner4 from "../assets/banners/banner4.jpg";
import banner5 from "../assets/banners/banner5.png";
import ImageCarousel from "../components/common/ImageCarousel";
import Screen from "../components/Screen";
import { Insurance, Investments } from "../components/screens/myMoney";

const carouselItems = [
  {
    title: "Item 111",
    text: "Text 1",
    image: banner1,
  },
  {
    title: "Item 222",
    text: "Text 2",
    image: banner2,
  },
  {
    title: "Item 333",
    text: "Text 3",
    image: banner3,
  },
  {
    title: "Item 224",
    text: "Text 4",
    image: banner4,
  },
  {
    title: "Item 544",
    text: "Text 5",
    image: banner5,
  },
];

const MyMoneyScreen = () => {
  return (
    <Screen>
      <ImageCarousel carouselItems={carouselItems} />
      <Investments />
      <Insurance />
    </Screen>
  );
};

export default MyMoneyScreen;

const styles = StyleSheet.create({});
