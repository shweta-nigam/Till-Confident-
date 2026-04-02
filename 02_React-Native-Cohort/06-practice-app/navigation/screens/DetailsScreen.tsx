import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const DetailsScreen = ({route,navigation}:any) => {
  return (
    <View>
      {/* <Text>Id: {route.params.id }</Text> */}
      <Text>Id: {route?.params?.id }</Text>          // safe fallback
       <Button title=" go back" onPress={() => navigation.goBack()} />        
    </View>
  )
}

export default DetailsScreen

const styles = StyleSheet.create({})