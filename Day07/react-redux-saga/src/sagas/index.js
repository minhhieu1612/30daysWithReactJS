import { put, fork, takeLatest, delay } from "redux-saga/effects";

function* fetchProducts() {
  yield put({ type: "LOADING" });
  yield delay(500);
  try {
    const products = yield fetch(
      "http://localhost:3001/fakeData/products.json"
    ).then((response, error) => response.json());
    yield put({ type: "FETCH_SUCCESS", products });
  } catch (error) {
    yield put({ type: "FETCH_FAILURE", message: error });
  }
  yield put({ type: "UNLOAD" });
}

function* watchFetchRequest() {
  yield takeLatest("FETCH_REQUEST", fetchProducts);
}

export default function* rootSaga() {
  yield fork(watchFetchRequest);
}
