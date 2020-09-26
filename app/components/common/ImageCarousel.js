import React, { useRef, useState } from "react";
import { Dimensions, Text, View } from "react-native";
import Carousel from "react-native-snap-carousel";

const width = Dimensions.get("window")?.width - 20;

const carouselItems = [
  {
    title: "Item 111",
    text: "Text 1",
  },
  {
    title: "Item 222",
    text: "Text 2",
  },
  {
    title: "Item 333",
    text: "Text 3",
  },
  {
    title: "Item 224",
    text: "Text 4",
  },
  {
    title: "Item 544",
    text: "Text 5",
  },
];

const _renderItem = ({ item, index }) => {
  return (
    <View
      style={{
        backgroundColor: "floralwhite",
        borderRadius: 5,
        margin: 10,
        height: 250,
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text style={{ fontSize: 30, color: "blue" }}>{item.title}</Text>
      <Text style={{ fontSize: 30, color: "green" }}>{item.text}</Text>
    </View>
  );
};

const ImageCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const inputEl = useRef(null);

  return (
    <View>
      <Carousel
        data={carouselItems}
        renderItem={_renderItem}
        itemWidth={width}
        sliderWidth={width}
        layout={"default"}
        ref={inputEl}
        onSnapToItem={(index) => setActiveIndex(index)}
      />
    </View>
  );
};

export default ImageCarousel;
