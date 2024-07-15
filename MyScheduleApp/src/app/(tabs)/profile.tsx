import { View } from "react-native";
import ProfileImagePicker from "../../components/ImagePicker";


export default function ProfileScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: 'white'}}>
    <ProfileImagePicker />
    </View>
  )
}