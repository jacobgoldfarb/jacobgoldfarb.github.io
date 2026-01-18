import { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import ParallaxImage from '../components/ParallaxImage';

import path from 'path';
import fs from 'fs';
import { shuffle } from 'lodash';

export async function getStaticProps() {
  const photosDir = path.join(process.cwd(), 'public', 'photos');
  const files = fs.readdirSync(photosDir);
  const imageFilenames = files.filter(
    (file) => path.extname(file).toLowerCase() === '.jpg'
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
      title={'Jacob Goldfarb'}
      keywords="jacob, goldfarb, portfolio, software engineer, developer"
    >
      <section className="mt-16">
        <div className="relative container mx-auto md:px-0 h-screen my-auto">
          <div className="flex flex-col md:flex-row mx-4 h-screen">
            <div className="flex flex-col md:flex-row items-center md:items-start md:mt-10 gap-12 md:gap-6 md:mr-32">
              <div className="max-w-xl">
                <h1 className="text-xl md:text-3xl text-center md:text-left font-semibold mb-6">
                  I&apos;m Jacob. I design and implement products people like using.
                </h1>
                <p className="text-lg md:text-xl text-center md:text-left">
                  I&apos;m currently building at{' '}
                  <a href="https://gptzero.me" target="_blank" rel="noopener noreferrer">
                    GPTZero
                  </a>
                  . Outside of work I like photography, film, and baseball. Check out my{' '}
                  <a href="https://github.com/jacobgoldfarb/" target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                  ,{' '}
                  <a href="https://linkedin.com/in/hire-jacob/" target="_blank" rel="noopener noreferrer">
                    LinkedIn
                  </a>
                  , or shoot me an <a href="mailto:jacob_goldfarb@icloud.com">email</a>.
                </p>
              </div>
              <ParallaxImage
                className="w-full h-[400px] md:h-[500px]"
                src={`/photos/${imageFilenames[currentImage]}`}
                alt="A picture I took"
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
