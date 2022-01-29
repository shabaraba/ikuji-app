import React from 'react';
import { View, Text, StyleSheet, FlatList, ListRenderItem, ListRenderItemInfo } from 'react-native';

//リスト用データ（実際にはAPIから取得することになるかと）
const list = [
    { id: 1, name: 'user1', email: 'user1@test.com', memo: 'memo1' },
    { id: 2, name: 'user2', email: 'user2@test.com', memo: 'memo2' },
    { id: 3, name: 'user3', email: 'user3@test.com', memo: 'memo3' },
    { id: 4, name: 'user4', email: 'user4@test.com', memo: 'memo4' },
    { id: 5, name: 'user5', email: 'user5@test.com', memo: 'memo5' },
]

export default function Memory() {
    return (
        <>
            <Text>test</Text>
        </>
    );
}
