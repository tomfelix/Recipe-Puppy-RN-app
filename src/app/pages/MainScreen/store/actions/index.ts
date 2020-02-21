import { ReturnType } from '@namespace/index';

export enum MainScreenTypes {
  FETCH_RECIPES = 'FETCH_RECIPES',
  FETCH_RECIPES_SUCCESS = 'FETCH_RECIPES_SUCCESS',
  FETCH_RECIPES_FAILED = 'FETCH_RECIPES_FAILED',
}

export const fetchRecipes = (ingredients: string) =>
  ({
    type: MainScreenTypes.FETCH_RECIPES,
    payload: ingredients,
  } as const);

export const fetchRecipesSuccess = (payload: any) =>
  ({
    type: MainScreenTypes.FETCH_RECIPES_SUCCESS,
    payload,
  } as const);

export const fetchRecipesFailed = () =>
  ({
    type: MainScreenTypes.FETCH_RECIPES_FAILED,
  } as const);

export type fetchRecipesType = ReturnType<typeof fetchRecipes>;
export type fetchRecipesSuccessType = ReturnType<typeof fetchRecipesSuccess>;
export type fetchRecipesFailedType = ReturnType<typeof fetchRecipesFailed>;

export type MainScreenActions =
  | fetchRecipesType
  | fetchRecipesSuccessType
  | fetchRecipesFailedType;
