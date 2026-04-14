import { useState } from "react";
import { View, Text, Image } from "react-native";
import Tabs from "../components/Header/Tabs";

export default function HomeScreen() {

    const [activeTab, setActiveTab] = useState("day")

  return (
    <View>
      {/* header */}
      <View>
        {/* profile pic */}
         <Image 
          source = {{}}
          style={{}}
          />
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
      <View></View>

      {/* data on kal, km and m/hr */}

      <View>
        {/* kal */}
        <View>
          <Image 
          source = {{}}
          style={{}}
          />
          <Text> Kal</Text>
        </View>

        {/* distance */}
        <View>
        <Image 
          source = {{}}
          style={{}}
          />
          <Text> m/km</Text>
        </View>

        {/* time */}
        <View>
           <Image 
          source = {{}}
          style={{}}
          />
          <Text> hr</Text>
        </View>
      </View>
    </View>
  );
}
