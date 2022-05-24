import { Link, Outlet, useNavigate } from "react-router-dom";
const About = () => {
  const navigate = useNavigate();
  return (
    <>
      <p>About</p>
      <div>
        <Link to="react">React</Link>| <Link to="nextjs">Next js</Link>
      </div>
      <div>
        <Outlet />
      </div>
      <div>
        <button onClick={() => navigate("/")}>Go Home</button>
      </div>
    </>
  );
};

export default About;
