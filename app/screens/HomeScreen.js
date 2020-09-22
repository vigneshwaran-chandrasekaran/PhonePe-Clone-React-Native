import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import Screen from "../components/Screen";
import {
  OfferRewards,
  QuickLinks,
  RechargePayBills,
  TransferMoney,
} from "../components/screens/home";

const HomeScreen = () => {
  return (
    <Screen style={styles.container}>
      <ScrollView>
        <TransferMoney />
        <QuickLinks />
        <OfferRewards />
        <RechargePayBills />
      </ScrollView>
    </Screen>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    // flexDirection: "row",
  },
});
