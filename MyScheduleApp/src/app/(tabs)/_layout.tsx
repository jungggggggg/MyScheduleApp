import { Tabs } from "expo-router"
import { Entypo } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import TaskManagerProvider from "../../components/TaskManager";

export default function TabsLayout() {
    return (
        <TaskManagerProvider>
        <Tabs screenOptions={{ tabBarActiveTintColor: '#3D56F6' }}>
            <Tabs.Screen name='screens' options={{
                tabBarLabel: 'Schedule', headerShown: false,
                tabBarIcon: ({ color }) =>
                    <FontAwesome name="list-alt" size={24} color={color} />
            }} />
            <Tabs.Screen name='addtasks' options={{
                tabBarLabel: 'Add Schedule', headerShown: false,
                tabBarIcon: ({ color }) =>
                    <Entypo name="add-to-list" size={24} color={color} />
            }} />
            <Tabs.Screen name='profile' options={{
                tabBarLabel: 'Profile', headerShown: false,
                tabBarIcon: ({ color }) =>
                    <Octicons name="person-fill" size={24} color={color} />
            }} />
        </Tabs>
        </TaskManagerProvider>
    )
}