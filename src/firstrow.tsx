import React from 'react';
import type {Node} from 'react';
import {StyleSheet, View, Text, FlatList, SafeAreaView} from 'react-native';

const days = [
  {id: '10', name: 'Date'},
  {id: '1', name: 'SE_List'},
  {id: '2', name: '#'},
  {id: '3', name: 'Platform'},
  {id: '4', name: 'Release Version'},
  {id: '5', name: 'Comment'},
  {id: '6', name: 'PR_Link'},
  {id: '7', name: 'Size'},
  {id: '8', name: 'Difiiculity'},
  {id: '9', name: 'Status List'},
  {id: '11', name: 'Reveiwed By BY'},
  {id: '12', name: 'Reveiwed By AH'},
  {id: '13', name: 'Reveiwed By HT'},
];

const ListItem = ({index}) => {
  return (
    <View style={styles.listItem}>
      <Text style={styles.listText}>{days[index].name}</Text>
    </View>
  );
};

const FirstRow: () => Node = () => {
  return (
    <SafeAreaView style={styles.parentView}>
      <FlatList
        horizontal={true}
        data={days}
        renderItem={({index}) => <ListItem key={index} index={index} />}
        keyExtractor={item => item.id}
        extraData={days}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  parentView: {
    flex: 1,
    marginTop: 22,
  },
  listText: {
    color: 'white',
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
    marginRight: 2,
    marginLeft: 2,
    marginBottom: 10,
    backgroundColor: '#776677',
    padding: 5,
    height: 60,
    borderRadius: 1,
  },
});
export default FirstRow;
