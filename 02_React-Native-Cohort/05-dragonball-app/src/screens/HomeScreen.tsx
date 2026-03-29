import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { getCharacters } from '../services/api';

export default function HomeScreen() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getCharacters();

        console.log('FULL API RESPONSE:', data);

        setCharacters(data.items || data); // fallback
      } catch (error) {
        console.log('ERROR:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <View>
      <Text>Characters:</Text>

      {characters.map((char: any) => {
        console.log('CHAR:', char);
        return <Text key={char.id}>{char.name}</Text>;
      })}
    </View>
  );
}