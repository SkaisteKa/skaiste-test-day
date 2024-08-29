import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import React from "react";

export enum ButtonType {
  SINGLE = "single",
  MULTIPLE = "multiple",
  INFO = "info",
}

const CustomButton = ({
  title,
  onPress,
  type,
  selected,
}: {
  title: string;
  onPress?: () => void;
  type: ButtonType;
  selected?: boolean;
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, selected && styles.selectedButton]}
    >
      <View style={styles.labelContainer}>
        <Text style={styles.label}>{title}</Text>
        {type === ButtonType.SINGLE && (
          <Image source={require("./assets/ChevronRight.png")} />
        )}
        {type === ButtonType.MULTIPLE && !selected && (
          <Image source={require("./assets/Checkbox.png")} />
        )}
        {type === ButtonType.MULTIPLE && selected && (
          <Image source={require("./assets/CheckboxSelected.png")} />
        )}
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    gap: 16,
    padding: 16,
    marginHorizontal: 16,
    borderColor: "#F7EFE1",
    borderWidth: 1,
    borderRadius: 8,
  },
  selectedButton: {
    backgroundColor: "#EBD7B3",
  },
  labelContainer: {
    flexDirection: "row",
  },
  label: {
    flex: 1,
    fontSize: 16,
    color: "#612E3A",
    fontFamily: "Inter_600SemiRegular",
  },
});
