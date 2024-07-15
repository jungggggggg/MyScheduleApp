import { StyleSheet, Text } from "react-native"

type Name = {
    name: string;
}

export default function ShowToday({ name }: Name) {
    return (
        <Text style={styles.TodayIs}>{name}</Text>
    )
}

const styles = StyleSheet.create({
    TodayIs:{
        // alignItems: 'center',
        fontWeight: 'bold',
        fontSize: 20,
        paddingTop: 5,
        // justifyContent: 'center',
        
    }
})