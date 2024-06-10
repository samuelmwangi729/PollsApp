import { View, Text,SafeAreaView,StatusBar,Image, Touchable } from 'react-native'
import React from 'react'
import AppBar from '../Components/AppBar';
import ImageBanner from "../assets/images/banner.png";
import { TouchableOpacity } from 'react-native-gesture-handler';
const LandingScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{paddingTop:StatusBar.currentHeight}}>
      <AppBar/>
      <View className="bg-[#FF6600] h-screen flex flex-col justify-center items-center space-y-20">
        <Text className="text-6xl text-white font-extrabold underline">
          VOTAS APP
        </Text>
        <Image source={ImageBanner} resizeMode='cover' className="w-full h-48" />
        <View className="flex mt-16 w-full">
          <TouchableOpacity className="w-[90%] bg-white m-auto p-3 rounded-md">
            <Text className="text-center text-xl font-bold">
              Learn More 
            </Text>
          </TouchableOpacity>
          <TouchableOpacity className="w-[90%] bg-white m-auto p-3 mt-3 rounded-md" onPress={()=>navigation.navigate('LoginScreen')}>
          <Text className="text-center text-xl font-bold">
              Get Started
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default LandingScreen