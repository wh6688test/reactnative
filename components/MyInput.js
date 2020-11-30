import React from 'react';
import {TextInput, View} from 'react-native';

const MyInput = ({style1}, fieldObjects1) => {
  return (
    <View>
      {fieldObjects1.map((fieldObject, i) => (
        <TextInput
          id={fieldObject.id + i}
          key={fieldObject.key + i}
          name={fieldObject.name + i}
          value={fieldObject.value}
          onChangeText={fieldObject.handleOnChange}
          onKeyPress={fieldObject.handleOnKeyPress}
          placeholder={fieldObject.placeholder}
          style={style1}
        />
      ))}
    </View>
  );
};
export default MyInput;
