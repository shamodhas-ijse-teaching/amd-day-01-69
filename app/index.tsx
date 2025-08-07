import { View, Text, Image } from "react-native"
import React from "react"
import "./../global.css"
import { Link } from "expo-router"

// all element (tag) by default display flex
// web - flex direction default row
// React native mobile - flex direction column
// not work vh , dhv, use flex:1

const Index = () => {
  return (
    <View
      style={{
        flex: 1,
        width: "100%",
        // backgroundColor: "#e74c3c",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Link
        href={"/item/1234"}
        className="text-2xl bg-green-400 text-white p-4"
      >
        Select item
      </Link>


      <Link
        href={"/test/hello"}
        className="text-2xl bg-green-400 text-white p-4"
      >
        Go test hello
      </Link>

      <Link href={"/login"} className="text-2xl bg-green-400 text-white p-4">
        Go to login
      </Link>

      <Link className="text-2xl" href={"/project"}>
        Project
      </Link>
      <Link className="text-2xl" href={"/user"}>
        User
      </Link>
      <Text className="text-red-700 text-4xl">This is index</Text>
      {/* View - div */}
      {/* hello - teaxt must wrap using <Text> */}
      {/* p - Text */}
    </View>
  )
}

// React
// raffce

// React native
// rnfe - use this
// rnfes

export default Index
