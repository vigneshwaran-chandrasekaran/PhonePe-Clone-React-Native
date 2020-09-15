import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const LinkIcon = ({ label }) => {
  return (
    <View style={styles.icon}>
      <FontAwesome name="facebook" backgroundColor="#3b5998" size={36} />
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
  },
  iconText: {
    maxWidth: 100,
    textAlign: "center",
  },
});
