import { useState } from "react";
import { Text, View } from "react-native";
import Card from "./components/card";
import Button from "./widgets/button";
import Input from "./widgets/input";

export default function Index() {
  const [l, setL] = useState(false);

  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [section, setSection] = useState("")
  const [status, setStatus] = useState("")
  const [message, setMessage] = useState("")
  const [retruieveUsers, setRetruieveUsers] = useState([])

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card>
        <Text style={{
          fontWeight: "bold",
          fontSize: 25,
          fontFamily: "serif"
        }}>SIA HandsOn #1</Text>
        <Input label="First name" disabled={l} />
        <Input label="Last name" disabled={l} />
        <Input label="Section" disabled={l} />
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
            Present
          </Button>
          <Button
            style={{
              backgroundColor: "red",
            }}
            clickable={l}
            onClick={() => {}}
          >
            Absent
          </Button>
        </View>
      </Card>
    </View>
  );
}
