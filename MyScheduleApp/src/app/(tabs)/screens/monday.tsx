import { Text, StatusBar, StyleSheet, KeyboardAvoidingView, Platform, ScrollView, FlatList, View, Alert } from "react-native";
import AddButton from "../../../components/AddSchedule";
import { SafeAreaView } from "react-native-safe-area-context";
import { useEffect, useState } from "react";
import TaskListItem from "../../../components/TaskListItem";
import ShowToday from "../../../components/ShowToday";
import DeleteAll from "../../../components/DeleteAll";
import WhatDayToday from "../../../services/dayService";
import dayjs from "dayjs";



export type Task = {
    title: string;
    id: string;
    datetime: string;
}

const dummyTasks: Task[] = []

const MondayScreen = () => {
    
    const [tasks, setTasks] = useState<Task[]>(dummyTasks);
    
    const [nextId, setNextId] = useState<number>(1);



    const addTask = (newTask: Task) => {
        setTasks([...tasks, newTask])
        setNextId(nextId + 1)
    }

    const deleteTask = (index: number) => {
        setTasks((currentTasks) => {
            const updatedTasks = [...currentTasks];
            updatedTasks.splice(index, 1);
            return updatedTasks;
        })
    }

    const deleteAllTasks = () => {
        setTasks([])
        setNextId(1);
    }


    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={Platform.select({ ios: 0, android: 500 })}>
            <View style={styles.TodayIs}>
                <View style={{ position: 'absolute' }}>
                    <ShowToday name={'월요일'} />
                </View>
                <View style={{ flex: 1, flexDirection: 'row-reverse', padding: 3 }}>
                    <DeleteAll deleteAll={deleteAllTasks} />
                </View>
            </View>
            <SafeAreaView style={styles.ScreenStyle}>
                <FlatList 
                    data={tasks}
                    keyExtractor={item => item.id}
                    renderItem={({ item, index }) => <TaskListItem task={item} onDelete={() => deleteTask(index)} />}
                />
                <AddButton onAddTask={addTask} nextId={nextId} />
            </SafeAreaView>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    ScreenStyle: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 0,
    },
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    ListFooterStyle: {
        marginTop: 10,
    },
    TodayIs: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        width: '100%',
    }
})

export default MondayScreen;