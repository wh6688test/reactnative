/**
 * @format
 */

import 'react-native';
import React from 'react';
import {ErrorPage} from '../UserComponents';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<ErrorPage />).toJSON();
  expect(tree).toMatchSnapshot();
});
