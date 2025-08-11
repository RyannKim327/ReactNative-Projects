import { Text, View } from "react-native";
import Input from "./widgets/input";
import Button from "./widgets/button";
import { useState } from "react";
import Card from "./components/card";

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
      <Card>
        <Text>SIA HandsOn #1</Text>
        <Input label="Quiz Items" />
        <Input label="Quiz Score" />
        <Input label="Full name" />
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
            Submit
          </Button>
          <Button
            style={{
              backgroundColor: "red",
            }}
            clickable={l}
            onClick={() => {}}
          >
            Cancel
          </Button>
        </View>
      </Card>
    </View>
  );
}
