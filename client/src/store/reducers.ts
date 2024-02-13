// reducers.ts
import * as actionTypes from '../actions/actionTypes';


export interface User {
  id: number;
  name: string;
}

interface AppState {
  user: User | null;
  data: any; // Adjust this according to data structure
  isAuthenticated: boolean;
  animationType: string; // New property
  fetchedDataAmount: number; // New property
  // ... other state properties
}

const initialState: AppState = {
  user: null,
  data: null,
  isAuthenticated: false,
  animationType: 'default', // Default animation type
  fetchedDataAmount: 0, // Default fetched data amount
  // ... other initial state properties
};

const rootReducer = (state: AppState = initialState, action:any): AppState => {
  switch (action.type) {
    case actionTypes.SET_AUTH_STATUS:
      return { ...state, isAuthenticated: action.payload };
    case actionTypes.SET_USER:
      return { ...state, user: action.payload };
    case actionTypes.SET_ANIMATION_TYPE:
      return { ...state, animationType: action.payload };
    case actionTypes.SET_FETCHED_DATA_AMOUNT:
      return { ...state, fetchedDataAmount: action.payload };
    default:
      return state;
  }
};

export default rootReducer;
