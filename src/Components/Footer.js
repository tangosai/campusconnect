import React from "react";
import Container from "./Container";
import {
  AiFillFacebook,
  AiOutlineTwitter,
  AiFillLinkedin,
  AiFillInstagram,
} from "react-icons/ai";
import { TfiYoutube } from "react-icons/tfi";

const Footer = () => {
  return (
    <div className="py-1">
      <Container>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <img src="../../img/gitam-logo.jpg" className="w-11" />
            <img src="../../img/logo_c.png" className="w-36" />
          </div>
          <div>
            <ul className="flex gap-3 items-center">
              <li>
                <div className="bg-blue-500 text-white p-2 text-lg">
                  <AiFillFacebook />
                </div>
              </li>
              <li>
                <div className="bg-sky-500 text-white p-2 text-lg">
                  <AiOutlineTwitter />
                </div>
              </li>
              <li>
                <div className="bg-red-500 text-white p-2 text-lg">
                  <TfiYoutube />
                </div>
              </li>
              <li>
                <div className="bg-blue-800 text-white p-2 text-lg">
                  <AiFillLinkedin />
                </div>
              </li>
              <li>
                <div className="bg-pink-500 text-white p-2 text-lg">
                  <AiFillInstagram />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
