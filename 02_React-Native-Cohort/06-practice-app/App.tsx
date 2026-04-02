import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import StackNavigator from './navigation/navigator/StackNavigation'
import MyTabs from './navigation/navigator/TabNavigator'

const App = () => {
  return (
    <NavigationContainer>
      {/* <StackNavigator /> */}
      <MyTabs />
      </NavigationContainer>
  )
}

// search about drawer navigation - h.w. points - spend 1hr 
export default App

const styles = StyleSheet.create({})