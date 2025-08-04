import { ReactNode } from "react";
import {
	ActivityIndicator,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";

interface ButtonProps {
	children: string | ReactNode;
	onClick: () => void;
	loading?: boolean;
}

const styles = StyleSheet.create({
	base: {
		display: "flex",
		flexDirection: "column",
		backgroundColor: "#1976d2",
		padding: 10,
		color: "white",
		borderRadius: 5,
		alignItems: "center",
		textAlign: "center",
		width: "100%",
	},
	label: {
		color: "white",
		fontWeight: "bold",
	},
});

export default function Button(props: ButtonProps) {
	return (
		<View
			style={{
				display: "flex",
				flexDirection: "row",
				paddingHorizontal: 10,
				paddingVertical: 5,
				flexShrink: 1,
			}}
		>
			<TouchableOpacity
				onPress={props.onClick}
				disabled={props.loading}
				style={styles.base}
			>
				{props.loading ? (
					<ActivityIndicator color="white" size="small" />
				) : (
					<Text style={styles.label}>{props.children}</Text>
				)}
			</TouchableOpacity>
		</View>
	);
}
