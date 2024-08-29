import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import React, { FC } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../App";
import useAnswersStore from "../store";

type AnswersScreenProps = NativeStackScreenProps<RootStackParamList, "Answers">;

const AnswersScreen: FC<AnswersScreenProps> = () => {
  const { answers } = useAnswersStore();
  console.log("answers", answers);
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.label}>Answers:</Text>
      {answers.map((item) => (
        <View key={item.key}>
          <Text>{`Key: ${item.key} Value: ${item.value}; `}</Text>
        </View>
      ))}
    </SafeAreaView>
  );
};

export default AnswersScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFBF3",
  },
  label: {
    fontSize: 24,
    color: "#410413",
    fontFamily: "Inter_600SemiBold",
    paddingTop: 44,
    paddingHorizontal: 16,
    paddingBottom: 26,
  },
});
