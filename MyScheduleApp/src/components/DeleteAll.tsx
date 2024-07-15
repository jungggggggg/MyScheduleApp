
import { Pressable, StyleSheet, Text } from "react-native";



type Deleting = {
    deleteAll: () => void;
}

export default function DeleteAll({ deleteAll }: Deleting) {

    return (
        <Pressable onPress={deleteAll} style={styles.ButtonContainer}>
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

