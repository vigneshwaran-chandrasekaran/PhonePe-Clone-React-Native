import React from "react";
import { StyleSheet, Text } from "react-native";
import ImageCarousel from "../components/common/ImageCarousel";
import Screen from "../components/Screen";

const StoresScreen = () => {
  return (
    <Screen>
      <Text>StoresScreen</Text>
      <ImageCarousel />
    </Screen>
  );
};

export default StoresScreen;

const styles = StyleSheet.create({});
