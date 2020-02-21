import { MainScreenState } from '../../namespace';
import { MainScreenTypes, MainScreenActions } from '../actions';

export const initialState: MainScreenState = {
  isLoading: false,
  error: false,
  recipes: [],
  ingredients: '',
};

const {
  FETCH_RECIPES,
  FETCH_RECIPES_SUCCESS,
  FETCH_RECIPES_FAILED,
} = MainScreenTypes;

export const mainScreenReducer = (
  state = initialState,
  action: MainScreenActions,
): MainScreenState => {
  switch (action.type) {
    case FETCH_RECIPES:
      return {
        ...state,
        isLoading: true,
        ingredients: action.payload,
      };
    case FETCH_RECIPES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        recipes: action.payload,
      };
    case FETCH_RECIPES_FAILED:
      return {
        ...state,
        isErr: false,
      };
    default:
      return state;
  }
};
