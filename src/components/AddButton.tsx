import React, {FC} from 'react';
import {TouchableOpacity, View, Text} from 'react-native';

type Props = {
  addbuttontrue: Boolean;
  buttonPressed: Function;
  buttontext: string;
};

const AddButton: FC<Props> = ({addbuttontrue, buttonPressed, buttontext}) => {
  const onPressSubmit = () => {
    buttonPressed();
  };

  return (
    <View style={{alignItems: 'center'}}>
      {addbuttontrue && (
        <TouchableOpacity onPress={() => onPressSubmit()}>
          <Text
            style={{
              borderWidth: 2,
              borderRadius: 25,
              padding: 10,
              marginBottom: 10,
              borderColor: '#776677',
              color: '#776677',
              backgroundColor: 'white',
            }}>
            {buttontext}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default AddButton;
