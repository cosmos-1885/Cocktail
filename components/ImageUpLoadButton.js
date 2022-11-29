import { Pressable, StyleSheet, Text } from "react-native";
import { FontAwesome } from '@expo/vector-icons';


function ImageUpLoadButton({onPress, icon, children}) {
    return (
        <Pressable style={({pressed}) => [styles.button, pressed && styles.pressed]} onPress={onPress}>
            <FontAwesome style={styles.icon} name={icon} size={18}/>
            <Text style={styles.text}>{children}</Text>
        </Pressable>
    )
}

export default ImageUpLoadButton;

const styles = StyleSheet.create({
    button : {
        flexDirection: 'row',
        paddingHorizontal : 10,
        paddingVertical :6,
        margin : 4,
        alignContent : 'space-between',
        borderWidth : 1,
    },
    pressed : {
        opacity : 0.5
    },
    icon : {
        marginRight : 10
    },
    text : {
        color : "#000000"
    }
})