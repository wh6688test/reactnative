///<script src="http://localhost:8097" />;

import React, {useState, useCallback, useEffect, useRef} from 'react';
import {View, TextInput, Button, Text, Image, ScrollView} from 'react-native';
import {head, mydivider, styles, datatable1} from '../styles/AppStyles';
//import useFormValidation from '../common/useFormValidation';
import {ClientErrors, handleApi} from '../common/utils';
import {ErrorPage} from './UserComponents';
//import {DataTable, Card, useTheme} from 'react-native-paper';
import logo1 from '../assets/imgs/reactlogo.png';
import {Table, Row, Rows} from 'react-native-table-component';
//https://nikgrozev.com/2019/04/07/reacts-usecallback-and-usememo-hooks-by-example/

function MainForm1() {
  const [val, setVal] = useState({value: ''});
  const [modified1, setModified] = useState({modified: false});
  const [error1, setError] = useState({error: ''});
  const [formIsValid, setFormValid] = useState({validForm: false});
  const [isSubmitting, setIsSubmitting] = useState({submit: false});

  const [formServiceError, setFormServiceError] = useState('');
  const [formServiceStatus, setFormServiceStatus] = useState(-1);
  const [groupData, setGroupData] = useState([[]]);

  const input1Ref = useRef();
  useEffect(() => {
    setFormValid({
      validForm: !Object.keys(error1).some((key) => error1[key].error !== ''),
    });
  }, [error1, error1.error]);

  const _inputValidationRules = {
    required: true,
    minLength: 3,
    pattern: '^\\S+\\s+\\S+$',
  };
  //input1Ref.current.textContent, or properties
  function handleOnChange1(text) {
    let isModified = !_inputValidationRules.required || text !== '';
    setModified({modified: isModified});
    setVal({value: text});
    let err = '';
    if (
      _inputValidationRules.required &&
      (text.trim() === '' || text.trim().length === 0)
    ) {
      err += ClientErrors.REQUIRED + '\n';
    }
    const patternReg = new RegExp(_inputValidationRules.pattern);
    if (
      _inputValidationRules.pattern &&
      text !== '' &&
      !patternReg.test(text)
    ) {
      err += ClientErrors.PATTERN + '\n';
    }
    if (
      _inputValidationRules.minLength &&
      _inputValidationRules.minLength > 0 &&
      text !== '' &&
      text.length < _inputValidationRules.minLength
    ) {
      err += ClientErrors.MIN + '\n';
    }
    if (
      _inputValidationRules.maxLength &&
      _inputValidationRules.maxLength > 0 &&
      text !== '' &&
      text.length > _inputValidationRules.maxLength
    ) {
      err += ClientErrors.MAX + '\n';
    }
    //let err = requiredErr + patternErr + minErr + maxErr;

    setError({error: err});
  }

  const handleSubmit1 = useCallback(() => {
    //let _inputDataa = val.value.split(' ').map((d) => d.trim());
    //alert(_inputDataa[1]);
    //useEffect(() => {
    //if (isSubmitting.submit) {
    isSubmitting.submit &&
      handleApi(val.value.split(' ').map((d) => d.trim()))
        .then((result) => {
          //let {code, error, data} = {...result};
          let code = result.code;
          let error = result.error;
          let data = result.data;
          code !== -1 && setFormServiceStatus(code);
          setFormServiceError(!!error && error !== '' ? error : '');
          if (data && data.length !== 0) {
            //simplify data passing and reuse
            let groupData1 = data.map((g) =>
              //JSON.stringify({
              [
                g.group_id.trim(),
                g.group_attribute.attr1.trim(),
                g.group_attribute.attr2.trim(),
                g.members ? g.members.length : 0,
              ],
            );
            setGroupData(groupData1);
          } else {
            //alert("no data");
            //alert(error);
            setGroupData([[]]);
          }
        })
        .catch((e) => {
          //will not get here, since service side error is handled as empty server data
          throw 'General Error';
        });
  }, [isSubmitting.submit, val.value]);

  useEffect(() => {
    handleSubmit1();
  }, [handleSubmit1]);

  return (
    <>
      <View style={head.column}>
        <View removeClippedSubviews={true}>
          <TextInput
            contextMenuHidden={true}
            style={head.input}
            placeholder="attr1 attr22"
            onChangeText={(text) => handleOnChange1(text)}
            value={val.value}
            id="input1"
            name="input1"
            ref={input1Ref}
            validation={_inputValidationRules}
            autoFocus
            editable
            underlineColorAndroid="transparent"
          />
        </View>
        <Text style={head.error}>{error1.error}</Text>
        <View style={head.button}>
          <Button
            onPress={() => setIsSubmitting({submit: true})}
            disabled={
              !modified1.modified || !formIsValid || isSubmitting.submitting
            }
            title="Submit"
          />
        </View>
        {(formServiceError || formServiceError.length > 0) && <ErrorPage />}
        {(!formServiceError || formServiceError.length === 0) && formServiceStatus != -1 && (
          <View style={styles.container}>
            <Table borderStyle={datatable1.border}>
              <Row
                data={['group_id', 'attr1', 'attr2', 'member_count']}
                style={datatable1.head}
                textStyle={datatable1.text}
              />
              <Rows data={groupData} textStyle={datatable1.text} />
            </Table>
          </View>
        )}
        {(!formServiceStatus || formServiceStatus === -1) && (
          <View style={styles.body}>
            <Image source={logo1} alt="logo" />
          </View>
        )}
      </View>
    </>
  );
}
export default MainForm1;
