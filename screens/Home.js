import { useState } from "react";
import { ScrollView, StyleSheet, View, Text, Pressable, TouchableOpacity, TouchableWithoutFeedback, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

function Detail() {
    const navigation = useNavigation();

    return (
        <ScrollView style={styles.container}>

          <View style={styles.logocontainer} >
            <Image style={styles.logocontainer} source={require('../assets/images/logo.png')}/>
          </View>

          <View style={styles.searchcontainer} >
            <Image style={styles.search}/>
          </View>

          <View style={styles.maincontainer} >
            <Image style={styles.mainimagecontainer} source={require('../assets/images/main.jpg')}/>
          </View>

          
            <View style={styles.linecontainer}>
              <View style={styles.line}/>
            </View>

            <View>
              <Text style={styles.hightextcontainer}>꼴칵이 추천해요!</Text>
            </View>

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
        </ScrollView>
    )
}

export default Detail;

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
    maincontainer : {
      width: 240,
      height: 200,
      flex: 1,
      flexDirection: 'row',
      marginLeft: 70,
      marginBottom: 20,
      alignItems: 'center',
      justifyContent: 'center',
      // borderColor: 'red',
      // borderWidth: 2
    },
    mainimagecontainer : {
      width: 280,
      height: 150,
      borderRadius: 30
    },
    searchcontainer : {
      width: 300,
      height: 20,
      marginLeft: 40,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
      borderColor: 'gray',
      borderWidth: 1
  },
    cockcontainer : {
        width: 130,
        height: 110,
        alignItems: 'center',
        justifyContent: 'center',
        // borderColor: 'red',
        // borderWidth: 2
    },
    linecontainer : {
      alignItems: 'center',
      justifyContent: 'center'
    },
    logocontainer : {
      width: 130,
      height: 110,
      marginLeft: 85,
      alignItems: 'center',
      justifyContent: 'center',
      // borderColor: 'red',
      // borderWidth: 2
  },
    // search : {
    //   width: 300,
    //   height: 20,
    //   borderRadius: 10,
    //   borderWidth: 1,
    //   opacity: 0.3
    // },
    line : {
      width: 350,
      borderWidth: 1,
      opacity: 0.3
    },
    imagecontainer : {
        width: 80,
        height: 80,
        borderRadius: 10
    },
    hightextcontainer:{
      fontWeight: 'bold',
      marginLeft: 25,
      margin:15
    },
    textcontainer : {
        margin: 5
    }
})
