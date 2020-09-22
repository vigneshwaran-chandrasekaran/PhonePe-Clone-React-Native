import React from "react";
import { FlatList, StyleSheet, Text } from "react-native";
import colors from "../../../config/colors";
import LinkIcon from "../../LinkIcon";

const rechargePayBills = [
  {
    id: 1,
    label: "Wallet Topup",
    value: "Wallet Topup",
    icon: "google-wallet",
  },
  {
    id: 2,
    label: "Coronoavirus Insurance",
    value: "Coronoavirus Insurance",
    icon: "birthday-cake",
  },
  { id: 3, label: "Buy Gold", value: "Buy Gold", icon: "headphones" },
  { id: 4, label: "Liquid Funds", value: "Liquid Funds", icon: "grav" },
  {
    id: 5,
    label: "Accident Insurance",
    value: "Accident Insurance",
    icon: "eercast",
  },
  {
    id: 6,
    label: "Food Delivery",
    value: "Food Delivery",
    icon: "balance-scale",
  },
  { id: 7, label: "Play Games", value: "Play Games", icon: "diamond" },
  {
    id: 8,
    label: "Book a cylinder",
    value: "Book a cylinder",
    icon: "flag-checkered",
  },
];

const RechargePayBills = () => {
  return (
    <FlatList
      style={styles.linksContainer}
      data={rechargePayBills}
      keyExtractor={(item) => item.id.toString()}
      numColumns={4}
      ListHeaderComponent={
        <Text style={styles.linkText}>Recharge & Pay Bills</Text>
      }
      renderItem={({ item }) => (
        <LinkIcon icon={item.icon} label={item.label} />
      )}
    />
  );
};

export default RechargePayBills;

const styles = StyleSheet.create({
  linksContainer: {
    borderRadius: 10,
    backgroundColor: colors.white,
    padding: 15,
    marginBottom: 10,
    paddingBottom: 0,
    // flexGrow: 0,
  },
  linkText: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
});
