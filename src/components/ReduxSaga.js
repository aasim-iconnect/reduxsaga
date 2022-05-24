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
  console.log("Hii", products);
  return (
    <>
      <div className="App">
        <h1> Redux Saga</h1>
        <h2>
          {products &&
            products.map((product) => (
              <div key={product.id}>
                <div>
                  <h2>{product.name}</h2>
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
};

export default ReduxSaga;
