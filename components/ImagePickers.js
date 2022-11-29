import { View, Button, Alert, Image, StyleSheet } from "react-native";
import {
  launchImageLibraryAsync,
  launchCameraAsync,
  useCameraPermissions,
  PermissionStatus,
} from "expo-image-picker";
import { useState } from "react";
import ImageUpLoadButton from "./ImageUpLoadButton";

function ImagePickers() {
  const [pickedImage, setPickedImage] = useState("");

  const [cameraPermissionInformation, requestPermission] =
    useCameraPermissions();

  async function verifyPermissions() {
    if (cameraPermissionInformation.status === PermissionStatus.UNDETERMINED) {
      const permissionResponse = await requestPermission();

      return permissionResponse.granted;
    }

    if (cameraPermissionInformation.status === PermissionStatus.DENIED) {
      Alert.alert(
        "권한이 부족합니다!",
        "이 앱을 사용하려면 카메라 권한이 필요합니다!"
      );
      return false;
    }

    return true;
  }

  // 업로드 하는 경우
  async function upLoadImageHandler() {
    const image = await launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.8,
    }); // 프로미스 반환
    // console.log(image.asset[0]);
    setPickedImage(image.uri);
    console.log(image);
  }

  // 직접 찍는 경우
  async function takeImageHandler() {
    const hasPermission = await verifyPermissions(); // 권한을 요청하거나 현재 권한 상태를 받음

    if (!hasPermission) {
      return;
    }

    const image = await launchCameraAsync({
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.8,
    }); // 프로미스 반환
    // console.log(image.asset[0]);
    // setPickedImage(image.uri); 이거 이제 지원 안함
    setPickedImage(image.uri);
    console.log(image);
  }

  let imagePreview = (
    <Image
      style={styles.image}
      source={require("../assets/images/image.png")}
    />
  );
  // sample1.jpg (예시)

  if (pickedImage) {
    imagePreview = <Image style={styles.image} source={{ uri: pickedImage }} />;
  }

  return (
    <View>
      <View style={styles.imageContainer}>{imagePreview}</View>
      <ImageUpLoadButton icon="photo" onPress={upLoadImageHandler}>칵테일 사진 업로드하기</ImageUpLoadButton>
      <ImageUpLoadButton icon="camera" onPress={takeImageHandler}>칵테일 촬영하기</ImageUpLoadButton>
    </View>
  );
}

export default ImagePickers;

const styles = StyleSheet.create({
  imageContainer: {
    width: 300,
    height: 300,
    elevation: 4,
    borderRadius: 50,
    marginVertical: 30,
    overflow: "hidden", // 이미지의 사각형 모서리를 숨김
  },
  image: {
    width: "100%", // %값을 설정한 요소의 컨테이너에 비례함
    height: "100%",
    backgroundColor: "#FFFFFF",
  },
});
