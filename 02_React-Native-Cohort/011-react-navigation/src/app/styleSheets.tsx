
import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { StatusBar } from "expo-status-bar"  // from expo

const styleSheets = () => {
  return (
    <StatusBar >
    <View style={styles.card}>
      <Text style = {styles.title}>styleSheets</Text>

    </View>
    </StatusBar>
  )
}

export default styleSheets


// we write css after export because of better performance - as otherwise styles object will recreate on each render
const styles = StyleSheet.create({
    card:{

        elevation:2    // in android 
    },
    title:{

    },
    subtitle:{

    }

})