import "../App.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProductsFetch } from "../productSlice";
import { useNavigate } from "react-router-dom";
const ReduxSaga = () => {
  const navigate = useNavigate();
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductsFetch());
  }, [dispatch]);
  console.log(products.message);
  if (products.message) {
    return (
      <>
        <h1>{products.message}</h1>
      </>
    );
  } else {
    return (
      <>
        <div className="App">
          <h1> Redux Saga</h1>
          <h1>{products.message}</h1>
          <h2>
            {products.map((product) => (
              <div key={product.id}>
                <div>
                  <h5>{product.name}</h5>
                  <h5>{product.price}</h5>
                </div>
              </div>
            ))}
          </h2>
          <div>
            <button onClick={() => navigate("/")}>Go Home</button>
          </div>
        </div>
      </>
    );
  }
};
export default ReduxSaga;
