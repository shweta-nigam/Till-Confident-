import { View, Text, Button, StyleSheet} from "react-native";
import {useState} from "react";

export default function App(){
    const [steps, setSteps] = useState(0);
    
    const addSteps = () =>{
        setSteps(steps + 1)
    }

    const resetSteps = () => {
        setSteps(0)
    }

    return (
        <View >

        </View>
    )

}



