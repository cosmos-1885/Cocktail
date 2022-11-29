import { useState } from "react";
import {
  ScrollView,
  Image,
  Text,
  View,
  StyleSheet,
  TextInput,
  Pressable,
  Alert,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import ImagePicker from '../components/ImagePickers';
import axios from 'axios'

function WriteCocktail() {
  const navigation = useNavigation();

  const goCockTailPage = () => {
    navigation.navigate("홈 화면");
  };

  // 사용자 측 이미지 업로드는 연구 필요
  const [cocktailname, setCocktailname] = useState("");
  const [cocktailengname, setCocktailEngname] = useState("");
  const [comment, setComment] = useState("");
  const [flavor, setFlavor] = useState("");
  const [alcohol, setAlcohol] = useState("");
  const [recipe, setRecipe] = useState("");

  const cocktailnameHandler = (text) => {
    setCocktailname(text);
  };
  const cocktailengnameHandler = (text) => {
    setCocktailEngname(text);
  };
  const flavorHandler = (text) => {
    setFlavor(text);
  };
  const commentHandler = (text) => {
    setComment(text);
  };
  const alcoholHandler = (text) => {
    setAlcohol(text);
  };
  const recipeHanlder = (text) => {
    setRecipe(text);
  };

  // const [val, setVal] = useState();
  // const validation = () => {
  //   (cocktailname.length >= 1) && (cocktailengname.length >= 1) && (comment.length >= 1) && (flavor.length >= 1)
  //   && (alcohol.length >= 1) && (recipe.length >= 1) ? setVal(true) : setVal(false)
  // }

  // const upLoad = () => {
  //   { val ? Alert.alert("🥃시그니쳐 칵테일 등록🥃", "전부 다 작성하셨나요😊", [
  //     {
  //       text: "Yes!!🤩",
  //       onPress: () => uploadData()
  //     },
  //     { text: "No😥" },
  //     {
  //       text: "GoGo!!",
  //       onPress: () => console.log("업로드 완료!")
  //     },
  //   ]) : Alert.alert("항목들을 다시 확인해 주세요!", "전부 다 작성하셨나요?", [
  //     { text:"OK!", style:"destructive"}
  //   ])}
  // };

    // 정보 처리 작업 필요
    const upLoad = () => {
      Alert.alert("🥃시그니쳐 칵테일 등록🥃", "전부 다 작성하셨나요😊", [
       {
         text: "Yes!!🤩",
         onPress: () => uploadData()
       },
       { text: "No😥" },
     ])
   };

    const uploadData = () => {
    const body = new FormData();
    body.append('cocktailname', cocktailname);
    body.append('cocktailengname', cocktailengname);
    body.append('comment', comment);
    body.append('flavor', flavor);
    body.append('alcohol', alcohol);
    body.append('recipe', recipe);

    axios.post("https://ggolcock-default-rtdb.firebaseio.com/cocktail", body, {
      headers : { "Content-Type" :"multipart/form-data" },
    })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error.response);
    })
    .then(() => {
      Alert.alert("🥃시그니쳐 칵테일 등록 완료!!🥃", "방문해 주셔서 감사합니다😍", [
        {text:"OK~~!!", onPress: () => goCockTailPage() }
      ])
    })
  }

  return (
    <ScrollView style={styles.Container}>
      <View style={styles.alignContainer}>
        {/* <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require("../assets/images/image.png")}
          />
        </View> */}
        <ImagePicker/>
      </View>

      <View style={styles.textContainer}>
        <TextInput
          style={styles.textStyle}
          maxLength={50}
          onChangeText={cocktailnameHandler}
          placeholder="칵테일의 이름"
        />
      </View>
      <View style={styles.textContainer}>
        <TextInput
          style={styles.textStyle}
          maxLength={50}
          onChangeText={cocktailengnameHandler}
          placeholder="영어 이름"
          keyboardType="email-address"
        />
      </View>
      <View style={styles.textContainer}>
        <TextInput
          style={styles.textStyle}
          maxLength={20}
          onChangeText={flavorHandler}
          placeholder="칵테일의 맛"
        />
      </View>
      <View style={styles.textContainer}>
        <TextInput
          style={styles.textStyle}
          maxLength={10}
          onChangeText={commentHandler}
          placeholder="칵테일에 대한 한 줄 평을 작성해주세요! :)"
        />
      </View>
      <View style={styles.textContainer}>
        <TextInput
          style={styles.textStyle}
          maxLength={10}
          onChangeText={alcoholHandler}
          placeholder="칵테일의 도수(예상 %)"
          keyboardType="numeric"
        />
      </View>
      <View style={styles.textContainer}>
        <TextInput
          style={styles.textStyle}
          maxLength={50}
          onChangeText={recipeHanlder}
          placeholder="필요 재료"
        />
      </View>

      {/* LinearGradient 색상 100% + 100% 를 30%로 어떻게? */}
      <LinearGradient
        colors={["rgba(106, 6, 167, 1)", "rgba(252, 26, 66, 1)"]}
        style={styles.button}
      >
        <Pressable onPress={upLoad}>
          <Text style={{ color: "#FFFFFF" }}>작성 완료</Text>
        </Pressable>
      </LinearGradient>
    </ScrollView>
  );
}

export default WriteCocktail;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  alignContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    width: 300,
    height: 300,
    elevation: 4,
    borderRadius: 50,
    marginVertical: 15,
    overflow: "hidden", // 이미지의 사각형 모서리를 숨김
  },
  image: {
    width: "100%", // %값을 설정한 요소의 컨테이너에 비례함
    height: "100%",
    backgroundColor : "#FFFFFF"
  },
  textContainer: {
    marginHorizontal: 20,
    marginVertical: 15,
    paddingBottom: 5,
    borderBottomColor: "#808080",
    borderBottomWidth: 0.5,
  },
  textStyle: {
    fontSize: 15,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 130,
    marginVertical: 30,
    borderRadius: 20,
    padding: 16,
  },
  // disabledButton: {
  //   alignItems: "center",
  //   justifyContent: "center",
  //   marginHorizontal: 130,
  //   marginVertical: 30,
  //   borderRadius: 20,
  //   padding: 16,
  //   color : '(217, 217, 217, 0.6)'
  // }
});