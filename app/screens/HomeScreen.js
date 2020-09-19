import React from "react";
import Screen from "../components/Screen";
import {
  OfferRewards,
  QuickLinks,
  TransferMoney,
} from "../components/screens/home";

const HomeScreen = () => {
  return (
    <Screen>
      <TransferMoney />
      <QuickLinks />
      <OfferRewards />
    </Screen>
  );
};

export default HomeScreen;
