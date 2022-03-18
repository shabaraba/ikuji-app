import React, { useState, useEffect } from 'react';
import { ButtonGroup, Card, Text, ListItem, Button, Icon, Overlay, Tab, TabView } from 'react-native-elements';
import { View, StyleSheet, ScrollView, FlatList, ListRenderItem, TouchableOpacity, Image } from 'react-native';

interface Menu {
  id: number,
  name: string,
  amount: number
}
export default () => {
  const [visible, setVisible] = useState(false);
  const [index, setIndex] = React.useState(0);
  const [menuList, setMenuList] = useState([{id: 1, name: 'おかゆ', amount: 10},{id: 2, name: 'かぼちゃ', amount: 5}]);

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  return (
    <Card containerStyle={{ marginTop: 15, width: '80%' }}>
      <Card.Title>メニュー</Card.Title>
      <Card.Divider />
      {menuList.map(menu => 
        <ListItem bottomDivider>
          <Icon name="check" size={20} />
          <ListItem.Content>
            <ListItem.Title>{menu.name}</ListItem.Title>
          </ListItem.Content>
          <ListItem.Input>{menu.amount}</ListItem.Input><Text>g</Text>
        </ListItem>
      )}
      <ListItem
        bottomDivider
        onPress = {toggleOverlay}
      >
        <Icon name="check" size={20} />
        <ListItem.Content />
        <ListItem.Chevron />
      </ListItem>
      <Overlay 
        isVisible={visible}
        onBackdropPress={toggleOverlay}
        overlayStyle={{width: '90%'}}
      >
        <Text style={styles.textPrimary}>Hello!</Text>
        <ButtonGroup
          buttons={['Multiple', 'Select', 'Button', 'Group']}
          selectedIndex={index}
          onPress={(value) => {
            setIndex(value);
          }}
          containerStyle={{ marginBottom: 0 }}
        />
        <View style={{marginLeft: 'auto', marginRight: 'auto', backgroundColor: 'pink', width: '94%'}}>
          {index == 0 &&
            <View>
              <Text>index0</Text>
            </View>
          }
          {index == 1 &&
            <View>
              <Text>index1</Text>
            </View>
          }
          {index == 2 &&
            <View>
              <Text>index2</Text>
            </View>
          }
          {index == 3 &&
            <View>
              <Text>index3</Text>
            </View>
          }
        </View>

      </Overlay>
    </Card>
  )
}

const styles = StyleSheet.create({
  fonts: {
    marginBottom: 8,
  },
  button: {
    margin: 10,
  },
  textPrimary: {
    marginVertical: 20,
    textAlign: 'center',
    fontSize: 20,
  },
  textSecondary: {
    marginBottom: 10,
    textAlign: 'center',
    fontSize: 17,
  },
  tab: {
      width: '80%'
    }
});
