import { useState } from "react"
import {View, Text, Image, TextInput, Pressable} from "react-native"


export default function HomeScreen(){

  const [name, setName] = useState("")
  return (
  <View>
    <Text numberOfLines={3}> Hello World </Text>
    {/* image from internet */}
    <Image 
    source={{uri:"address"}} 
    width={300}
    height={200}
    />

    {/* local image */}
    <Image 
    source={require("@/assets/images")}
    style={{
      height:100,
      width:100,
    }}
    blurRadius={30}
    />
    <TextInput 
    value={name}
    placeholder="enter your name" 
    onChangeText={setName}  // not onChange --> only stick to onChangeText
    placeholderTextColor={"blue"}
    style={{
    borderWidth:1,
    borderColor:"red",
    marginTop: 10,
    fontSize:24
    }}
    />



    <Pressable onPress={()=> alert("Button pressed")} 
// onLongPress={}
// onPressIn={}
// onPressOut={}
      style={
        ({pressed})=>({
          backgroundColor:pressed ? "#4a42d4" : "#6c63ff",
        })
      }
      hitSlop={{
        top:10,
        bottom:10,
        left:20,
        right:20
      }

      }
      >
        {({pressed}) => (pressed ? <Text>"Pressing..." </Text> :<Text>press</Text> )}

    
    </Pressable>
  </View>
  )
}


// numberOfLines --- give specific line and then ...  

