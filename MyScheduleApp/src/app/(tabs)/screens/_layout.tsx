import { Tabs } from "expo-router"
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
      <Tab.Screen name='월' component={MondayScreen} />
      <Tab.Screen name='화' component={TuesdayScreen} />
      <Tab.Screen name='수' component={WednesdayScreen} />
      <Tab.Screen name='목' component={ThursdayScreen} />
      <Tab.Screen name='금' component={FridayScreen} />
      <Tab.Screen name='토' component={SaturdayScreen} />
      <Tab.Screen name='일' component={SundayScreen} />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  labelContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 20,
  },
  focusedLabel: {
    backgroundColor: '#3D56F6',
  },
  labelText: {
    color: 'black',
    fontSize: 15
  },
  focusedLabelText: {
    color: 'white', // 선택된 탭의 텍스트 색상 변경
    fontWeight: 'bold', // 선택된 탭의 텍스트 스타일 변경 (예: 굵게)
  },
});

