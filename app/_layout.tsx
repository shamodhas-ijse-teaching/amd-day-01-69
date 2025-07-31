import { View, Text, SafeAreaView, Pressable } from "react-native"
import React from "react"
import { Slot, useRouter } from "expo-router"

const Layout = () => {
    const router = useRouter()

  return (
    <SafeAreaView className="flex-1">
      <Slot />
      {/* Outlet */}
      <View className="flex-row justify-around border-gray-300 py-2 bg-white">
        <Pressable className="py-1 px-4 rounded-lg" onPress={() => {
            router.push("/")
        }}>
          <Text className="text-2xl">Home</Text>
        </Pressable>
        <Pressable className="py-1 px-4 rounded-lg" onPress={() => {
              router.push("/project")
        }}>
          <Text className="text-2xl">Project</Text>
        </Pressable>
        <Pressable className="py-1 px-4 rounded-lg" onPress={() => {
              router.push("/user")
        }}>
          <Text className="text-2xl">User</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  )
}

export default Layout
