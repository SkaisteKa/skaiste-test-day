import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import React from "react";

const NextButton = ({
  title,
  onPress,
  disabled,
}: {
  title: string;
  onPress?: () => void;
  disabled?: boolean;
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, disabled && styles.disabled]}
      disabled={disabled}
    >
      <Text style={styles.label}>{title}</Text>
    </TouchableOpacity>
  );
};

export default NextButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F63501",
    marginHorizontal: 16,
    borderColor: "#F7EFE1",
    borderWidth: 1,
    borderRadius: 8,
  },
  label: {
    fontSize: 16,
    fontFamily: "Inter_600SemiBold",
    padding: 16,
    alignSelf: "center",
    color: "#FFFBF3",
  },
  disabled: {
    opacity: 0.5,
  },
});
