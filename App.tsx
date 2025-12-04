import React from "react";
import { Text, TextInput } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LandingPage from "./source/landingpage";
import MenuPage from "./source/menupage";
import DetailPage from "./source/detailpage";
import OrderPage from "./source/orderpage";

// Type untuk parameter setiap screen
export type RootStackParamList = {
  LandingPage: undefined;
  MenuPage: undefined;
  DetailPage: { data: any } | undefined; // sesuai dengan data yang dikirim dari MenuPage
  OrderPage: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  // set app-wide default font to Poppins (regular)
  try {
    // defaultProps may be undefined in some RN versions; guard it
    if (Text && (Text as any).defaultProps == null) {
      (Text as any).defaultProps = {};
    }
    (Text as any).defaultProps.style = {
      fontFamily: 'Poppins-Regular',
    };
    // Also set TextInput default so placeholders and typed text use Poppins
    try {
      if (TextInput && (TextInput as any).defaultProps == null) {
        (TextInput as any).defaultProps = {};
      }
      (TextInput as any).defaultProps.style = { fontFamily: 'Poppins-Regular' };
    } catch (e) {
      // ignore if not supported
    }
  } catch (e) {
    // ignore if not supported in environment
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="LandingPage" component={LandingPage} />
        <Stack.Screen name="MenuPage" component={MenuPage} />
        <Stack.Screen name="OrderPage" component={OrderPage} />
        <Stack.Screen name="DetailPage" component={DetailPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
