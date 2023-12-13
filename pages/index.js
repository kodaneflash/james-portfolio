import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Head from 'next/head'; // Import Head from next/head
import styles from '../styles/index.module.css';

// components
import ParticlesContainer from '../components/ParticlesContainer';
import ProjectsBtn from '../components/ProjectsBtn';

// variants
import { fadeIn } from '../variants';

// Slider variants
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

const Home = () => {
  return (
    <>
      <Head>
        <title>James - Developer Portfolio</title>
      </Head>
      <div className='bg-primary/60 h-full'>
        {/* text */}
        <div className='w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10'>
          <div className='text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto'>
            {/* title */}
            <motion.h1
              variants={fadeIn('down', 0.2)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className='h1'
            >
              <span className="text-accent">
                Hello, I&apos;m a{" "}
              </span>
              <TypeAnimation
                sequence={[
                  1000,
                  "Software Engineer",
                  1000,
                  "Web Developer",
                  1000,
                  "AI/ML Engineer",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </motion.h1>
            {/* subtitle */}
            <motion.p
              variants={fadeIn('down', 0.3)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className='max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16'
            >
              I'm passionate about leveraging technical expertise to identify creative solutions that improve operational efficiency. 
              I've architected solutions that have substantially improved operational performance, optimizing both speed and cost-efficiency for businesses.
            </motion.p>
            {/* btn */}
            <div className='flex justify-center xl:hidden relative'>
              <ProjectsBtn />
            </div>
            <motion.div
              variants={fadeIn('down', 0.4)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className='hidden xl:flex'
            >
              <ProjectsBtn />
            </motion.div>
          </div>
        </div>
        {/* image */}
        <div className='w-[1200px] h-full absolute right-0 bottom-0'>
          {/* bg img */}
          <div className='bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0'></div>
          {/* particles */}
          <ParticlesContainer />
        </div>
      </div>
    </>
  );
};

export default Home;
