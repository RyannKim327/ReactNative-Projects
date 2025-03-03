import { ScrollView, StyleSheet, Text, View } from "react-native"

const Main = () => {
    return (
        <View style={[style.main]}>
            <ScrollView
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={[{
                display: "flex",
                flexDirection: "row",
                flex: 1,
                gap: 5,
                margin: 3
            }]} 
            horizontal={true}>
                <View style={[style.card, {
                    display: "flex",
                    flexDirection: "column"
                }]}>
                    <View style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        width: "100%"
                    }}>
                        <Text>Customer Balance</Text>
                    </View>
                    <View style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        width: "100%"
                    }}>
                        <Text>248 75</Text>
                    </View>
                    <View style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        width: "100%"
                    }}>
                        <Text style={{fontFamily: "monospace"}}>**** **** **** 7474</Text>
                    </View>
                    <View style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        width: "100%"
                    }}>
                        <Text>One Activated</Text>
                        <Text>Any random<br />text</Text>
                    </View>
                </View>
            </ScrollView>
            {/* services */}
            <View style={style.services}>
                <Text style={{
                    fontSize: 19
                }}>Services</Text>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    main: {
        display: "flex",
        flexDirection: "column",
        paddingHorizontal: 5,
        marginVertical: 10,
        width: "100%",
        boxSizing: "border-box"
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
        boxShadow: "3px 3px 5px rgba(33, 33, 33, 0.3)"
    },
    services: {
        backgroundColor: "white",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        marginVertical: 15,
        padding: 5,
    }
})

export default Main