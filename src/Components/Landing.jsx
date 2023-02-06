import React from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import SocialMediaIcons from "./SocialMediaIcons";
import profileimg from "../assets/profile-image.png";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Landing = ({ setSelectedPage }) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
  return (
    <section
      id="home"
      className="md:flex md:justify-between md:items-center md:h-full gap-16 py-10"
    >
      {/* Image Section */}
      <div className="group md:order-2 flex justify-center basis-3/5 z-10 mt-16 md:mt-32">
        {isAboveMediumScreens ? (
          <div className="relative z-0 ml-20 before:absolute before:-top-20 before:-left-20 before:rounded-t-[400px] before:w-full before:max-w-[400px] before:h-full before:border-2 before:border-fuchsia-500 before:z-[-1] before:group-hover:border-yellow before:group-hover:transition before:group-hover:duration-500 before:ease-in-out">
            <img
              src={profileimg}
              className="group-hover:filter group-hover:sepia transition duration-500 z-10 w-full max-w-[400px] md:max-w-[600px]"
              alt="profile"
            />
          </div>
        ) : (
          <img
            src={profileimg}
            className="hover:filter hover:sepia transition duration-500 z-10 w-full max-w-[400px] md:max-w-[600px]"
            alt="profile"
          />
        )}
      </div>
      {/* Main Section */}
      <div className="z-30 basis-2/5 mt-12 md:mt-32">
        {/* Headings */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="text-6xl font-playfair z-10 text-center md:text-start">
            Feder{" "}
            <span className="xs:relative xs:text-deep-blue xs:font-semibold z-20 xs:before:content-brush before:absolute before:-left-[30px] before:-top-[70px] before:z-[-1]">
              Feder
            </span>
          </p>
          <p className="mt-10 mb-7 text-sm text-center md:text-start">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed illo
            saepe sapiente ea, ipsa accusantium debitis ab deleniti.
          </p>
        </motion.div>
        {/* Call to Actions */}
        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <AnchorLink
            className="bg-gradient-rainblue rounded-md py-4 px-7 font-semibold hover:bg-blue hover:text-white hover:scale-105 transition duration-500 text-deep-blue"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            Contact Me
          </AnchorLink>
          <AnchorLink
            className="bg-gradient-rainblue py-0.5 pr-0.5 rounded-r-md transition duration-500"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            <div className="bg-white hover:text-cyan-500 rounded-r-md transition duration-500 w-full h-full flex items-center font-semibold font-playfair px-10">
              Let's talk.
            </div>
          </AnchorLink>
        </motion.div>
        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <SocialMediaIcons />
        </motion.div>
      </div>
    </section>
  );
};

export default Landing;
