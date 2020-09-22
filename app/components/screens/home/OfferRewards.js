import React from "react";
import { FlatList, StyleSheet } from "react-native";
import colors from "../../../config/colors";
import ColorIcon from "../../ColorIcon";

const offerRewards = [
  {
    id: 1,
    label: "View All Offers",
    value: "View All Offers",
    icon: "percent",
    bgColor: "#EB4763",
  },
  {
    id: 2,
    label: "View My Rewards",
    value: "View My Rewards",
    icon: "gift",
    bgColor: "#F55125",
  },
  {
    id: 3,
    label: "Refer & Earn $100",
    value: "Refer & Earn $100",
    icon: "envelope-o",
    bgColor: "#A050B1",
  },
];

const OfferRewards = () => {
  return (
    <FlatList
      style={styles.linksContainer}
      data={offerRewards}
      keyExtractor={(item) => item.id.toString()}
      numColumns={3}
      renderItem={({ item }) => (
        <ColorIcon icon={item.icon} label={item.label} options={item} />
      )}
    />
  );
};

export default OfferRewards;

const styles = StyleSheet.create({
  linksContainer: {
    borderRadius: 10,
    backgroundColor: colors.white,
    padding: 15,
    marginBottom: 10,
    paddingBottom: 10,
    // flexGrow: 0,
  },
});
