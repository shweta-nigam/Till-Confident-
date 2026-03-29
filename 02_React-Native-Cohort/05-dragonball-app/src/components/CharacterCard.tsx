import React from 'react';
import { View, Text } from 'react-native';

export default function CharacterCard({ character }: any) {
  return (
    <View>
      <Text>{character?.name}</Text>
    </View>
  );
}