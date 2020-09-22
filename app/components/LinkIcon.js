import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../config/colors";

const LinkIcon = ({
  label,
  icon = "facebook",
  color = colors.primary,
  size = 36,
  style,
}) => {
  return (
    <View style={[styles.icon, style]}>
      <FontAwesome name={icon} color={color} size={size} />
      {label && <Text style={styles.iconText}>{label}</Text>}
    </View>
  );
};

export default LinkIcon;

const styles = StyleSheet.create({
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
