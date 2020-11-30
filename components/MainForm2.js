//<script src="http://localhost:8097" />;

import React, {useState, useRef} from 'react';
import {View, TextInput, Button, Text} from 'react-native';
import {head} from '../styles/AppStyles';
import useFormValidation from '../common/useFormValidation';
import {getFieldErrors, ClientErrors} from '../common/utils';
//https://nikgrozev.com/2019/04/07/reacts-usecallback-and-usememo-hooks-by-example/
function MainForm2() {
  const input1Ref = useRef(null);
  const input2Ref = useRef(null);

  //isModified only matters for the field that is 'required'
  //for field that is not required, it is set to true during initial mounting
  const [input1Error, setInput1Error] = useState('');
  const [input1Modified, setInput1Modified] = useState(false);
  const [input1Value, setInput1Value] = useState({value: ''});

  const [input2Error, setInput2Error] = useState('');
  const [input2Modified, setInput2Modified] = useState(false);
  const [input2Value, setInput2Value] = useState('');
  const {handleOnSubmit, isSubmitting} = useFormValidation([
    input1Value,
    input2Value,
  ]);

  const _input1ValidationRules = {
    required: true,
    minLength: 2,
    pattern: '[a-zA-Z0-9_]+$',
    maxLength: 15,
  };

  const _input2ValidationRules = {
    required: false,
    minLength: 2,
    pattern: null,
    maxLength: 15,
  };

 
  /** 
  const input1HandleOnKeyPress = useCallback(() => {
    input1Ref.current.focus();
  }, []);
  const input2HandleOnKeyPress = useCallback(() => {
    input2Ref.current.focus();
  }, []);
  **/

  const input1HandleOnChange = (text) => {
    setInput1Value({value: text});
    //setInput2Modified(true);
    //setInput1Error(getFieldErrors(input1Value, _validationRules.input1));
  };

  const input1HandleOnEndEdit = () => {
    setInput1Value(input1Value);
    input2Ref.current.focus();
    //setInput2Modified(true);
    setInput1Error(_getFieldErrors(input1Value, _input1ValidationRules));
  };

  const input2HandleOnChange = (text) => {
    setInput2Value(text);
    //setInput2Modified(true);
    //setInput2Error(getFieldErrors(input2Value, _validationRules.input2));
  };

  const input2HandleOnEndEdit = () => {
    setInput2Value(input2Value);
    input1Ref.current.focus();
    //setInput2Modified(true);
    setInput2Error(_getFieldErrors(input2Value, _input2ValidationRules));
  };

  const input1HandleOnBlur = () => {
    //setInput1Value(text);
    input2Ref.current.focus();
    //setInput1Error(getFieldErrors(input1Value, _validationRules.input1));
  };

  /**
  const input2HandleOnFocus = useCallback(() => {
    //not required field as modified by default
    setInput2Modified(
      !_validationRules.input2.required || !!input2Value || !!input2Error,
    );
    //setInput2Error(getFieldErrors(input2Value, _validationRules.input2));
  }, [_validationRules.input2, input2Error, input2Value]);
**/
  const input2HandleOnBlur = () => {
    //setInput2Value(input2Value);
    input1Ref.current.focus();
    //setInput2Error(getFieldErrors(input1Value, _validationRules.input1));
  };

  return (
    <View style={head.column}>
      <View removeClippedSubviews={true}>
        <TextInput
          contextMenuHidden={true}
          id="input1"
          name="input1"
          key="input1"
          style={head.input}
          value={input1Value}
          returnKeyType={'next'}
          //placeholder="attribute1"
          onTextChange={(text) => input1HandleOnChange(text)}
          //onEndEditing={}
          //onBLur={() => input1HandleOnBlur()}
          //onFocus={ () => (!_validationRules.input1.required || !!input1Value || !!input1Error) && }
          //onKeyPress={() => input1HandleOnKeyPress()}
          autoFocus
          editable
          required
          minLength={2}
          maxLength={10}
          ref={input1Ref}
          underlineColorAndroid="transparent"
        />
      </View>
      <Text>{input1Error > 0 && input1Error}</Text>
      <View removeClippedSubviews={true}>
        <TextInput
          contextMenuHidden={true}
          id="input2"
          name="input2"
          key="input2"
          style={head.input}
          value={input2Value}
          returnKeyType={'next'}
          //placeholder="attribute2"
          onTextChange={(text) => setInput2Value(text)}
          //onEndEditing={() => input2HandleOnEndEdit()}
          //onBlur={() => input2HandleOnBlur()}
          //onFocus={input2HandleOnFocus}
          //onKeyPress={input2HandleOnKeyPress}
          editable
          minLength={2}
          maxLength={10}
          ref={input2Ref}
          underlineColorAndroid="transparent"
        />
      </View>
      <Text>{input2Error.length > 0 && input2Error}</Text>
      <View style={head.button}>
        <Button
          onPress={handleOnSubmit}
          /**
          disabled={
            !input1Modified ||
            !input2Modified ||
            input1Error ||
            input2Error ||
            isSubmitting
          } */
          title="Submit"
        />
      </View>
    </View>
  );
}
export default MainForm2;
