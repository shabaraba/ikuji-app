import React, {useState} from 'react';
import { StyleSheet } from 'react-native';
import {Calendar, CalendarList, Agenda, CalendarProps} from 'react-native-calendars';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function TabThreeScreen() {
    const [selected, setSelected] = useState('2022-01-01');

    const vacation = {key: 'vacation', color: 'red', selectedDotColor: 'blue'};
    const massage = {key: 'massage', color: 'blue', selectedDotColor: 'blue'};
    const workout = {key: 'workout', color: 'green'};

    const onDayPress: CalendarProps['onDayPress'] = day => {
        setSelected(day.dateString);
      };
    return(
        <Calendar
            monthFormat={'yyyy年 MM月'}
            markingType={'multi-dot'}
            onDayPress={onDayPress}
            markedDates={{
                [selected]: {
                  selected: true,
                  disableTouchEvent: true,
                  selectedColor: 'orange',
                  selectedTextColor: 'red'
                }
            }}
        />
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
