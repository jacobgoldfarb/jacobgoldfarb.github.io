import path from 'path';
import fs from 'fs';
import { shuffle } from 'lodash';
import Layout from '../components/Layout';
import ImageGallery from '../components/ImageGallery';

export async function getStaticProps() {
  const photosDir = path.join(process.cwd(), 'public', 'photos');
  const files = fs.readdirSync(photosDir);
  const images = files
    .filter((file) => path.extname(file).toLowerCase() === '.jpg')
    .map((file) => `/photos/${file}`);

  return {
    props: {
      images: shuffle(images),
    },
  };
}

export default function Home({ images }) {
  return (
    <Layout
      title="Jacob Goldfarb"
      keywords="jacob, goldfarb, portfolio, software engineer, developer"
    >
      <section className="min-h-[80vh] flex items-center">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
            <div className="max-w-lg">
              <h1 className="text-2xl md:text-4xl font-semibold mb-6 text-center md:text-left">
                I&apos;m Jacob. I design and develop products people like using.
              </h1>
              <p className="text-lg md:text-xl text-center md:text-left leading-relaxed">
                I&apos;m currently building at{' '}
                <a href="https://gptzero.me" target="_blank" rel="noopener noreferrer">
                  gptzero
                </a>
                . Outside of work I like photography, film, and baseball. Check out my{' '}
                <a href="https://github.com/jacobgoldfarb/" target="_blank" rel="noopener noreferrer">
                  github
                </a>
                ,{' '}
                <a href="https://linkedin.com/in/hire-jacob/" target="_blank" rel="noopener noreferrer">
                  linkedin
                </a>
                , or shoot me an <a href="mailto:jacob_goldfarb@icloud.com">email</a>.
              </p>
            </div>
            <div className="w-full md:w-[500px] lg:w-[600px] aspect-[4/3]">
              <ImageGallery images={images} className="w-full h-full shadow-2xl" />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
