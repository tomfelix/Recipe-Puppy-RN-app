export interface RecipeData {
  title: string;
  href: string;
  ingredients: Array<string> | string;
  thumbnail: string;
}
export interface MainScreenState {
  isLoading: boolean;
  error: boolean;
  recipes: Array<RecipeData>;
  ingredients: string;
  isErr?: any;
}

export interface RecipeDataFromAPI {
  recipes: Array<RecipeData>;
}

export interface FetchRecipesArgs {
  ingredients: string;
}
