import { Pressable, StyleSheet, Text, View } from "react-native"
import { Task } from "../app/(tabs)/screens/monday"
import { Feather } from '@expo/vector-icons';
import { useEffect, useState } from "react";


type TaskListItem = {
    task: Task
}

export default function TaskListItem({ task }: TaskListItem) {

    const [click, setClick] = useState<boolean>(false);

    const clickAction = () => {
        setClick(prevState => !prevState)
    }

    return (
        <View style={styles.ScheduleStyle}>
            <Pressable style={styles.IconStyle} onPress={clickAction}>
            <Feather name={!click ? 'square' : 'check-square'} size={20} color={!click ? "black" : "#3D56F6"} />
            </Pressable>
        <Text style={[styles.NotClicked, click && styles.Clicked]}>{task.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    ScheduleStyle:{
        marginBottom: 10,
        backgroundColor: '#F0F3F4',
        borderRadius: 10,
        width: 350,
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'center',
    },
    IconStyle:{
        paddingRight: 6,
        // top: 10,
        // left: 10,
    },
    Clicked:{
        color: '#3D56F6',
        textDecorationLine: 'line-through',
    },
    NotClicked:{
        color: 'black',
    },
})