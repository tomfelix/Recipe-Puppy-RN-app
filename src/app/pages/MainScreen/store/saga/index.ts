import { put, takeLatest, all, fork, call } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import { getRecipesService } from '../../../../services';
import {
  MainScreenTypes,
  fetchRecipesSuccess,
  fetchRecipesFailed,
} from '../actions';

function* getRecipes(action: { payload: string; type: string }): SagaIterator {
  try {
    const ingredients = action.payload;
    const { data } = yield call(getRecipesService, ingredients);
    const strip = (recipeTitle: string) => {
      return recipeTitle.replace(/^(a |the |an )/i, '').trim();
    };
    const sortedData = data.results.sort(
      (firstResult: any, secondResult: any) =>
        strip(firstResult.title) > strip(secondResult.title) ? 1 : -1,
    );

    yield put(fetchRecipesSuccess(sortedData));
  } catch (e) {
    yield put(fetchRecipesFailed());
  }
}

function* watchGetRecipes() {
  yield takeLatest(MainScreenTypes.FETCH_RECIPES, getRecipes);
}

export default function* mainScreenSaga() {
  yield all([fork(watchGetRecipes)]);
}
