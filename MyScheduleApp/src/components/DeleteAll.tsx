
import { Alert, Pressable, StyleSheet, Text } from "react-native";



type Deleting = {
    deleteAll: () => void;
}



export default function DeleteAll({ deleteAll }: Deleting) {


    const deleteItem = () => {
        Alert.alert(
            '삭제',
            '모든 일정이 삭제됩니다.',
            [
                {text: '취소', onPress: () => {}, style: 'cancel'},
                {text: '확인', onPress: deleteAll, style: 'destructive'},
            ],
            {cancelable: true,
                onDismiss: () => {}
            }
        )
    }


    return (
        <Pressable onPress={deleteItem} style={styles.ButtonContainer}>
            <Text style={styles.ButtonText}>모두 완료!</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    ButtonContainer: {
        backgroundColor: '#3D56F6',
        borderRadius: 30,
        padding: 5,
    },
    ButtonText: {
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold',
    }
})

