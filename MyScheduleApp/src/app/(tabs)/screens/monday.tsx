import { Text, StatusBar, StyleSheet, KeyboardAvoidingView, Platform, ScrollView, FlatList } from "react-native";
import AddButton from "../../../components/AddSchedule";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import TaskListItem from "../../../components/TaskListItem";



export type Task = {
    title: string;
    id: string;
}

const dummyTasks: Task[] = [
    { id: '1', title: 'Task 1' },
    { id: '2', title: 'Task 2' },
    { id: '3', title: 'Task 3' },
]

const MondayScreen = () => {

    const [tasks, setTasks] = useState<Task[]>(dummyTasks);
 
    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
            <SafeAreaView style={styles.ScreenStyle}>
                <FlatList data={tasks}
                keyExtractor={item => item.id}
                renderItem={({ item }) => <TaskListItem task={item} />}
                ListFooterComponent={() => <AddButton />}
                />
            </SafeAreaView>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    ScreenStyle: {
        flex: 1,
        alignItems: 'center',
    },
    container: {
        flex: 1,
        backgroundColor: 'white',
    }
})

export default MondayScreen;