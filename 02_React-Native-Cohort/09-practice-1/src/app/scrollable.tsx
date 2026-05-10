import { View, Text, StyleSheet, ScrollView, Button, Switch } from 'react-native'
import React, { useState }  from 'react'

export default function scrollable() {
    const [isDarkMode, setIsDarkMode] = useState("black")

    const items =  Array.from({length: 20}, (_,i) => `Item ${(i + 1)}`)

  return (
    <View>

<ScrollView style={{flex:1, backgroundColor: "red"}} contentContainerStyle={{

}}>
    {items.map((item,i)=>(
        <View style={{

        }}>

            <Text key={i}>{item}</Text>
        </View>
    ))}
    
    <Button title="hello"  // this Button does not give much customization
    color={"green"}
    onPress={()=> alert("heelllo")}
    />   

    <Switch 
    value={isDarkMode}
    onValueChange={setIsDarkMode}
    trackColor={{false: "#ddd", true: "6c63ff"}}
    thumbColor={"yellow"}
    >


    </Switch>


</ScrollView>

    </View>
  )
}

// note:
//1. ScrollView -- not good gor big lists