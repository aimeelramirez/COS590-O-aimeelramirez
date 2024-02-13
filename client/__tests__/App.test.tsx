/**
 * @format
 */
jest.useFakeTimers();
import 'react-native';
import React from 'react';
import App from '../src/App';

// Note: import explicitly to use the types shipped with jest.
// import {it} from '@jest/globals';
import '@testing-library/react-native/extend-expect';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import AppNavigator from '../src/App'; // Update the import path accordingly
import HomeScreen from '../src/screens/HomeScreen';


describe('HomeScreen on navigate', () => {
  it('navigates to HomeScreen', async () => {
    const { findByText } = render(<HomeScreen/>);
    const HomeScreenText = findByText('Home Screen');
    expect(HomeScreenText).toBeTruthy();
  });
});
it('renders correctly Navigator', () => {
  const {toJSON} = render(<AppNavigator />);
  expect(toJSON()).toMatchSnapshot();
});
it('renders correctly App', async () => {
  renderer.create(<App />);
});
