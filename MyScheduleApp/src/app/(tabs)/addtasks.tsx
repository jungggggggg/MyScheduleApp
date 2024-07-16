import { View,Text, StyleSheet } from "react-native";
import AddButton from "../../components/AddSchedule";




export default function AddTasks() {
    return(
        <View style={styles.AddTasksScreen}>
            <AddButton onAddTask={AddTasks} />
        </View>
    )
}

const styles = StyleSheet.create({
    AddTasksScreen: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    }
})