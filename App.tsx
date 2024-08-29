import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/screens/HomeScreen";
import QuizQuestionsScreen from "./src/screens/QuizQuestionsScreen";

export type RootStackParamList = {
  Home: undefined;
  Quiz: { index: number };
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
          // key={(route) => {
          //   return `profile-${route.params.number}`;
          // }}
          name="Quiz"
          component={QuizQuestionsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
