import Image from 'next/image'
import React from 'react'
import Layout from '../components/Layout'
import ParallaxImage from '../components/ParallaxImage'

import headshotImage from '../public/headshot.jpg'

// Text constants
const APP_DESCRIPTION = `I’m a software engineer working at Affirm in New York. Previously, 
  I studied Systems Design Engineering at the University of Waterloo. I
  I also love, design, data and . When I'm not studying I like to play chess, practice Muay Thai, boulder, swim, run or ski.
  I'm currently seeking new grad opportunities for Summer or Fall 2022 in Software Engineering or Product Management. 
  That being said, if you know of any opportunities I might be interested in feel free to reach out!`;

const Home = () => {
  return (
    <Layout
      title={"Jacob Goldfarb"} 
      description={APP_DESCRIPTION} 
      keywords="jacob, goldfarb, portfolio, software engineer, developer"
    >
      <div className="relative container mx-auto md:px-0">
        <div className="flex z-10 mt-8 mx-24">
          <ParallaxImage src="headshot.jpg" alt="Jacob Goldfarb" />
          {/* <Image className="w-1/3 object-contain border-8 border-white shadow-xl" src={headshotImage}/> */}
          <div className="flex flex-col items-center ml-10 md:items-start md:mt-10 md:mt-0 ">
            <div className="text-5xl md:text-7xl text-center md:text-left font-bold mb-6">
                {"I'm "} <span className="text-rose-600">{'Jacob Goldfarb'}</span>{". I build apps and websites."}
            </div>
            <p className="text-lg md:text-xl mb-6 text-center md:text-left">
              {APP_DESCRIPTION}
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
