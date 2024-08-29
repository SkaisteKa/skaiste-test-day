import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import React, { FC } from "react";
import CustomButton from "../components/CustomButton";
import { useFonts, Inter_600SemiBold } from "@expo-google-fonts/inter";
import { ButtonType } from "../components/CustomButton";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../App";

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, "Home">;

const HomeScreen: FC<HomeScreenProps> = ({ navigation }) => {
  let [fontsLoaded] = useFonts({
    Inter_600SemiBold,
  });
  if (!fontsLoaded) return <Text>Loading...</Text>;
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.label}>Quiz</Text>
      <CustomButton
        type={ButtonType.SINGLE}
        title="Start Quiz"
        onPress={() => navigation.navigate("Quiz", { index: 0 })}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;

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
