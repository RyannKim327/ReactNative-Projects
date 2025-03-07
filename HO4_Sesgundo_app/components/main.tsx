import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import Transactions from "./transactions";

const Main = () => {
  return (
    <View style={[style.main]}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={[
          {
            display: "flex",
            flexDirection: "row",
            flex: 1,
            gap: 5,
            margin: 3,
          },
        ]}
        horizontal={true}
      >
        <View
          style={[
            style.card,
            {
              display: "flex",
              flexDirection: "column",
            },
          ]}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Text>Customer Balance</Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Text>248 75</Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Text style={{ fontFamily: "monospace" }}>**** **** **** 7474</Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Text>One Activated</Text>
            <Text>Any random text</Text>
          </View>
        </View>
      </ScrollView>
      {/* services */}
      <View style={style.services}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            marginVertical: 5,
          }}
        >
          Services
        </Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
          <View
            style={[
              style.iconCard,
              {
                backgroundColor: "#f55",
              },
            ]}
          >
            <Image
              style={[style.icon, {}]}
              source={require("@/assets/images/wallet.png")}
            />
            <Text>Wallet</Text>
          </View>
          <View
            style={[
              style.iconCard,
              {
                backgroundColor: "#5df",
              },
            ]}
          >
            <Image
              style={[style.icon, {}]}
              source={require("@/assets/images/cash-back.png")}
            />
            <Text>Transfer</Text>
          </View>
          <View
            style={[
              style.iconCard,
              {
                backgroundColor: "#fa5",
              },
            ]}
          >
            <Image
              style={[style.icon, {}]}
              source={require("@/assets/images/pay.png")}
            />
            <Text>Pay</Text>
          </View>
          <View
            style={[
              style.iconCard,
              {
                backgroundColor: "#3a3",
              },
            ]}
          >
            <Image
              style={[
                style.icon,
                {
                  transform: "rotate(180deg)",
                },
              ]}
              source={require("@/assets/images/topup.png")}
            />
            <Text>Topup</Text>
          </View>
        </View>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            marginVertical: 5,
          }}
        >
          Recent Transactions
        </Text>
        <Transactions />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  main: {
    display: "flex",
    flexDirection: "column",
    paddingHorizontal: 5,
    marginVertical: 10,
    width: "100%",
    boxSizing: "border-box",
  },
  icon: {
    width: 35,
    height: 35,
    filter: "invert(100%)",
  },
  iconCard: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 5,
    padding: 5,
    paddingVertical: "10",
    width: 75,
    height: 75,
  },
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(161, 161, 161, 0.2)",
    color: "black",
    borderRadius: 3,
    padding: 3,
    width: "100%",
    height: 150,
    boxSizing: "border-box",
    boxShadow: "3px 3px 5px rgba(33, 33, 33, 0.3)",
  },
  services: {
    backgroundColor: "white",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    marginVertical: 15,
    padding: 5,
  },
});

export default Main;
