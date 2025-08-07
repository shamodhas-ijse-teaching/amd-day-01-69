import { View, Text, Pressable } from "react-native"
import React from "react"
import { Slot, usePathname, useRouter, useSegments } from "expo-router"
import { SafeAreaView } from "react-native-safe-area-context"
import FooterNav from "@/components/FooterNav"

const Layout = () => {
  const pathname = usePathname() // "/project"

  const hideFooter = ["/login", "/signup"].includes(pathname)

  return (
    <SafeAreaView className="flex-1">
      <Slot />
      {/* Outlet */}
      {hideFooter ? null : <FooterNav />}
    </SafeAreaView>
  )
}

export default Layout
