import React from "react";
import { BsTwitter } from "react-icons/bs";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a href="https://twitter.com/dami0la">
          <BsTwitter />
        </a>
      </div>
      <div>
        <a href="https://github.com/BoltUltra">
          <AiFillGithub />
        </a>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/mayowa-sunusi-04689b15b/">
          <AiFillLinkedin />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
