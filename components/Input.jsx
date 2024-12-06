import { TextInput, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";

import Feather from "@expo/vector-icons/Feather";

export default function Input({
  icon: Icon = null,
  iconName = "",
  secureTextEntry = false,
  placeholder = "",
  value = "",
  onChangeText = (text) => {},
}) {
  const [isFocused, setFocused] = useState(false);
  const [isSecured, setSecured] = useState(secureTextEntry);

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        borderColor: isFocused ? "#0474ED" : "#fff",
        borderRadius: 44,
        paddingHorizontal: 10,
        marginTop: 15,
        backgroundColor: "#F2F2F2",
      }}
    >
      {Icon && (
        <Icon
          name={iconName}
          size={24}
          color={isFocused ? "#0474ED" : "#838383"}
          style={{ marginRight: 10 }}
        />
      )}
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={isFocused ? "#0474ED" : "#838383"}
        secureTextEntry={!isSecured}
        style={{ flex: 1, height: 48 }}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        value={value}
        onChangeText={onChangeText}
      />
      {secureTextEntry && (
        <TouchableOpacity onPress={() => setSecured(!isSecured)}>
          <Feather
            name={isSecured ? "eye-off" : "eye"}
            size={24}
            color={isFocused ? "#0474ED" : "#838383"}
            style={{ paddingRight: 10 }}
          />
        </TouchableOpacity>
      )}
    </View>
  );
}
