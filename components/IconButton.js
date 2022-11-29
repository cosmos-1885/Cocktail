import { Pressable, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function IconButton({size, color, onPress}) {
    return (
        <Pressable 
        style={({pressed}) => [styles.button, pressed && styles.pressed]} 
        onPress={onPress}
        >
            <MaterialCommunityIcons name="pencil-plus-outline" size={size} color={color}/>
        </Pressable>
    )
}

export default IconButton;

const styles = StyleSheet.create({
    button: {
        marginRight : 10
    },
    pressed: {
        opacity : 0.5
    }
})