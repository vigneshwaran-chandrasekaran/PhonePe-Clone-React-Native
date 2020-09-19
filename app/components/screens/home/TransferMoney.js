import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
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
    <View style={styles.linksContainer}>
      <Text style={styles.linkText}>Transfer Money 1</Text>
      <FlatList
        style={styles.link}
        data={transferMoney}
        keyExtractor={(item) => item.id.toString()}
        numColumns={4}
        renderItem={({ item }) => (
          <LinkIcon icon={item.icon} label={item.label} />
        )}
      />
    </View>
  );
};

export default TransferMoney;

const styles = StyleSheet.create({
  linksContainer: {
    borderRadius: 10,
    backgroundColor: colors.white,
    padding: 15,
    marginBottom: 10,
  },
  link: {
    flexGrow: 0,
  },
  linkText: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 20,
  },
});
