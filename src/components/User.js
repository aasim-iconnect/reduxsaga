import { useSearchParams } from "react-router-dom";

const User = () => {
  const [searchParams, setSearchParam] = useSearchParams();
  return (
    <>
      <div>
        <h1>User</h1>
        <h5>User 1</h5>
        <h5>User 2</h5>
        <h5>User 3</h5>
        <button onClick={() => setSearchParam({ filter: "active" })}>
          Active User
        </button>
        <button onClick={() => setSearchParam({})}>Reset Filter</button>
      </div>
    </>
  );
};

export default User;
