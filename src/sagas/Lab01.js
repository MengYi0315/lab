/* eslint-disable no-unused-vars */
import _ from "lodash";
import { call, put, takeLatest } from "redux-saga/effects";
import { handleError } from "../utils/error";
import { getToken } from "../utils/token";


import {
    GET_TestData
} from "../services/Lab01";

function* GET_TestDataEffect({payload}) {
    try {
        const response = yield call (GET_TestData, payload);
        console.log(response)
        yield put ({ type: "SAVE_TestData", payload: response });
    } catch (err) {
        console.log(err);
    }
}


export default function* Example() {
    yield takeLatest("GET_TestData", GET_TestDataEffect);
}
