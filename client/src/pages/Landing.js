import React from "react";
import login from "../assets/images/main-alternative.svg";
import Wrapper from "../assets/wrappers/Testing";
import { Logo } from "../components";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Chambray wolf williamsburg JOMO, bicycle rights readymade taxidermy
            edison bulb pop-up pok pok cliche hashtag post-ironic shaman retro.
            Letterpress four loko organic.
          </p>
          <Link to="/register" className="btn btn-hero">
            Login/Register
          </Link>
        </div>
        <img src={login} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
