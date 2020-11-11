import { put, takeLatest, takeEvery, call, delay } from "redux-saga/effects";
import types from "./types";
function* fetchProducts() {
  const products = yield call(
    fetch("http://localhost:3001/fakeData/products.json")
  ).then((response, error) => response);

  yield put({ type: "LOADING" });
  yield delay(500);
  console.log(products);
  // yield put({ type: 'UNLOAD' })
  // yield put({ type: types, products: products })
}

function* watchFetchRequest() {
  // yield put({ type: types.FETCH_REQUEST })
  yield takeLatest(types.FETCH_REQUEST, fetchProducts);
  console.log("has fetch");
}

export default function* rootSaga() {
  yield takeEvery(watchFetchRequest());
}
