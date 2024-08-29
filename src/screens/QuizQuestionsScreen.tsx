import { View, Text, StyleSheet } from "react-native";
import React, { FC } from "react";
import { MOCK_DATA } from "../../assets/mock-data";
import CustomButton, { ButtonType } from "../components/CustomButton";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../App";
import NextButton from "../components/NextButton";
import useAnswersStore from "../store";

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

  const { answers, addAnswer, removeAnswer } = useAnswersStore();

  console.log("answers", answers);

  const handleAnswerButtonPress = (value: string) => {
    const isSelected = answers
      .find((entry) => entry.key === currentQuestion.key)
      ?.value.includes(value);

    if (isSelected) {
      removeAnswer(currentQuestion.key, value);
    } else {
      addAnswer(currentQuestion.key, value);
    }
    if (currentQuestion.type === ButtonType.SINGLE)
      handleNavigationToNextScreen();
  };

  const handleNavigationToNextScreen = () => {
    console.log(nextPage, questions.length);
    if (nextPage < questions.length)
      return navigation.navigate("Quiz", { index: nextPage });
    navigation.navigate("Answers");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label} onPress={handleNavigationToNextScreen}>
        {label}
      </Text>
      {currentQuestion.options?.map((options) => (
        <View key={options.value}>
          <CustomButton
            title={options.label}
            type={currentQuestion.type}
            onPress={() => handleAnswerButtonPress(options.value)}
            selected={answers
              .find((entry) => entry.key === currentQuestion.key)
              ?.value.includes(options.value)}
          />
        </View>
      ))}
      {currentQuestion.type === ButtonType.MULTIPLE && (
        <NextButton
          title="Next"
          disabled={
            !answers.find((entry) => entry.key === currentQuestion.key)?.value
          }
          onPress={handleNavigationToNextScreen}
        />
      )}
      {currentQuestion.type === ButtonType.INFO && (
        <View>
          <Text style={styles.label}>{currentQuestion.description}</Text>
          <NextButton title="Next" onPress={handleNavigationToNextScreen} />
        </View>
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
