import { useParams } from "react-router-dom";

const UserDetails = () => {
  const { userId } = useParams();
  return (
    <>
      <div>
        <p>User Details</p>
        <h3>{userId}</h3>
      </div>
    </>
  );
};

export default UserDetails;
