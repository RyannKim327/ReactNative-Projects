import { Text, View } from "react-native";
import Input from "./widgets/input";
import Button from "./widgets/button";
import { useState } from "react";

export default function Index() {
  const [l, setL] = useState(false);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <Input label="First name" hint="Enter your first name" />
      <Input label="Middle name" />
      <Input label="Last name" />
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          alignItems: "center",
        }}
      >
        <Button
          onClick={() => {
            setL(true);
          }}
          loading={l}
        >
          Click me to subscribe
        </Button>
        <Button onClick={() => { }}>Cancel</Button>
      </View>
      <Button onClick={() => { }}>Test</Button>
    </View>
  );
}
