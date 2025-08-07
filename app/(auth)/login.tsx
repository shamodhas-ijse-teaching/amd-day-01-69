import {
  View,
  Text,
  TextInput,
  Image,
  Pressable,
  TouchableOpacity
} from "react-native"
import React, { useState } from "react"
import { useRouter } from "expo-router"
import { useAuth } from "@/context/AuthContext"

const Login = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  // const { isUser, login, logout } = useContext(AuthContext)
  const { login } = useAuth()

  const router = useRouter()

  const handleLogin = () => {
    if (username === "admin" && password === "1234") {
      login()
      router.replace("/")
    }
  }

  return (
    <View className="flex-1 w-full justify-center align-items-center bg-white px-4">
      <TextInput
        placeholder="username"
        placeholderTextColor="#9ca3af"
        className="w-full border border-gray-300 rounded-md p-3 mb-4"
        value={username}
        // onChange={(e) => setUsername(e.target.value)}
        onChangeText={setUsername}
      />
      <TextInput
        placeholder="password"
        placeholderTextColor="#9ca3af"
        className="w-full border border-gray-300 rounded-md p-3 mb-4"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      {/* <TouchableOpacity></TouchableOpacity> */}
      <Pressable
        className="bg-blue-600 px-6 py-3 rounded-md"
        onPress={handleLogin}
      >
        <Text className="text-white font-semibold">Login</Text>
      </Pressable>

      {/* <Image /> */}
    </View>
  )
}

export default Login
