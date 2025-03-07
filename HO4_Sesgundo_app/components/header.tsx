import { Image, StyleSheet, Text, TextInput, View } from "react-native";

const Header = () => {
  return (
    <View style={style.header}>
      <View style={style.inner}>
        <Image
          source={require("@/assets/images/profile.jpg")}
          style={style.profile}
        />
        <View>
          <Text style={style.h1}>Hello</Text>
          <Text style={style.h2}>Player 222</Text>
        </View>
      </View>
      <View
        style={{
          padding: 8,
          boxShadow: "3px 3px 5px rgba(61, 61, 61, 0.5)",
          borderRadius: 5,
        }}
      >
        <Image
          style={[style.icon]}
          source={require("@/assets/images/loupe.png")}
        />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  header: {
    backgroundColor: "white",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 5,
    paddingHorizontal: 10,
    margin: 5,
    borderRadius: 2,
    justifyContent: "space-between",
    // boxShadow: "3px 3px 5px rgba(61, 61, 61, 0.3)",
  },
  inner: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  profile: {
    borderRadius: 50,
    width: 50,
    height: 50,
    aspectRatio: 1 / 1,
  },
  icon: {
    width: 25,
    height: 25,
  },
  h1: {
    fontSize: 25,
  },
  h2: {
    fontSize: 18,
  },
});

export default Header;
