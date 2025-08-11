import { ReactNode } from "react";
import { StyleSheet, View } from "react-native";

interface CardProps {
  children: ReactNode;
}

const styles = StyleSheet.create({
  card: {
    display: "flex",
    flexDirection: "column",
    width: "90%",
    boxShadow: "3px 3px 8px #aaaaaa",
    margin: 5,
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },
});

export default function Card(props: CardProps) {
  return <View style={[styles.card]}>{props.children}</View>;
}
