import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../../config/colors";

const Header = () => {
  return (
    <View style={styles.header}>
      <View style={styles.locationSection}>
        <Text style={styles.location}>Your location</Text>
        <Text style={styles.location}>Trichy 4</Text>
      </View>
      <View style={styles.iconsSection}>
        <FontAwesome
          style={styles.icon}
          name={"gift"}
          color="white"
          size={24}
        />
        <FontAwesome
          style={styles.icon}
          name={"gift"}
          color="white"
          size={24}
        />
        <FontAwesome
          style={styles.icon}
          name={"gift"}
          color="white"
          size={24}
        />
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
  },
  icon: {
    paddingLeft: 20,
  },
});
