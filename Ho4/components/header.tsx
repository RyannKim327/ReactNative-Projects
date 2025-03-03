import { Image, StyleSheet, Text, TextInput, View } from "react-native"

const Header = () => {
    return (
        <View style={style.header}>
            <View style={style.inner}>
                <Image source={require("@/assets/images/profile.png")} style={style.profile}/>
                <View>
                    <Text style={style.h1}>Welcome</Text>
                    <Text style={style.h2}>RySes</Text>
                </View>
            </View>
            <Image style={[style.icon]} source={require("@/assets/images/loupe.png")} />
        </View>
    )
}

const style = StyleSheet.create({
    header: {
        backgroundColor: "white",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 5,
        paddingHorizontal: 5,
        margin: 5,
        borderRadius: 2,
        justifyContent: "space-between",
        boxShadow: "3px 3px 5px rgba(61, 61, 61, 0.3)"
    },
    inner: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 5
    },
    profile: {
        borderRadius: "50%",
        width: 50,
        height: 50,
        aspectRatio: 1/1,
    },
    icon: {
        width: 25,
        height: 25
    },
    h1: {
        fontSize: 25
    },
    h2: {
        fontSize: 20
    }
})

export default Header