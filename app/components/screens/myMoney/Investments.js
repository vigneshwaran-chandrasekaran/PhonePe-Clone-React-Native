import React from "react";
import { FlatList, StyleSheet, Text } from "react-native";
import colors from "../../../config/colors";
import LinkIcon from "../../LinkIcon";

const investments = [
  {
    id: 1,
    label: "Liquid Funds",
    value: "Liquid Funds",
    icon: "contao",
  },
  {
    id: 2,
    label: "Super Funds",
    value: "Super Funds",
    icon: "first-order",
  },
  {
    id: 3,
    label: "Tax Saving Funds",
    value: "Tax Saving Funds",
    icon: "user-circle",
  },
  { id: 4, label: "Gold", value: "Gold", icon: "university" },
];

const Investments = () => {
  return (
    <FlatList
      style={styles.linksContainer}
      data={investments}
      keyExtractor={(item) => item.id.toString()}
      numColumns={4}
      ListHeaderComponent={<Text style={styles.linkText}>Investments</Text>}
      renderItem={({ item }) => (
        <LinkIcon icon={item.icon} label={item.label} />
      )}
    />
  );
};

export default Investments;

const styles = StyleSheet.create({
  linksContainer: {
    borderRadius: 10,
    backgroundColor: colors.white,
    padding: 15,
    marginTop: 10,
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
