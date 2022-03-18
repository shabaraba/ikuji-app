import React from 'react';
import { Card, Text } from 'react-native-elements';
import { StyleSheet } from 'react-native';

export default () => {
  return (
    <Card containerStyle={{ marginTop: 15, width: '80%' }}>
      <Card.Title>栄養</Card.Title>
      <Card.Divider />
      <Text style={styles.fonts} h1>
        h1 Heading
      </Text>
      <Text style={styles.fonts} h2>
        h2 Heading
      </Text>
      <Text style={styles.fonts} h3>
        h3 Heading
      </Text>
      <Text style={styles.fonts} h4>
        h4 Heading
      </Text>
      <Text style={styles.fonts}>Normal Text</Text>
    </Card>
  )
}

const styles = StyleSheet.create({
  fonts: {
    marginBottom: 8,
  },
});
