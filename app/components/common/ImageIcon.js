import React from "react";
import { Image, StyleSheet, View } from "react-native";

const ImageIcon = () => {
  return (
    <View>
      <Image
        style={styles.img}
        source={{
          uri: "https://reactnative.dev/img/tiny_logo.png",
        }}
      />
    </View>
  );
};

export default ImageIcon;

const styles = StyleSheet.create({
  img: {
    width: 50,
    height: 50,
  },
});
