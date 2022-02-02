import React, {useState, useEffect} from 'react';
import { StyleSheet, FlatList, ListRenderItem, Button } from 'react-native';
import {Calendar,  CalendarProps} from 'react-native-calendars';

import { format } from 'date-fns';

import DummyData from '../test/dummy_data.json';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

interface MemoryHead {
    id: number
    title: string
    date: Date
}

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
        <View style={styles.container}>
            <View>
                <Text>{item.title}</Text>
                <Button
                  title="press me"
                  onPress = {() => navigation.navigate('MemoryScreen')} />
            </View>
        </View>
    );

    return(
        <View>
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
});

