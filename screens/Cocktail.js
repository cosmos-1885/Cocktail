import { useState } from "react";
import { ScrollView, StyleSheet, View, Text, Pressable, TouchableOpacity, TouchableWithoutFeedback, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

function Cocktail() {
    const navigation = useNavigation();

    return (
        <ScrollView style={styles.container}>
            <View style={styles.firstrowcontainer}>
                <TouchableWithoutFeedback
                onPress={() => navigation.navigate('레시피 상세')}>
                    <View style={styles.cockcontainer}>
                        <Image style={styles.imagecontainer} source={require('../assets/images/sample1.jpg')}/>
                        <Text style={styles.textcontainer}>화이트 러시안</Text>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback>
                    <View style={styles.cockcontainer}>
                        <Image style={styles.imagecontainer} source={require('../assets/images/sample1.jpg')}/>
                        <Text style={styles.textcontainer}>B-52</Text>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback>
                    <View style={styles.cockcontainer}>
                        <Image style={styles.imagecontainer} source={require('../assets/images/sample1.jpg')}/>
                        <Text style={styles.textcontainer}>B-52</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
            <View style={styles.rowcontainer}>
                <TouchableWithoutFeedback>
                    <View style={styles.cockcontainer}>
                        <Image style={styles.imagecontainer} source={require('../assets/images/sample1.jpg')}/>
                        <Text style={styles.textcontainer}>B-52</Text>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback>
                    <View style={styles.cockcontainer}>
                        <Image style={styles.imagecontainer} source={require('../assets/images/sample1.jpg')}/>
                        <Text style={styles.textcontainer}>B-52</Text>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback>
                    <View style={styles.cockcontainer}>
                        <Image style={styles.imagecontainer} source={require('../assets/images/sample1.jpg')}/>
                        <Text style={styles.textcontainer}>B-52</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
            <View style={styles.rowcontainer}>
                <TouchableWithoutFeedback>
                    <View style={styles.cockcontainer}>
                        <Image style={styles.imagecontainer} source={require('../assets/images/sample1.jpg')}/>
                        <Text style={styles.textcontainer}>B-52</Text>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback>
                    <View style={styles.cockcontainer}>
                        <Image style={styles.imagecontainer} source={require('../assets/images/sample1.jpg')}/>
                        <Text style={styles.textcontainer}>B-52</Text>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback>
                    <View style={styles.cockcontainer}>
                        <Image style={styles.imagecontainer} source={require('../assets/images/sample1.jpg')}/>
                        <Text style={styles.textcontainer}>B-52</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
            <View style={styles.rowcontainer}>
                <TouchableWithoutFeedback>
                    <View style={styles.cockcontainer}>
                        <Image style={styles.imagecontainer} source={require('../assets/images/sample1.jpg')}/>
                        <Text style={styles.textcontainer}>B-52</Text>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback>
                    <View style={styles.cockcontainer}>
                        <Image style={styles.imagecontainer} source={require('../assets/images/sample1.jpg')}/>
                        <Text style={styles.textcontainer}>B-52</Text>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback>
                    <View style={styles.cockcontainer}>
                        <Image style={styles.imagecontainer} source={require('../assets/images/sample1.jpg')}/>
                        <Text style={styles.textcontainer}>B-52</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
            <View style={styles.rowcontainer}>
                <TouchableWithoutFeedback>
                    <View style={styles.cockcontainer}>
                        <Image style={styles.imagecontainer} source={require('../assets/images/sample1.jpg')}/>
                        <Text style={styles.textcontainer}>B-52</Text>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback>
                    <View style={styles.cockcontainer}>
                        <Image style={styles.imagecontainer} source={require('../assets/images/sample1.jpg')}/>
                        <Text style={styles.textcontainer}>B-52</Text>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback>
                    <View style={styles.cockcontainer}>
                        <Image style={styles.imagecontainer} source={require('../assets/images/sample1.jpg')}/>
                        <Text style={styles.textcontainer}>B-52</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
            <View style={styles.rowcontainer}>
                <TouchableWithoutFeedback>
                    <View style={styles.cockcontainer}>
                        <Image style={styles.imagecontainer} source={require('../assets/images/sample1.jpg')}/>
                        <Text style={styles.textcontainer}>B-52</Text>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback>
                    <View style={styles.cockcontainer}>
                        <Image style={styles.imagecontainer} source={require('../assets/images/sample1.jpg')}/>
                        <Text style={styles.textcontainer}>B-52</Text>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback>
                    <View style={styles.cockcontainer}>
                        <Image style={styles.imagecontainer} source={require('../assets/images/sample1.jpg')}/>
                        <Text style={styles.textcontainer}>B-52</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
            <View style={styles.rowcontainer}>
                <TouchableWithoutFeedback>
                    <View style={styles.cockcontainer}>
                        <Image style={styles.imagecontainer} source={require('../assets/images/sample1.jpg')}/>
                        <Text style={styles.textcontainer}>B-52</Text>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback>
                    <View style={styles.cockcontainer}>
                        <Image style={styles.imagecontainer} source={require('../assets/images/sample1.jpg')}/>
                        <Text style={styles.textcontainer}>B-52</Text>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback>
                    <View style={styles.cockcontainer}>
                        <Image style={styles.imagecontainer} source={require('../assets/images/sample1.jpg')}/>
                        <Text style={styles.textcontainer}>B-52</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
            <View style={styles.lastrowcontainer}>
                <TouchableWithoutFeedback>
                    <View style={styles.cockcontainer}>
                        <Image style={styles.imagecontainer} source={require('../assets/images/sample1.jpg')}/>
                        <Text style={styles.textcontainer}>B-52</Text>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback>
                    <View style={styles.cockcontainer}>
                        <Image style={styles.imagecontainer} source={require('../assets/images/sample1.jpg')}/>
                        <Text style={styles.textcontainer}>B-52</Text>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback>
                    <View style={styles.cockcontainer}>
                        <Image style={styles.imagecontainer} source={require('../assets/images/sample1.jpg')}/>
                        <Text style={styles.textcontainer}>B-52</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        </ScrollView>
    )
}

export default Cocktail;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    layoutBox : {
        margin: 16,
        alignItems : 'center'
    },
    firstrowcontainer : {
        flex: 1,
        flexDirection: 'row',
        marginTop: 20
    },
    rowcontainer : {
        flex: 1,
        flexDirection: 'row'
    },
    lastrowcontainer : {
        flex: 1,
        flexDirection: 'row',
        marginBottom: 20
    },
    cockcontainer : {
        width: 130,
        height: 110,
        alignItems: 'center',
        justifyContent: 'center',
        // borderColor: 'red',
        // borderWidth: 2
    },
    imagecontainer : {
        width: 80,
        height: 80,
        borderRadius: 10
    },
    textcontainer : {
        margin: 5
    }
})