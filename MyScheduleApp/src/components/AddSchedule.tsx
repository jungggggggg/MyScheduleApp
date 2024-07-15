import { useState } from "react";
import { KeyboardAvoidingView, Platform, Pressable, StyleSheet, Text, TextInput, View } from "react-native";




const AddButton = () => {

    const [newTask, setNewTask] = useState('');
    const [inputHeight, setInputHeight] = useState(40);

    return (
        <View>
            <TextInput style={styles.InputStyle}
                placeholder="새로운 일정 추가"
                multiline={true}
                onContentSizeChange={(event) => {
                    setInputHeight(event.nativeEvent.contentSize.height + 10)
                }}
            />
            <Pressable style={({ pressed }) =>
                [{ backgroundColor: pressed ? 'darkblue' : 'blue' }, styles.ButtonStyle]}
                onPress={() => { }}>
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