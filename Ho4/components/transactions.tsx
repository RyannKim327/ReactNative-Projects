import { Image, Text, View } from "react-native";

const Transactions = () => {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 15,
        marginTop: 25,
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: "15",
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Image
            style={{
              width: 50,
              height: 50,
            }}
            source={require("@/assets/images/dribble.png")}
          />
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              marginLeft: 10,
            }}
          >
            <Text>Dribble</Text>
            <Text>Payment Method</Text>
          </View>
        </View>
        <Text>P 100</Text>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: "15",
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Image
            style={{
              width: 50,
              height: 50,
            }}
            source={require("@/assets/images/googlewallet.png")}
          />
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              marginLeft: 10,
            }}
          >
            <Text>Google Wallet</Text>
            <Text>Payment via wallet can be done</Text>
          </View>
        </View>
        <Text>P 900</Text>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: "15",
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Image
            style={{
              width: 50,
              height: 50,
            }}
            source={require("@/assets/images/uplab.png")}
          />
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              marginLeft: 10,
            }}
          >
            <Text>Uplabs</Text>
            <Text>Payment Method</Text>
          </View>
        </View>
        <Text>P 100</Text>
      </View>
    </View>
  );
};

export default Transactions;
