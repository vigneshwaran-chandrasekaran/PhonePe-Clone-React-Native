import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../config/colors";

const LinkIcon = ({ label = "", icon = "facebook" }) => {
  return (
    <View style={styles.icon}>
      <FontAwesome name={icon} color={colors.primary} size={36} />
      <Text style={styles.iconText}>{label}</Text>
    </View>
  );
};

export default LinkIcon;

const styles = StyleSheet.create({
  icon: {
    alignItems: "center",
    flex: 1,
    width: "100%",
    margin: 10,
  },
  iconText: {
    maxWidth: 100,
    textAlign: "center",
    fontSize: 14,
  },
});
