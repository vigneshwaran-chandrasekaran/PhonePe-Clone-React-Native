import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import ColorIcon from "../components/ColorIcon";
import LinkIcon from "../components/LinkIcon";
import Screen from "../components/Screen";
import colors from "../config/colors";

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

const HomeScreen = () => {
  return (
    <Screen>
      <View style={styles.quickLinksContainer}>
        <Text style={styles.quickLinksText}>Transfer Money</Text>
        <FlatList
          style={styles.quickLinks}
          data={transferMoney}
          keyExtractor={(item) => item.id.toString()}
          numColumns={4}
          renderItem={({ item }) => (
            <LinkIcon icon={item.icon} label={item.label} />
          )}
        />
      </View>
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
      <View style={styles.quickLinksContainer}>
        <FlatList
          style={styles.quickLinks}
          data={offerRewards}
          keyExtractor={(item) => item.id.toString()}
          numColumns={3}
          renderItem={({ item }) => (
            <ColorIcon icon={item.icon} label={item.label} options={item} />
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
    marginBottom: 10,
  },
  quickLinks: {
    flexGrow: 0,
  },
  quickLinksText: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 20,
  },
});
