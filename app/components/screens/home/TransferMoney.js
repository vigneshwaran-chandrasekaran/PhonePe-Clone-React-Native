import React from "react";
import { FlatList, StyleSheet, Text } from "react-native";
import colors from "../../../config/colors";
import LinkIcon from "../../LinkIcon";

const transferMoney = [
  {
    id: 1,
    label: "To Contact",
    value: "To Contact",
    icon: "contao",
  },
  {
    id: 2,
    label: "To Account",
    value: "To Account",
    icon: "first-order",
  },
  { id: 3, label: "To Self", value: "To Self", icon: "user-circle" },
  { id: 4, label: "Bank Balance", value: "Bank Balance", icon: "university" },
];

const TransferMoney = () => {
  return (
    <FlatList
      style={styles.linksContainer}
      data={transferMoney}
      keyExtractor={(item) => item.id.toString()}
      numColumns={4}
      ListHeaderComponent={
        <Text style={styles.linkText}>Transfer Money 22</Text>
      }
      renderItem={({ item }) => (
        <LinkIcon icon={item.icon} label={item.label} />
      )}
    />
  );
};

export default TransferMoney;

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
