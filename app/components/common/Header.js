import React from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../../config/colors";
import LinkIcon from "../LinkIcon";

const Header = () => {
  return (
    <View style={styles.header}>
      <View style={styles.locationSection}>
        <Text style={styles.location}>Your location</Text>
        <Text style={styles.location}>Trichy 2</Text>
      </View>
      <View style={styles.iconsSection}>
        <LinkIcon icon={"gift"} color="white" size={24} />
        <LinkIcon icon={"gift"} color="white" size={24} />
        <LinkIcon icon={"gift"} color="white" size={24} />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    height: 50,
    padding: 10,
    backgroundColor: colors.primaryLight,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  locationSection: {
    // backgroundColor: "pink",
    // alignItems: "center",
    flex: 1,
  },
  location: {
    color: colors.white,
  },
  iconsSection: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "pink",
  },
});
