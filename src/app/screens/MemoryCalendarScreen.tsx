import React, {useState, useEffect} from 'react';
import { StyleSheet, FlatList, ListRenderItem, TouchableOpacity, Text, Image } from 'react-native';
import { ListItem } from 'react-native-elements';

import {Calendar,  CalendarProps} from 'react-native-calendars';

import { format } from 'date-fns';

import DummyData from '../test/dummy_data.json';
import { View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import type { MemoryHead } from '../entities/Memories';

export default function MemoryCalendarScreen({ navigation }: RootTabScreenProps<'MemoryCalendar'>) {
    const [selected, setSelected] = useState<Date>(new Date('2022-01-01'));
    const [memoryList, setMemoryList] = useState<MemoryHead[]>();

    useEffect(() => {
        // console.log(`tap on ${format(selected, 'yyyy-MM-dd')}`);
        const filteredArray = DummyData.filter(
            data => data.date == format(selected, 'yyyy-MM-dd')
        );
        setMemoryList(filteredArray.map(data => {
            return {
                id: data.id,
                title: data.title,
                date: new Date(data.date)
            }
        }));
    }, [selected]);

    const onDayPress: CalendarProps['onDayPress'] = day => {
        setSelected(new Date(day.dateString));
      };

    const renderItem: ListRenderItem<MemoryHead> = ({ item }) => (
        <ListItem 
          key={item.id}
          onPress = {() => navigation.navigate('MemoryScreen', item)}
          bottomDivider
        >
          <ListItem.Content>
            <ListItem.Title>{item.title}</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
    );

    return(
      <View style={{flex: 1}}>
        <Calendar
          monthFormat={'yyyy年 MM月'}
          markingType={'multi-dot'}
          onDayPress={onDayPress}
          markedDates={{
            [format(selected, 'yyyy-MM-dd')]: {
              selected: true,
              disableTouchEvent: true,
              selectedColor: 'orange',
              selectedTextColor: 'red'
            }
          }}
        />
        <FlatList 
          data={memoryList}
          renderItem={renderItem}
          keyExtractor={memoryHead => `${memoryHead.id}`}
          extraData={memoryList}
        />
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.touchableOpacityStyle}
          onPress = {() => navigation.navigate('MemoryScreen')}
        >
          <Image
            //We are making FAB using TouchableOpacity with an image
            //We are using online image here
            source={{
              uri:
                'https://raw.githubusercontent.com/AboutReact/sampleresource/master/plus_icon.png',
            }}
            //You can use you project image Example below
            //source={require('./images/float-add-icon.png')}
            style={styles.floatingButtonStyle}
          />
        </TouchableOpacity>
      </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  touchableOpacityStyle: {
    position: 'absolute',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    bottom: 30,
  },
  floatingButtonStyle: {
    resizeMode: 'contain',
    width: 50,
    height: 50,
    //backgroundColor:'black'
  },
});

