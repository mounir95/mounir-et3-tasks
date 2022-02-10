import React from 'react';
import type {Node} from 'react';
import {View, FlatList, SafeAreaView} from 'react-native';
import FirstRow from './firstexcelrow';
import Rows from './rows';
import {days} from '../constants/UseContext';
import {ObjectArray} from '../../App';

const ExcelRows: () => Node = () => {
  let arrayofobjects = ObjectArray._currentValue;
  console.log('//////////////////////////////////////////////////////////');
  console.log(arrayofobjects);
  console.log('//////////////////////////////////////////////////////////');
  return (
    <SafeAreaView style={{flex: 1, marginTop: 22}}>
      <FlatList
        horizontal={true}
        data={days}
        renderItem={({index}) => (
          <View>
            <FirstRow index={index} />
            {arrayofobjects.map(e => {
              if (e.Mycomment) {
                return (
                  <View style={{flexDirection: 'row'}}>
                    <Rows objectval={e} index={index} />
                  </View>
                );
              }
            })}
          </View>
        )}
        keyExtractor={item => item.id}
        extraData={days}
      />
    </SafeAreaView>
  );
};

export default ExcelRows;
