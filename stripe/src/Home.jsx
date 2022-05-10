import React from "react";
import { useGlobal } from "./Content";
import phone from "./images/phone.svg";
const Home = () => {
  const { closeSubmenu } = useGlobal();

  return (
    <section className="hero">
      <div className="hero-center">
        <article className="hero-info">
          <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur,
            dolore.
          </p>
          <button className="btn">Start now</button>
        </article>
        <article className="hero-images">
          <img src={phone} className="phone-img" alt="" />
        </article>
      </div>
    </section>
  );
};

export default Home;
