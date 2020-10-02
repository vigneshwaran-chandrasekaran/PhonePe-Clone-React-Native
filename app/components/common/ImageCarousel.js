import React, { useRef, useState } from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import banner1 from "../../assets/banners/banner1.jpg";
import banner2 from "../../assets/banners/banner2.jpg";
import banner3 from "../../assets/banners/banner3.jpg";
import banner4 from "../../assets/banners/banner4.jpg";
import banner5 from "../../assets/banners/banner5.png";

const width = Dimensions.get("window")?.width - 20;

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

const _renderItem = ({ item }) => {
  return (
    <View>
      <Image style={styles.image} source={item.image} resizeMode={"cover"} />
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
        dotColor={"green"}
        inactiveDotColor={"red"}
      />
      <Pagination
        dotsLength={carouselItems.length} // also based on number of sildes you want
        activeDotIndex={activeIndex}
        carouselRef={inputEl}
        // containerStyle={{ backgroundColor: "white" }}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          backgroundColor: "black",
        }}
        inactiveDotStyle={{
          backgroundColor: "gray",
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
        tappableDots={true}
      />
      <Text>activeIndex: {activeIndex}</Text>
    </View>
  );
};

export default ImageCarousel;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 150,
  },
});
