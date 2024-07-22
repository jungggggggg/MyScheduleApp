import { useEffect, useState } from "react";
import { Alert, Keyboard, KeyboardAvoidingView, Platform, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import dayjs from 'dayjs';
import 'dayjs/locale/ko'; // 한국어 로케일을 로드합니다.

dayjs.locale('ko');



type AddButtonProps = {
    onAddTask: (task: Task) => void;
}

export type Task = {
    title: string;
    id: string;
    datetime: string;
    dateday: string;
}

const dummyTasks: Task[] = [
]

const AddButton = ({ onAddTask }: AddButtonProps) => {

    const [newTask, setNewTask] = useState('');
    const [isMonth, setIsMonth] = useState('');
    const [isDay, setIsDay] = useState('');


    const handleAddTask = () => {
        const month = parseInt(isMonth, 10);
        const day = parseInt(isDay, 10);

        if (newTask.trim() === '' || isMonth.length === 0 || isDay.length === 0) {
            Alert.alert('입력 오류', '날짜와 예정을 입력하세요');
            return;
        }

        if (month < 1 || month > 12 || day < 1 || day > 31) {
            Alert.alert('입력 오류', '올바른 날짜를 입력하세요');
            return;
        }

        // 각 달의 최대 일수를 정의합니다.
        const daysInMonth = [31, (isLeapYear() ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        if (day > daysInMonth[month - 1]) {
            Alert.alert('입력 오류', `${month}월은 ${day}일이 없습니다.`);
            return;
        }


    const ScheduleDay = `${isMonth}-${isDay}`;

    const dayOfWeek = dayjs(`2024-${isMonth}-${isDay}`).format('dddd');

        Keyboard.dismiss();
        onAddTask({ title: newTask, id: `${Date.now()}`, datetime: ScheduleDay, dateday: dayOfWeek });
        setNewTask('');
        setIsMonth('');
        setIsDay('');
    };

    const isLeapYear = () => {
        const year = new Date().getFullYear();
        return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    };

    return (
        <View style={{ alignItems: 'center'}}>
            <Text style={{ paddingBottom: 20, fontWeight: 'bold' }}>일정을 입력하시면 자동으로 일정 탭에 추가됩니다!</Text>
        <View style={styles.InputContainer}>
            <TextInput style={styles.InputStyle}
                placeholder="새로운 일정 추가"
                multiline={true}
                onChangeText={setNewTask}
                scrollEnabled={false}
                value={newTask}
            />
            <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 16 }}>
                <TextInput
                    style={{ width: 30 }}
                    multiline={false}
                    scrollEnabled={false}
                    maxLength={2}
                    placeholder="MM"
                    onChangeText={setIsMonth}
                    keyboardType="numeric"
                    value={isMonth}
                />
                <Text style={{ paddingRight: 5 }}>월</Text>
                <TextInput
                    style={{ width: 30 }}
                    multiline={false}
                    scrollEnabled={false}
                    maxLength={2}
                    placeholder="DD"
                    onChangeText={setIsDay}
                    keyboardType="numeric"
                    value={isDay}
                />
                <Text>일</Text>
            </View>
            <Pressable style={({ pressed }) =>
                [{ backgroundColor: pressed ? 'darkblue' : '#3D56F6' }, styles.ButtonStyle]}
                onPress={handleAddTask}>
                <Text style={{ color: 'white', fontSize: 30, fontWeight: '500' }}>+</Text>
            </Pressable>
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
    ButtonStyle: {
        width: 300,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
    },
    InputStyle: {
        padding: 10,
        width: 300,
        flexDirection: 'row',
    },
    DayInputStyle: {
        width: 40,
    },
    InputContainer: {
        backgroundColor: '#F0F3F4',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
    }
})


export default AddButton;