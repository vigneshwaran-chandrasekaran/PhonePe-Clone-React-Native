import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../config/colors";

const ColorIcon = ({ label, icon = "facebook", options }) => {
  return (
    <View style={styles.icon}>
      <View style={[styles.iconWrap, { backgroundColor: options.bgColor }]}>
        <FontAwesome name={icon} color={colors.white} size={36} />
      </View>
      {label && <Text style={styles.iconText}>{label}</Text>}
    </View>
  );
};

export default ColorIcon;

const styles = StyleSheet.create({
  iconWrap: {
    backgroundColor: "pink",
    width: 70,
    height: 70,
    borderRadius: 70 / 2,
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    alignItems: "center",
    flex: 1,
    marginBottom: 20,
  },
  iconText: {
    maxWidth: 150,
    textAlign: "center",
    fontSize: 14,
  },
});
