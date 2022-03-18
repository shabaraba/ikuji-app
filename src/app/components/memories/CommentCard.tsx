import React from 'react';
import { Card } from 'react-native-elements';
import TextArea from '../common/TextArea';

export default () => {
  return (
    <Card containerStyle={{ marginTop: 15, width: '80%' }}>
      <Card.Title>コメント</Card.Title>
      <Card.Divider />
      <TextArea />
    </Card>
  )
}
