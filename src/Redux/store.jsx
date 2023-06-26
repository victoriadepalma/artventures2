import { configureStore } from '@reduxjs/toolkit'
import reducers from './reducers/index'
import rootSaga from './sagas/index';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware()
const store = configureStore({reducer:reducers,middleware:()=>[sagaMiddleware]})

sagaMiddleware.run(rootSaga)

export default store