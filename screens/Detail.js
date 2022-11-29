import { useState } from "react";
import { ScrollView, StyleSheet, View, Text, Pressable, TouchableOpacity, TouchableWithoutFeedback, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons, Entypo, Fontisto, FontAwesome, AntDesign } from "@expo/vector-icons";

function Detail() {
    const navigation = useNavigation();

    return (
        <ScrollView style={styles.container}>
            <View>
                <Image style={styles.imagecontainer} source={require('../assets/images/sample1.jpg')} />
                <View style={styles.titlecontainer}>
                    <View>
                        <Text style={styles.cockkoreanname}>화이트 러시안</Text>
                        <Text style={styles.cockengname}>White Russian</Text>
                    </View>
                    <View style={styles.tagcontainer}>
                        <Text style={styles.tagtext}>#드라이 #보드카</Text>
                        <AntDesign name="hearto" size={28} color="black" />
                    </View>
                </View>
                <Text style={styles.onelinedescription}>"블랙 러시안 위에 크림이 내렸어요!"</Text>
                <View style={styles.descriptioncontainer}>
                    <Text style={styles.description}>블랙 러시안보다는 부드럽고 깔루아 밀크보다는 독해요.{"\n"}커피맛, 우유맛이 나요.</Text>
                    <Text style={styles.degree}>20~25%</Text>
                </View>
                <View style={styles.linecontainer}>
                    <View style={styles.line}/>
                </View>
            </View>
            <View>
                <Text style={styles.materialtitle}>재료</Text>
                <View style={styles.materialcontainer}>
                    <Image style={styles.materialimage} source={require('../assets/images/sample1.jpg')}/>
                    <Text style={styles.materialtext}>크림   1oz  (30ml)</Text>
                </View>
                <View style={styles.materialcontainer}>
                    <Image style={styles.materialimage} source={require('../assets/images/sample1.jpg')}/>
                    <Text style={styles.materialtext}>보드카   1 2/3oz  (50ml)</Text>
                </View>
                <View style={styles.materialcontainer}>
                    <Image style={styles.materialimage} source={require('../assets/images/sample1.jpg')}/>
                    <Text style={styles.materialtext}>깔루아   2/3oz  (20ml)</Text>
                </View>
                <View style={styles.linecontainer}>
                    <View style={styles.line}/>
                </View>
            </View>
            <View style={styles.lastcontainer}>
                <Text style={styles.recipetitle}>레시피</Text>
                <View style={styles.recipecontainer}>
                    <Text style={styles.recipetext}>1. 얼음이 든 온더락 글래스를 준비해주세요.</Text>
                    <Text style={styles.recipetext}>2. 글래스에 보드카와 깔루아를 순서대로 빌드해주세요. </Text>
                    <Text style={styles.recipetext}>3. 크림을 조심스레 부어서 층이 생기게 해주세요. </Text>
                    <Text style={styles.recipetext}>4. 살짝 저어주면 완성</Text>
                </View>
            </View>
        </ScrollView>
    )
}

export default Detail;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    titlecontainer : {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 30,
        paddingBottom: 20,
        paddingLeft: 20,
        paddingRight: 20,
        // borderWidth: 2
    },
    tagcontainer : {
        flex: 1,
        flexDirection: 'row',
        width: 20,
        alignItems: 'center',
        justifyContent: 'flex-end',
        // borderWidth: 2
    },
    imagecontainer : {
        width: 393,
        height: 393,
    },
    cockkoreanname : {
        fontSize: 18,
        fontWeight: 'bold'
    },
    cockengname : {
        opacity: 0.6
    },
    tagtext : {
        fontSize: 12,
        marginTop: 5,
        marginBottom: 5,
        marginRight: 20
    },
    onelinedescription : {
        fontWeight: 'bold',
        paddingLeft: 20,
        paddingRight: 20,
        // borderWidth: 2
    },
    descriptioncontainer : {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 20,
        paddingRight: 20,
        // borderWidth: 2
    },
    description : {
        fontSize: 11,
        opacity: 0.6
    },
    degree : {
        fontSize: 15,
        textAlignVertical: 'bottom',
        // borderWidth: 2
    },
    linecontainer : {
        alignItems: 'center',
        justifyContent: 'center'
    },
    line : {
        width: 350,
        borderWidth: 1,
        opacity: 0.3
    },
    materialtitle : {
        textAlign: 'center',
        fontSize: 15,
        fontWeight: 'bold',
        paddingTop: 30,
        paddingBottom: 20,
        paddingLeft: 20,
        paddingRight: 20,
        // borderWidth: 2
    },
    materialcontainer : {
        flex: 1,
        flexDirection: 'row',
        paddingBottom: 20,
        paddingLeft: 50,
    },
    materialimage : {
        width: 50,
        height: 50,
        marginRight: 10
    },
    materialtext : {
        fontSize: 14,
        textAlignVertical: 'bottom',
    },
    lastcontainer : {
        paddingBottom: 20
    },
    recipetitle : {
        textAlign: 'center',
        fontSize: 15,
        fontWeight: 'bold',
        paddingTop: 30,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
        // borderWidth: 2
    },
    recipecontainer : {
        paddingLeft: 60,
        alignContent: 'center',
        justifyContent: 'center',
        // borderWidth: 2
    },
    recipetext : {
        fontSize: 13,
        fontWeight: 'bold',
        paddingTop: 10,
        paddingBottom: 10,
        // borderWidth: 2
    }
})