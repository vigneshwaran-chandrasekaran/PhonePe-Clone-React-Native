import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import LinkIcon from "../components/LinkIcon";
import Screen from "../components/Screen";
import colors from "../config/colors";

const quickLinks = [
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
    icon: "google-wallet",
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
    icon: "google-wallet",
  },
  { id: 7, label: "Play Games", value: "Play Games", icon: "google-wallet" },
  {
    id: 8,
    label: "Book a cylinder",
    value: "Book a cylinder",
    icon: "google-wallet",
  },
];

const HomeScreen = () => {
  return (
    <Screen>
      <View style={styles.quickLinksContainer}>
        <Text style={styles.quickLinksText}>Quick Links</Text>
        <FlatList
          style={styles.quickLinks}
          data={quickLinks}
          keyExtractor={(item) => item.id.toString()}
          numColumns={4}
          renderItem={({ item }) => (
            <LinkIcon icon={item.icon} label={item.label} />
          )}
        />
      </View>
    </Screen>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  quickLinksContainer: {
    borderRadius: 10,
    backgroundColor: colors.white,
    padding: 15,
  },
  quickLinks: {
    flexGrow: 0,
  },
  quickLinksText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
  },
});
