import { call, put, takeEvery } from "redux-saga/effects";
import { getProductsSuccess, getProductsFailure } from "./productSlice";
function* workProductsFetch() {
  try {
    const products = yield call(() => fetch("http://localhost:3001/Products"));
    const formattedProducts = yield products.json();
    yield put(getProductsSuccess(formattedProducts));
  } catch (error) {
    console.log(error);
    yield put(getProductsFailure(error));
  }
}

function* productSaga() {
  yield takeEvery("products/getProductsFetch", workProductsFetch);
}

export default productSaga;
