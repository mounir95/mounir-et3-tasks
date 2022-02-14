import React, {FC} from 'react';
import {View, FlatList, SafeAreaView} from 'react-native';
import FirstRow from './FirstExcelRow';
import Rows from './Rows';
import {days} from '../constants/UseContext';
import {ObjectArray} from '../../App';

type Props = {
  updateiconid: number;
  onUpdate: Function;
  onDelete: Function;
};

const ExcelRows: FC<Props> = ({updateiconid, onUpdate, onDelete}) => {
  let arrayofobjects = ObjectArray._currentValue;

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
                    <Rows
                      updatedid={updateiconid}
                      onUpdateSub={(objid: number) => onUpdate(objid)}
                      onDeletSub={(objid: number) => onDelete(objid)}
                      objectval={e}
                      index={index}
                    />
                  </View>
                );
              }
            })}
          </View>
        )}
        keyExtractor={item => item.name}
        extraData={days}
      />
    </SafeAreaView>
  );
};

export default ExcelRows;
