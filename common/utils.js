import {getAllGroups} from '../services/GroupService';

// filtering out service data if data retrieved
export const handleApi = async (inputData) => {
  return await getAllGroups()
    .then((g) => {
      //alert(JSON.stringify(g));
      let responseData = g && g.data ? g.data : [];
      responseData = responseData.filter(
        (k) =>
          inputData.includes(k.group_attribute.attr1) &&
          inputData.includes(k.group_attribute.attr2),
      );
      if (!!responseData && responseData.length > 0) {
        responseData = Array.from(new Set(responseData));
      }
      return Promise.resolve({
        code: g.code,
        data: responseData,
        error: g.error,
      });
    })
    .catch((e) => {
      throw e;
    });
};

/**
export async function handleApi(inputData) {
  return _retrieveGroups(inputData);
} **/

/**
export const isFormValid = (state) => {
  const inValid = Object.keys(state).some(
    (key) => !!state[key].error || state[key].error.length !== 0,
    //|| !state[key].modified,
  );
  return !inValid;
}; */

/**
export const getInputData = (state) => {
  //return isFormValid(state) ? Object.values(state).map((k) => k.value) : [];
  return isFormValid(state) ? Object.values(state).map((k) => k.value) : [];
};**/
/**
export const setBootStrapFormValid = (event) => {
  let target = event.target;
  target.className += ' was-validated';
};**/

const _HINT = 'Please enter valid input';
export const ClientHints = {
  HINT1: _HINT + '1',
  HINT2: _HINT + '2',
};

export const ClientErrors = {
  REQUIRED: 'required',
  MIN: 'min not satisfied',
  MAX: 'max not satisfied',
  PATTERN: 'pattern not satisfied',
};

export const getGroupItem = (data) => {
  return data && data.length > 0 ? data.map((item) => JSON.parse(item)) : [{}];
};
/**
export const disableSubmit = (isInitial, formClientStatus, isSubmitting) => {
  return isInitial
    ? true
    : !formClientStatus
    ? true
    : isSubmitting
    ? true
    : false;
}; **/
/**
export const columns1 = (data) => {
  return {
    columns: [
      {
        name: 'Group Id',
        selector: 'group_id',
        sortable: true,
      },
      {
        name: 'group type1',
        selector: 'attr1',
        sortable: false,
      },
      {
        name: 'group type2',
        selector: 'attr2',
        sortable: false,
      },
      {
        name: 'member count',
        selector: 'member_count',
        sortable: false,
      },
    ],
  };
};**/
