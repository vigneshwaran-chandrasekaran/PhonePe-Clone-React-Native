import React, { useRef, useState } from "react";
import { Dimensions, Image, StyleSheet, View } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";

const width = Dimensions.get("window")?.width - 20;

const _renderItem = ({ item }) => {
  return (
    <View>
      <Image style={styles.image} source={item.image} resizeMode={"cover"} />
    </View>
  );
};

const ImageCarousel = ({ carouselItems }) => {
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
        containerStyle={{
          position: "absolute",
          bottom: -20,
          left: 0,
          right: 0,
        }}
        // dotStyle={{
        //   width: 10,
        //   height: 10,
        //   borderRadius: 5,
        //   backgroundColor: "black",
        // }}
        inactiveDotStyle={{
          backgroundColor: "gray",
        }}
        inactiveDotOpacity={1}
        inactiveDotScale={1}
        tappableDots={true}
      />
    </View>
  );
};

export default ImageCarousel;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 100,
  },
});
