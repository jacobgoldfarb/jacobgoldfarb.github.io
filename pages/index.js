import { useState, useEffect } from "react";
import Layout from "../components/Layout";
import ParallaxImage from "../components/ParallaxImage";

import path from "path";
import fs from "fs";
import { shuffle } from "lodash";

export async function getStaticProps() {
  const photosDir = path.join(process.cwd(), "public", "photos");
  const files = fs.readdirSync(photosDir);
  const imageFilenames = files.filter(
    (file) => path.extname(file).toLowerCase() === ".jpg"
  );

  const shuffledImageFilenames = shuffle(imageFilenames);
  return {
    props: {
      imageFilenames: shuffledImageFilenames,
    },
  };
}

const Home = ({ imageFilenames }) => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((current) => (current + 1) % imageFilenames.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [imageFilenames.length]);

  return (
    <Layout
      title={"Jacob Goldfarb"}
      keywords="jacob, goldfarb, portfolio, software engineer, developer"
    >
      <section className="mt-32">
        <div className="relative container mx-auto md:px-0 h-screen my-auto">
          <div className="flex-col md:flex-row flex mx-4  h-screen">
            <div className="flex flex-col items-center md:items-start md:mt-10 md:mt-0 mr-32">
              <div className="text-3xl md:text-5xl text-center md:text-left mb-6">
                <h1 className="header">
                  {
                    "Hey, I'm Jacob. I design and implement products people like using."
                  }
                </h1>
                <p className="text-lg md:text-xl mb-6 text-center md:text-left font-normal mt-10">
                  {
                    "I'm a full-stack engineer based in Toronto, and I strive to create perfect experiences through code. i'm currently building at "
                  }
                  <a href="https://gptzero.me">{"gptzero."}</a>{" "}
                  {
                    "previously, I've graduated from the University of Waterloo in Systems Design Engineering."
                  }
                  <br />
                  <br />
                  {" I also like photography, guitar and film. check out my "}
                  <a href="https://github.com/jacobgoldfarb/">github</a>,{" "}
                  <a href="https://linkedin.com/in/hire-jacob/">linkedin</a>, or
                  shoot me an{" "}
                  <a href="mailto:jacob_goldfarb@icloud.com">email.</a>
                </p>
              </div>
            </div>
            <ParallaxImage
              className="w-full"
              src={`/photos/${imageFilenames[currentImage]}`}
              alt="A picture I took"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
