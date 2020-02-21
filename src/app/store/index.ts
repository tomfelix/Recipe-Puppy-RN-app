import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '@store/RootReducer';
import rootSaga from '@store/RootSaga';
import { MainScreenState } from '@core/pages/MainScreen/namespace';

export interface RootStore {
  main: MainScreenState;
}

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
