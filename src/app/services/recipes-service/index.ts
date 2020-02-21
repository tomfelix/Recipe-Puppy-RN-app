import { AxiosResponse } from 'axios';
import ApiService from '@services/config';

const getRecipesService = (ingredients: string): Promise<any> => {
  const trimmedIngredients = ingredients
    .split(',')
    .map(ingredient => ingredient.trim())
    .join(',');
  const myUrl = `api/?i=${trimmedIngredients}`;

  return ApiService.get<AxiosResponse<any>>(myUrl)
    .then(data => {
      return data;
    })
    .catch((error: string) => {
      throw new Error(error);
    });
};

export default getRecipesService;
