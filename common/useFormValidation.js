//https://react-hook-form.com/advanced-usage/
//https://stackoverflow.com/questions/55565444/how-to-register-event-with-useeffect-hooks
import {handleApi} from './utils';

import {useState} from 'react';

const useFormValidation = (inputData1) => {
  //const [inputData, setInputData] = useState([]);
  //const [formClientStatus, setFormClientStatu] = useState(false);
  //const [isSubmitting, setIsSubmitting] = useState(false);
  const [formServiceError, setFormServiceError] = useState('');
  const [formServiceStatus, setFormServiceStatus] = useState(-1);
  const [groupData, setGroupData] = useState([]);

  //client side validation
  /**
  useEffect(() => {
    setFormClientStatus(isFormValid(fieldStates));
    //in case input data is reused
    //setInputData(getInputData(fieldState));
    setInputData(fieldValues);
  }, [fieldStates, fieldValues]);
  **/
  //alert(inputData1);
  let inputDataa = inputData1.split(' ').map((d) => d.trim());

  //const submitIt = useCallback(() => {
  //setIsSubmitting(true);

  handleApi(inputDataa).then((result) => {
    let {code, error, data} = {...result};
    code !== -1 && setFormServiceStatus(code);
    setFormServiceError(!!error && error !== '' ? error : '');
    if (data && data.length !== 0) {
      //simplify data passing and reuse
      let groupData1 = data.map((g) =>
        JSON.stringify({
          group_id: g.group_id.trim(),
          attr1: g.group_attribute.attr1.trim(),
          attr2: g.group_attribute.attr2.trim(),
          member_count: g.members ? g.members.length : 0,
        }),
      );
      setGroupData(groupData1);
    } else {
      setGroupData([]);
    }
  });
  //setIsSubmitting(false);
  //return () => reset();
  return {
    //isSubmitting,
    formServiceStatus,
    formServiceError,
    groupData,
  };
  //}, [formServiceError, formServiceStatus, groupData, inputData1]);
  //return submitIt;
  //could add more reset later
  /**
  const reset = () => {
    setIsSubmitting(false);
  };**/

  //return
  //formClientStatus,
  // handleOnSubmit;
  //isSubmitting,
  //formServiceStatus,
  //formServiceError,
  //groupData,
};

export default useFormValidation;
