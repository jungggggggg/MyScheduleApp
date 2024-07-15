import { useState } from "react";
import { Keyboard, KeyboardAvoidingView, Platform, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { Task } from "../app/(tabs)/screens/monday";


type AddButtonProps = {
    onAddTask: (task: Task) => void;
}

const AddButton = ({ onAddTask }: AddButtonProps) => {

    const [newTask, setNewTask] = useState('');
    const [inputHeight, setInputHeight] = useState(40);

    const handleAddTask = () => {
        if (newTask.trim() === '') {
            return;
        }
        Keyboard.dismiss();
        onAddTask({ title: newTask, id: Date.now().toString() })
        setNewTask('')
    }

    return (
        <View>
            <TextInput style={styles.InputStyle}
                placeholder="새로운 일정 추가"
                multiline={true}
                onContentSizeChange={(event) => {
                    setInputHeight(event.nativeEvent.contentSize.height + 10)
                }}
                onChangeText={setNewTask}
                scrollEnabled={false}
            />
            <Pressable style={({ pressed }) =>
                [{ backgroundColor: pressed ? 'darkblue' : '#3D56F6' }, styles.ButtonStyle]}
                onPress={handleAddTask}>
                <Text style={{ color: 'white', fontSize: 30, fontWeight: '500' }}>+</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    ButtonStyle: {
        width: 350,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 14,
    },
    InputStyle: {
        marginBottom: 10,
        backgroundColor: '#F0F3F4',
        borderRadius: 10,
        width: 350,
        padding: 10,
        flexDirection: 'row',
    }
})

export default AddButton;