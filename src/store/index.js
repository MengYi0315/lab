import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import reducers from "../reducers/index";
import sagas from "../sagas/index";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    reducers, 
    applyMiddleware(sagaMiddleware)
);

export default store;

sagaMiddleware.run(sagas);



