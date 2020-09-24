import React from "react";
import { Image, StyleSheet, View } from "react-native";
import woman from "../../assets/woman.jpeg";

const ImageIcon = () => {
  return (
    <View>
      <Image style={styles.img} source={woman} />
    </View>
  );
};

export default ImageIcon;

const styles = StyleSheet.create({
  img: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
});
