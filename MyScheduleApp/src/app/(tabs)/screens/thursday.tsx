import { Text, StatusBar, StyleSheet, KeyboardAvoidingView, Platform, ScrollView, FlatList, View } from "react-native";
import AddButton from "../../../components/AddSchedule";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import TaskListItem from "../../../components/TaskListItem";
import ShowToday from "../../../components/ShowToday";
import DeleteAll from "../../../components/DeleteAll";
import dayjs from "dayjs";
import WhatDayToday from "../../../services/dayService";



export type Task = {
    title: string;
    id: string;
}

const dummyTasks: Task[] = [
]

const MondayScreen = () => {

    const [tasks, setTasks] = useState<Task[]>(dummyTasks);

    const MONDAY = '목요일'
    const [nextId, setNextId] = useState<number>(1);


    let currentDate = dayjs()
    let foundDate = ''

    for (let i = 0; i < 8; i++) {
        if (currentDate.format('dddd') === MONDAY) {
            foundDate = currentDate.format('YYYY년 MM월 DD일');
            break;
        }
        currentDate = currentDate.add(1, 'day');
    }

    const { today, whatDay } = WhatDayToday();

    const isSame = today === foundDate;
    const addTask = (newTask: Task) => {
        const newTaskWithId = { ...newTask, id: nextId.toString() }

        if (tasks.length === 0 || (!isSame && whatDay === MONDAY)) {
            setTasks([...tasks, { title: foundDate + ' 일정', id: '0'
            }, newTaskWithId])

        } else {
            setTasks([...tasks, newTaskWithId])
        }
        
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
                <View style={{ position: 'absolute'}}>
                    <ShowToday name={'목요일'} />
                </View>
                <View style={{ flex: 1, flexDirection: 'row-reverse', padding: 3}}>
                    <DeleteAll deleteAll={deleteAllTasks}/>
                </View>
            </View>
            <SafeAreaView style={styles.ScreenStyle}>
                <FlatList data={tasks}
                keyExtractor={item => item.id}
                renderItem={({ item, index }) => <TaskListItem task={item} onDelete={() => deleteTask(index)} />}
                ListFooterComponent={() => <AddButton onAddTask={addTask} />}
                ListFooterComponentStyle={styles.ListFooterStyle}
                showsVerticalScrollIndicator={false}
                />
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