import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import CustomButton from "../components/CustomButton";
import { useFonts, Inter_600SemiBold } from "@expo-google-fonts/inter";
import { ButtonType } from "../components/CustomButton";

const HomeScreen = () => {
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
        onPress={() => console.log("button pressed")}
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
