import { View, Text , StyleSheet} from 'react-native'
import React from 'react'


const StyleA = StyleSheet.create({text:{Color:"red"}})
const StyleB = StyleSheet.create({text:{fontsize:24, fontWifht:"bold"}})

const flat = StyleSheet.flattern([
    StyleA
])

// flatten style = kinda like a spread operator
// likt tailwind merge

const flatten = () => {
  return (
    <View>
      <Text style={StyleA.text, StyleB.text}>flatten style</Text>
    </View>
  )
}

export default flatten