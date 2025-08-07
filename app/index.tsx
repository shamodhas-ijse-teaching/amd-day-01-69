import { View, Text, ActivityIndicatorComponent } from "react-native"
import React, { useEffect } from "react"
import { useAuth } from "@/context/AuthContext"
import { Redirect, useRouter } from "expo-router"

const Index = () => {
  const { isUser } = useAuth()
  // const router = useRouter()

  // useEffect(() => {
  //   if (isUser) {
  //     router.replace("/home")
  //   } else {
  //     router.replace("/login")
  //   }
  // }, [isUser])

  return <Redirect href={isUser ? "/home" : "/login"} />
}

export default Index
