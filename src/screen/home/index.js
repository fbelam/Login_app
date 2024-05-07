import React from 'react';
import { Text, View } from 'react-native';

import { styles } from './aa.js'

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        INDM
      </Text>
      <Text>
        Teste
      </Text>
    </View>
  );
}