/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import { render ,fireEvent} from '@testing-library/react-native';

it('renders correctly', () => {
  renderer.create(<App />);
});

test('Displays a username, if the username field has been completed', () => {
  const INPUT_TEXT = 'John';
  const {getByTestId, getByText} = render(<App />);
  const userNameTextInput = getByTestId('userName');
  // console.log(userNameTextInput)
  fireEvent.changeText(userNameTextInput, INPUT_TEXT);
  const username = getByText(INPUT_TEXT);
  expect(username).toBeTruthy();
  });
