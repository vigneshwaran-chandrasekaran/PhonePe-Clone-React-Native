import React from "react";
import { FlatList, StyleSheet, Text } from "react-native";
import colors from "../../../config/colors";
import LinkIcon from "../../LinkIcon";

const insurance = [
  {
    id: 1,
    label: "Coronavirus",
    value: "Coronavirus",
    icon: "contao",
  },
  {
    id: 2,
    label: "International Travel",
    value: "International Travel",
    icon: "first-order",
  },
  {
    id: 3,
    label: "Domestic Multi-Trip",
    value: "Domestic Multi-Trip",
    icon: "user-circle",
  },
  { id: 4, label: "Hospital Cash", value: "Hospital Cash", icon: "university" },
  { id: 5, label: "Accident", value: "Accident", icon: "university" },
  {
    id: 6,
    label: "Dengue and Malaria",
    value: "Dengue and Malaria",
    icon: "university",
  },
];

const Insurance = () => {
  return (
    <FlatList
      style={styles.linksContainer}
      data={insurance}
      keyExtractor={(item) => item.id.toString()}
      numColumns={4}
      ListHeaderComponent={<Text style={styles.linkText}>Insurance</Text>}
      renderItem={({ item }) => (
        <LinkIcon icon={item.icon} label={item.label} />
      )}
    />
  );
};

export default Insurance;

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
