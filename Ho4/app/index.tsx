// import style from "@/styles/style";
import Header from "@/components/header";
import Main from "@/components/main";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const app = () => {
  return (
    <View style={style.main}>
      <Header />
      <Main />
    </View>
  );
}

const style = StyleSheet.create({
  main: {
    width: "100%",
    height: "100%"
  }
})

export default app;