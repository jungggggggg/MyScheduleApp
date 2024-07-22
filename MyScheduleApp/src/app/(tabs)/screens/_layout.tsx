import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { StyleSheet, View, Text } from "react-native";
import MondayScreen from "./monday";
import TuesdayScreen from "./tuesday";
import WednesdayScreen from "./wednesday";
import ThursdayScreen from "./thursday";
import FridayScreen from "./friday";
import SaturdayScreen from "./saturday";
import SundayScreen from "./sunday";

const Tab = createMaterialTopTabNavigator();

export default function ScreensLayout() {
  return (
      <Tab.Navigator screenOptions={({ route }) => ({
        tabBarIndicatorStyle: { height: 0 }, swipeEnabled: false, tabBarLabel: ({ focused }) => (
          <View style={[styles.labelContainer, focused && styles.focusedLabel]}>
            <Text style={[styles.labelText, focused && styles.focusedLabelText]}>{route.name}</Text>
          </View>
        )
      })}>
        <Tab.Screen name='Mon' component={MondayScreen} />
        <Tab.Screen name='Tue' component={TuesdayScreen} />
        <Tab.Screen name='Wed' component={WednesdayScreen} />
        <Tab.Screen name='Thu' component={ThursdayScreen} />
        <Tab.Screen name='Fri' component={FridayScreen} />
        <Tab.Screen name='Sat' component={SaturdayScreen} />
        <Tab.Screen name='Sun' component={SundayScreen} />
      </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  labelContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 2.6,
    borderRadius: 20,
  },
  focusedLabel: {
    backgroundColor: '#3D56F6',
  },
  labelText: {
    color: 'black',
    fontSize: 15,
  },
  focusedLabelText: {
    color: 'white',
    fontWeight: 'bold',
  },
});