import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/screens/HomeScreen";
import QuizQuestionsScreen from "./src/screens/QuizQuestionsScreen";
import AnswersScreen from "./src/screens/AnswersScreen";

export type RootStackParamList = {
  Home: undefined;
  Quiz: { index: number; headerTitle?: string };
  Answers: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          key={(route) => route.params.index.toString()}
          options={({ route }) => ({
            title: route.params?.headerTitle || "Quizz",
          })}
          name="Quiz"
          component={QuizQuestionsScreen}
        />
        <Stack.Screen name="Answers" component={AnswersScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
