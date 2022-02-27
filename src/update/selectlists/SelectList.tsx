import React, {ChangeEvent} from 'react';
import {View, Button} from 'react-native';
import {
  ExcelMobx,
  globalStateObject,
  TPrObject,
  UpdateFormMobx,
} from '../../constants/UseContext';
import SelectInput from './SelectInput';
import filter from 'lodash/filter';
import globalObj from '../../constants/ObjectStore';
import {observer} from 'mobx-react';

const InputSelectList = observer(() => {
  const updatedarray: any = filter(globalObj.arrayofobjects, (c: TPrObject) => {
    if (c.Myid === ExcelMobx.id) {
      return c;
    }
  })[0];

  const outputEvent = (
    event: React.ChangeEvent<HTMLSelectElement>,
    parentData: string,
  ): void => {
    if (parentData === 'se_list') {
      UpdateFormMobx.objectval.Myselist = event.toString();
      updatedarray.Myselist = event.toString();
    } else if (parentData === 'platform') {
      UpdateFormMobx.objectval.Myplatform = event.toString();
      updatedarray.Myplatform = event.toString();
    }
  };

  return (
    <View>
      <View style={{marginBottom: 20, marginTop: 10}}>
        <SelectInput
          key="firstrow"
          listname={'SE List'}
          arrayval={globalStateObject.SEList}
          choosedval={updatedarray.Myselist}
          onChoose={(event: ChangeEvent<HTMLSelectElement>) =>
            outputEvent(event, 'se_list')
          }
        />
      </View>
      <View style={{marginBottom: 20, marginTop: 10}}>
        <SelectInput
          key="secondrow"
          listname={'Platform'}
          arrayval={globalStateObject.Platform}
          choosedval={updatedarray.Myplatform}
          onChoose={(event: ChangeEvent<HTMLSelectElement>) =>
            outputEvent(event, 'platform')
          }
        />
      </View>
      <View style={{marginTop: 25}}>
        <Button title={'Next'} onPress={() => UpdateFormMobx.selectList()} />
      </View>
    </View>
  );
});

export default InputSelectList;
