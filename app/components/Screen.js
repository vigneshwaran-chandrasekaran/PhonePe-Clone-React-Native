// import Constants from "expo-constants";
import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import Header from "../components/common/Header";

function Screen({ children, style }) {
  return (
    <SafeAreaView style={[styles.safeScreen]}>
      <Header />
      <View style={[styles.screen, style]}>
        <View style={[styles.view, style]}>
          <View>{children}</View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeScreen: {
    // paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
  screen: {
    // paddingTop: Constants.statusBarHeight,
    flex: 1,
    margin: 10,
  },
  view: {
    flex: 1,
  },
});

export default Screen;
