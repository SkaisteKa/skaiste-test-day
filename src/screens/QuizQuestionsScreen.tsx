import { View, Text, StyleSheet } from "react-native";
import React, { FC } from "react";
import { MOCK_DATA } from "../../assets/mock-data";
import CustomButton, { ButtonType } from "../components/CustomButton";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../App";
import NextButton from "../components/NextButton";

const questions = MOCK_DATA.data.questions;

type QuizQuestionsScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "Quiz"
>;

const QuizQuestionsScreen: FC<QuizQuestionsScreenProps> = ({
  route,
  navigation,
}) => {
  console.log(questions[route.params.index]);
  const currentQuestion = questions[route.params.index];
  const label = currentQuestion.label;
  const nextPage = Number(route.params.index) + 1;

  const handleButtonPress = () => {
    if (currentQuestion.type === ButtonType.SINGLE)
      navigation.navigate("Quiz", { index: nextPage });
  };

  return (
    <View style={styles.container}>
      <Text
        style={styles.label}
        onPress={() => navigation.navigate("Quiz", { index: nextPage })}
      >
        {label}
      </Text>
      {currentQuestion.options?.map((options) => (
        <CustomButton
          title={options.label}
          type={currentQuestion.type}
          onPress={handleButtonPress}
        />
      ))}
      {currentQuestion.type === ButtonType.MULTIPLE && (
        <NextButton title="Next" />
      )}
    </View>
  );
};

export default QuizQuestionsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFBF3",
  },
  label: {
    fontSize: 24,
    color: "#612E3A",
    fontFamily: "Inter_600SemiBold",
    padding: 16,
  },
});
