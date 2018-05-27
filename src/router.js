import React from "react";
import { Platform, StatusBar } from "react-native";
import { StackNavigator } from "react-navigation";

// scenes
import SignIn from "./scenes/SignIn";
import SignUp from "./scenes/SignUp";
import ListView from "./scenes/ListView";

export const SignedOut = StackNavigator({
  SignIn: { screen: SignIn },
  SignUp: { screen: SignUp }
});

export const SignedIn = () => {
  return <ListView />;
};
