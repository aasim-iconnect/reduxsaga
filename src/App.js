import "./App.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProductsFetch } from "./productSlice";
function App() {
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductsFetch());
  }, [dispatch]);
  console.log("Hii", products);
  return (
    <div className="App">
      <h1> Redux Saga</h1>
      <h2>
        {products.map((product) => (
          <div key={product.id}>{product.name}</div>
        ))}
      </h2>
    </div>
  );
}

export default App;
