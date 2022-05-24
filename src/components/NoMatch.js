import { useNavigate } from "react-router-dom";

const NoMatchRoute = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <h1>Error 404 no routes Found</h1>
        <div>
          <button onClick={() => navigate("/")}>Go Back</button>
        </div>
      </div>
    </>
  );
};

export default NoMatchRoute;
