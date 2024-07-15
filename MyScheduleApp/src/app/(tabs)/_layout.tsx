import { Tabs } from "expo-router"
import { Entypo } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';

export default function TabsLayout() {
    return (
        <Tabs screenOptions={{ tabBarActiveTintColor: 'blue'}}>
            <Tabs.Screen name='screens'  options={{ tabBarLabel:'홈',headerShown: false, 
                tabBarIcon: ({ color }) => 
                <Entypo name="home" size={24} color={color} />}} />
            <Tabs.Screen name='profile' options={{ tabBarLabel:'프로필',headerShown: false, 
                tabBarIcon: ({ color }) =>  
                <Octicons name="person-fill" size={24} color={color} />}} />
        </Tabs>
    )
}