import { View, Text, Pressable } from "react-native"
import React from "react"
import { Slot, usePathname, useRouter, useSegments } from "expo-router"
import { SafeAreaView } from "react-native-safe-area-context"
import FooterNav from "@/components/FooterNav"
import { AuthProvider, useAuth } from "@/context/AuthContext"
import "./../global.css"

const Layout = () => {
  const pathname = usePathname() // "/project"

  const hideFooter = ["/login", "/signup"].includes(pathname)

  return (
    <AuthProvider>
      <SafeAreaView className="flex-1">
        <Slot />
        {/* Outlet */}
        {hideFooter ? null : <FooterNav />}
      </SafeAreaView>
    </AuthProvider>
  )
}

export default Layout
