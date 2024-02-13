// actions.ts
import {  AUTH_START, SET_AUTH_STATUS, SET_USER, SET_ANIMATION_TYPE, SET_FETCHED_DATA_AMOUNT } from './actionTypes';
import  {User}  from '../store/reducers';
import ApiServices from '../services/ApiServices';
import { Dispatch } from 'redux';

export const setAuthStatus = (isAuthenticated: boolean) => ({
  type: SET_AUTH_STATUS,
  payload: isAuthenticated,
});

export const auth0Config = {
  domain: 'your-auth0-domain',
  clientId: 'your-auth0-client-id',
};

export const setUser = (user: User) => ({
  type: SET_USER,
  payload: user,
});

export const setAnimationType = (animationType: string) => ({
  type: SET_ANIMATION_TYPE,
  payload: animationType,
});

export const setFetchedDataAmount = (amount: number) => ({
  type: SET_FETCHED_DATA_AMOUNT,
  payload: amount,
});
export const authStart = () => ({
  type: AUTH_START,
});

export const auth = (url: string, payload: any) => {
  return (dispatch: Dispatch) => {
    dispatch(authStart());
    // Example: calling an API in ApiService
    ApiServices.makeApiCall(url, payload)
      .then(response => {
        // Handle the API response here
      })
      .catch(error => {
        // Handle errors
      });
  };
};
export type ActionTypes =
  | ReturnType<typeof setAuthStatus>
  | ReturnType<typeof setUser>
  | ReturnType<typeof setAnimationType>
  | ReturnType<typeof setFetchedDataAmount>;
