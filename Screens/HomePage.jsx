import { View, Text, SafeAreaView, StatusBar } from 'react-native'
import React from 'react'

const HomePage = () => {
  return (
    <SafeAreaView style={{paddingTop:StatusBar.currentHeight}}>
        <View>
            <Text>
                Dashboard here
            </Text>
        </View>
    </SafeAreaView>
  )
}

export default HomePage