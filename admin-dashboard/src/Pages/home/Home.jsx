import React from "react";
import "../home/home.scss";
import Sidebar from "../../components/sidebar/Sidebar";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homecontainer">Container</div>
    </div>
  );
};

export default Home;
