import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import ReduxSaga from "./components/ReduxSaga";
import About from "./components/About";
import React from "./components/React";
import NextJs from "./components/NextJs";
import NoMatchRoute from "./components/NoMatch";
import User from "./components/User";
import UserDetails from "./components/userDeatils";
import Weather from "./components/Weather";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="reduxsaga" element={<ReduxSaga />} />
        <Route path="weather" element={<Weather />} />
        <Route path="about" element={<About />}>
          <Route index element={<React />} />
          <Route path="react" element={<React />} />
          <Route path="nextjs" element={<NextJs />} />
        </Route>
        <Route path="users" element={<User />} />
        <Route path="users/:userId" element={<UserDetails />} />
        <Route path="*" element={<NoMatchRoute />} />
      </Routes>
      <p>App</p>
    </>
  );
}

export default App;
