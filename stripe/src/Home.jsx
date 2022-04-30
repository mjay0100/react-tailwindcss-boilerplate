import React from "react";
import { useGlobal } from "./Content";
const Home = () => {
  const data = useGlobal();
  console.log(data);
  return <div>Home</div>;
};

export default Home;
