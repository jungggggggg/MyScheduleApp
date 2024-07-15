import { Redirect } from "expo-router"
import { Text } from "react-native"

//기본 홈페이지, tabs/_layout으로 감
export default function Home() {
    return <Redirect href="/(tabs)/screens" />;
}