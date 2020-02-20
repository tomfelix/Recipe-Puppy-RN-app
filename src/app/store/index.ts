import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '@store/RootReducer';
import rootSaga from '@store/RootSaga';
import { MainArticlesScreenState } from '@core/pages/MainArticlesScreen/namespace';
import { getArticlesService } from '@core/services';

export interface RootStore {
  main: MainArticlesScreenState;
}

const dependencies = {
  getArticlesService,
};
export type Dependencies = typeof dependencies;

const sagaMiddleware = createSagaMiddleware();
const usedMiddleware = sagaMiddleware;

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = [usedMiddleware, logger];

export const rootStore = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middleware)),
);
sagaMiddleware.run(rootSaga);
