import { useState } from "react";
import { View, Text, Image } from "react-native";
import Tabs from "../components/Header/Tabs";
import { StepCounter } from "../components/StepCircle";

export default function HomeScreen() {

    const [activeTab, setActiveTab] = useState("day")

  return (
    <View>
      {/* header */}
      <View>
        {/* profile pic */}
         {/* <Image 
          source = {{}}
          style={{}}
          /> */}
        <View>

          {/* tabs */}
          <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />



          {/* share icon */}


          <Image 
          source = {{}}
          style={{}}
          />
        </View>
      </View>

      {/* circular progress bar - step counter */}
      <StepCounter />

      {/* data on kal, km and m/hr */}

      <View>
        {/* kal */}
        <View>
          {/* <Image 
          source = {{}}
          style={{}}
          /> */}
          <Text> Kal</Text>
        </View>

        {/* distance */}
        <View>
        {/* <Image 
          source = {{}}
          style={{}}
          /> */}
          <Text> m/km</Text>
        </View>

        {/* time */}
        <View>
           {/* <Image 
          source = {{}}
          style={{}}
          /> */}
          <Text> hr</Text>
        </View>
      </View>
    </View>
  );
}
