import { Text } from "react-native"
import { Task } from "../app/(tabs)/screens/monday"


type TaskListItem = {
    task: Task
}

export default function TaskListItem({ task }: TaskListItem) {
    return (
        <Text>{task.title}</Text>
    )
}