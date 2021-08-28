import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import rootReducer from './store/rootReducer';
import rootSaga from './store/rootSaga';

function configureStore(preloadedState) {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware, logger];
  const middlewareEnhancer = applyMiddleware(...middlewares);
  const composedEnhancers = composeWithDevTools(middlewareEnhancer);
  const store = createStore(rootReducer, preloadedState, composedEnhancers);

  const sagaTask = sagaMiddleware.run(rootSaga);

  return {
    cs: store,
    sagaMiddleware,
    sagaTask,
  };
}

export default configureStore;
