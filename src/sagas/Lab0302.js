import _ from "lodash";
import { call, put, takeLatest } from "redux-saga/effects";
import { handleError } from "../utils/error";
import { getToken } from "../utils/token";


import {
    GET_TestData
} from "../services/Lab0302";

// Example
function* GET_TestDataEffect({payload}) {
    try {
        const response = yield call (GET_TestData, payload);
        yield put ({ type: "SAVE_TestData", payload: response });
    } catch (err) {
        console.Consolelog(err);
    }
}


export default function* Example() {
    // Example
    yield takeLatest("GET_TestData", GET_TestDataEffect);
}
