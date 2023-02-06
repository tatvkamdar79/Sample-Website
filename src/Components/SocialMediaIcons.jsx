import React from "react";
import {
  FaLinkedin,
  FaFacebookSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";

const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-100 rounded-md transition duration-500"
        href="https://www.linkedin.com"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedin size={30} className="rounded-md" />
      </a>{" "}
      <a
        className="hover:opacity-100 rounded-md transition duration-500"
        href="https://www.facebook.com"
        target="_blank"
        rel="noreferrer"
      >
        <FaFacebookSquare size={30} className="rounded-md" />
      </a>{" "}
      <a
        className="hover:opacity-100 rounded-md transition duration-500"
        href="https://www.instagram.com"
        target="_blank"
        rel="noreferrer"
      >
        <FaInstagram size={30} className="rounded-md" />
      </a>{" "}
      <a
        className="hover:opacity-100 rounded-md transition duration-500"
        href="https://www.twitter.com"
        target="_blank"
        rel="noreferrer"
      >
        <FaTwitterSquare size={30} className="rounded-md" />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
