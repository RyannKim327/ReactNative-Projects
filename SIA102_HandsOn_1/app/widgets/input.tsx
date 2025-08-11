import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

interface InputProps {
  label: string;
  password?: boolean;
  hint?: string;
  onChange?: (text: string) => void;
  multiline?: boolean;
  maxLines?: number;
  value?: string;
}

const styles = StyleSheet.create({
  base: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  label: {
    color: "black",
    marginLeft: 10,
    fontWeight: "bold",
    paddingBottom: 3,
  },
  input: {
    borderColor: "black",
    borderWidth: 2,
    borderStyle: "solid",
    borderRadius: 5,
    paddingHorizontal: 5,
  },
});

export default function Input(props: InputProps) {
  const [focus, setFocus] = useState(false);
  return (
    <View style={styles.base}>
      <Text
        style={[
          styles.label,
          {
            color: focus ? "#1976d2" : "black",
          },
        ]}
      >
        {props.label}
      </Text>
      <TextInput
        onFocus={() => {
          setFocus(true);
        }}
        onBlur={() => {
          setFocus(false);
        }}
        style={[
          styles.input,
          {
            borderColor: focus ? "#1976d2" : "black",
          },
        ]}
        value={props.value}
        placeholder={props.hint ?? ""}
        onChangeText={props.onChange}
        secureTextEntry={props.password ?? false}
        multiline={props.multiline ?? false}
        numberOfLines={props.maxLines ?? 5}
      />
    </View>
  );
}
