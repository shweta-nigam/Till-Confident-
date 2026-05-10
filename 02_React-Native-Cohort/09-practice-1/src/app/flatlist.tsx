import { View, Text, FlatList } from 'react-native'
import React from 'react'

const flatList = () => {

    const users = [
        { id: "1", name: "ALice", role: "Developer"},
        { id: "2", name: "Bob", role: "Developer"},
        { id: "3", name: "ry", role: "t"},
        { id: "4", name: "ty", role: "Devrtloper"},
        { id: "5", name: "fh", role: "fg"},
    ]
  return (
   <FlatList
   data={users}
   keyExtractor={(item)=> item.id}
   renderItem={({item})=> <Text>{item.name}</Text>}
   contentContainerStyle={{padding:16}}
   ItemSeparatorComponent={()=>(
    <View style={{height:1, backgroundColor:"black"}}>

    </View>
   )}
   />
  )
}

export default flatList


// diff btw flatList and scrollView
// flatList -- optimized   
// sibling of flatList is ??
// scrollView  -- 