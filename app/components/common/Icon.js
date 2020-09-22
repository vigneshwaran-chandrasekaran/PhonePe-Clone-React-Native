import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { StyleSheet } from "react-native";

const Icon = ({ name = "rocket", color = "white", size = 24, style }) => {
  return (
    <FontAwesome
      style={[styles.icon, style]}
      name={name}
      color={color}
      size={size}
    />
  );
};

export default Icon;

const styles = StyleSheet.create({
  icon: {
    padding: 10,
  },
});
