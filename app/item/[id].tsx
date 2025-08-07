import { View, Text } from "react-native"
import React from "react"
import { useLocalSearchParams } from "expo-router"

const SelectedItem = () => {
  const params = useLocalSearchParams()
  console.log(params?.id)

  return (
    <View className="flex-1 w-full justify-center align-items-center">
      <Text className="text-4xl text-center">SelectedItem</Text>
      <Text className="text-4xl text-center">{params?.id}</Text>
    </View>
  )
}

export default SelectedItem
