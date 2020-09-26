import React from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../../config/colors";
import Icon from "./Icon";
import ImageIcon from "./ImageIcon";

const Header = () => {
  return (
    <View style={styles.header}>
      <View style={styles.locationSection}>
        <ImageIcon />
        <View style={styles.locationText}>
          <Text style={styles.locationTitle}>Your location</Text>
          <View style={styles.locationChoose}>
            <Text style={styles.location}>Trichy 4</Text>
            <Icon name={"sort-desc"} style={styles.locationArrow} size={18} />
          </View>
        </View>
      </View>
      <View style={styles.iconsSection}>
        <Icon name={"qrcode"} style={styles.icon} size={30} />
        <Icon name={"bell"} style={styles.icon} size={30} />
        <Icon name={"question-circle-o"} style={styles.icon} size={30} />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    padding: 10,
    paddingBottom: 5,
    paddingTop: 5,
    backgroundColor: colors.primaryLight,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  locationSection: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },

  locationText: {
    paddingLeft: 15,
    alignItems: "flex-start",
    justifyContent: "center",
    paddingTop: 10,
  },
  locationTitle: {
    color: "#d3d3d3",
    fontSize: 12,
    marginBottom: -8,
  },
  locationChoose: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  location: {
    color: colors.white,
    fontSize: 16,
  },
  locationArrow: {
    marginBottom: 5,
  },

  iconsSection: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  icon: {
    paddingLeft: 15,
  },
});
