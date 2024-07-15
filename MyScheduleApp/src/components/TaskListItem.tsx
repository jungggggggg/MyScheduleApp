import { Pressable, StyleSheet, Text, View, Animated } from "react-native"
import { Task } from "../app/(tabs)/screens/monday"
import { Feather } from '@expo/vector-icons';
import { useEffect, useState } from "react";
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from '@expo/vector-icons'


type TaskListItem = {
    task: Task;
    onDelete: () => void;
}


const AnimatedView = Animated.createAnimatedComponent(View);



const RightActions = ({ 
    dragAnimatedValue,
    onDelete,
 }:{
    dragAnimatedValue: Animated.AnimatedInterpolation<string | number>;
    onDelete: () => void;
}) => {
    const animatedStyles = {
        transform: [
            {
                translateX: dragAnimatedValue.interpolate({
                    inputRange: [-40, 0],
                    outputRange: [0, 40],
                    extrapolate: 'clamp',
                })
            }
        ]
    }

    return (
    <AnimatedView
     style={[{ backgroundColor: '#3D56F6', alignItems: 'center', flexDirection: 'row', paddingHorizontal: 10,marginBottom: 10, borderRadius: 10 } ,animatedStyles]}>
    <MaterialCommunityIcons onPress={onDelete} name="delete" size={20} color="white" />
</AnimatedView>
)
}

// 위에는 스와이프 삭제
export default function TaskListItem({ task, onDelete }: TaskListItem) {

    const [click, setClick] = useState<boolean>(false);

    const clickAction = () => {
        setClick(prevState => !prevState)
    }

    return (
        <GestureHandlerRootView style={{flex: 1}}>
            <Swipeable renderRightActions={(progressAnimatedValue, dragAnimatedValue) => (
                <RightActions dragAnimatedValue={dragAnimatedValue} onDelete={onDelete} />
            )}>
        <View style={[styles.ScheduleStyle, click && styles.IfDone]}>
            <Pressable style={styles.IconStyle} onPress={clickAction}>
            <Feather name={!click ? 'square' : 'check-square'} size={20} color={!click ? "black" : "#3D56F6"} />
            </Pressable>
        <Text style={[styles.NotClicked, click && styles.Clicked]}>{task.title}</Text>
        </View>
        </Swipeable>
        </GestureHandlerRootView>
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
        borderWidth: 1,
        borderColor: '#F0F3F4',
    },
    IconStyle:{
        paddingRight: 6,
        // top: 10,
        // left: 10,
        alignSelf: 'flex-start'
    },
    Clicked:{
        color: '#3D56F6',
        textDecorationLine: 'line-through',
    },
    NotClicked:{
        color: 'black',
    },
    IfDone:{
        borderColor: '#3D56F6',
        borderWidth: 1,
    }
})