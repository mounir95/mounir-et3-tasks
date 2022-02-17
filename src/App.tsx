import React, {useState} from 'react';
import Excel from './excels/Excel';
import AddButton from './AddButton';
import InputForm from './input/InputForm';
import UpdateForm from './input/UpdateForm';
import {ScrollView, View} from 'react-native';
import {Context} from 'vm';
import _ from 'lodash';

export let ObjectArray: Context = React.createContext<object[]>([{}]);
export let FilteredObjectArray: Context = React.createContext<object[]>([{}]);

const App = () => {
  const [
    {id, addbuttontrue, inputform, updatefalse, filterfalse, addtext},
    setState,
  ] = useState({
    id: -1,
    addbuttontrue: true,
    updatefalse: false,
    inputform: false,
    filterfalse: false,
    addtext: 'ADD',
  });

  const resetState = () => {
    setState(
      val =>
        (val = {
          id: -1,
          addbuttontrue: true,
          updatefalse: false,
          inputform: false,
          filterfalse: false,
          addtext: 'ADD',
        }),
    );
  };

  const filterResetState = () => {
    setState(
      val =>
        (val = {
          id: -1,
          addbuttontrue: addbuttontrue,
          updatefalse: false,
          inputform: false,
          filterfalse: filterfalse,
          addtext: 'ADD',
        }),
    );
  };

  const setAllChanges = () => {
    ObjectArray._currentValue2 = ObjectArray._currentValue;
    ObjectArray = React.createContext<object[]>([...ObjectArray._currentValue]);
    FilteredObjectArray._currentValue2 = FilteredObjectArray._currentValue;
    FilteredObjectArray = React.createContext<object[]>([
      ...FilteredObjectArray._currentValue,
    ]);
  };

  const onButtonPress = () => {
    if (addtext === 'Close') {
      resetState();
    } else {
      if (ObjectArray._currentValue.length >= 2) {
        ObjectArray._currentValue = _.orderBy(
          ObjectArray._currentValue,
          (obj: object) => {
            obj.Myid, ['asc'];
          },
        );
        ObjectArray._currentValue.unshift({});
        ObjectArray._currentValue.pop();
        setAllChanges();
      }
      setState(
        val =>
          (val = {
            id: -1,
            addbuttontrue: false,
            updatefalse: false,
            inputform: true,
            filterfalse: false,
            addtext: 'Close',
          }),
      );
    }
  };

  const onDeletFun = (objid: number) => {
    ObjectArray._currentValue = _.filter(
      ObjectArray._currentValue,
      (c: Context) => {
        return c.Myid !== objid;
      },
    );
    setAllChanges();
    resetState();
  };

  const onUpdateFun = (objid: number) => {
    setState(
      val =>
        (val = {
          id: objid,
          addbuttontrue: false,
          updatefalse: true,
          inputform: false,
          filterfalse: false,
          addtext: 'ADD',
        }),
    );
  };

  const inputUpdateButton = () => {
    resetState();
    setAllChanges();
  };

  const inputAddButton = () => {
    resetState();
    ObjectArray = React.createContext<Array<number>>([
      ...ObjectArray._currentValue,
      ObjectArray,
    ]);
  };

  const inputCloseButton = () => {
    resetState();
  };

  const setDateSort = (newobjectarray: object) => {
    ObjectArray._currentValue = newobjectarray;
    setAllChanges();
    resetState();
  };

  const filterPressed = () => {
    FilteredObjectArray = ObjectArray;
    setAllChanges();
    setState(
      val =>
        (val = {
          id: -1,
          addbuttontrue: !addbuttontrue,
          updatefalse: false,
          inputform: false,
          filterfalse: !filterfalse,
          addtext: 'ADD',
        }),
    );
  };

  const changeText = (event: string) => {
    FilteredObjectArray._currentValue = _.filter(
      ObjectArray._currentValue,
      (c: Context) => {
        if (c.hasOwnProperty('Mycomment')) {
          return c.Mycomment.includes(event) === true;
        }
      },
    );
    setAllChanges();
    filterResetState();
  };

  const platfromFilter = (event: React.ChangeEvent) => {
    FilteredObjectArray._currentValue = _.filter(
      ObjectArray._currentValue,
      (c: Context) => {
        if (c.hasOwnProperty('Myplatform')) {
          return c.Myplatform === event;
        }
      },
    );
    setAllChanges();
    filterResetState();
  };

  const seListFilter = (event: React.ChangeEvent) => {
    FilteredObjectArray._currentValue = _.filter(
      ObjectArray._currentValue,
      (c: Context) => {
        if (c.hasOwnProperty('Myse_list')) {
          return c.Myse_list === event;
        }
      },
    );
    setAllChanges();
    filterResetState();
  };
  const statusFilter = (event: React.ChangeEvent) => {
    FilteredObjectArray._currentValue = _.filter(
      ObjectArray._currentValue,
      (c: Context) => {
        if (c.hasOwnProperty('Mystatus_list')) {
          return c.Mystatus_list === event;
        }
      },
    );
    setAllChanges();
    filterResetState();
  };

  return (
    <View style={{flex: 1}}>
      <ScrollView>
        <Excel
          openfilter={filterfalse}
          updateiconid={id}
          filterPress={() => filterPressed()}
          dateSort={(newobjectarray: object) => setDateSort(newobjectarray)}
          onUpdate={(objid: number) => onUpdateFun(objid)}
          onDelete={(objid: number) => onDeletFun(objid)}
          textChanged={(event: string) => changeText(event)}
          FilterByPlatform={(event: React.ChangeEvent) => platfromFilter(event)}
          FilterBySE={(event: React.ChangeEvent) => seListFilter(event)}
          FilterByStatus={(event: React.ChangeEvent) => statusFilter(event)}
        />
        <InputForm
          inptformtrue={inputform}
          inputAdd={() => inputAddButton()}
          inputClose={() => inputCloseButton()}
        />
        <UpdateForm
          inputupdateformtrue={updatefalse}
          updatedid={id}
          inputUpdate={() => inputUpdateButton()}
          inputClose={() => inputCloseButton()}
        />
      </ScrollView>
      <AddButton
        addbuttontrue={addbuttontrue}
        buttontext={addtext}
        buttonPressed={() => onButtonPress()}
      />
    </View>
  );
};

export default App;
