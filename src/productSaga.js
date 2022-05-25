import { call, put, takeEvery } from "redux-saga/effects";
import { getProductsSuccess, getProductsFailure } from "./productSlice";

async function api() {
  const data = await fetch("https://api.thecatapi.com/v1/breeds");
  const response = await data.json();
  console.log(response);
  return response;
}

function* workProductsFetch() {
  try {
    const cats = yield call(api);
    yield put(getProductsSuccess(cats));
  } catch (error) {
    yield put(getProductsFailure(error.message));
  }
}

function* productSaga() {
  yield takeEvery("products/getProductsFetch", workProductsFetch);
}

export default productSaga;
