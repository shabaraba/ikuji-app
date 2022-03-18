import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, ActivityIndicator, Image, ScrollView } from 'react-native';
import { Header, HeaderProps, Card, ListItem, Button, Text } from 'react-native-elements'

import CommentCard from '../components/memories/CommentCard';
import MenuCard from '../components/memories/MenuCard';
import NutritionCard from '../components/memories/NutritionCard';
import EditScreenInfo from '../components/EditScreenInfo';
import { View } from '../components/Themed';
import type { MemoryHead } from '../entities/Memories';
import { format } from 'date-fns';

export default function MemoryScreen({route}: any) {
  const newMemory = () => {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>new!</Text>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <EditScreenInfo path="/screens/ModalScreen.tsx" />

        {/* Use a light status bar on iOS to account for the black space above the modal */}
        <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
      </View>
    );
  }

  const showMemory = (memoryHead: MemoryHead) => {
    return (
      <ScrollView nestedScrollEnabled={true}>
        <View style={styles.container}>
          <Text style={styles.title}>{format(memoryHead.date, 'yyyy-MM-dd')}</Text>
          <Text style={styles.title}>{memoryHead.title}</Text>
          <Image
            source={{ uri: 'https://placehold.jp/600x400.png' }}
            style={styles.item}
          />
          <MenuCard />
          <CommentCard />
          {//<NutritionCard />
          }
        </View>
      </ScrollView>
    );
  }

  const params = route.params;
  if (params === null || params === undefined) {
    return newMemory();
  } else {
    return showMemory(params);
  }
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
  list: {
    width: '80%',
    backgroundColor: '#000',
  },
  item: {
    resizeMode: 'contain',
    width: '80%',
    height: 300,
  },
  fonts: {
    marginBottom: 8,
  },
});
