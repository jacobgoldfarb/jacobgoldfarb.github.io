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

const LINKS = {
  github: 'https://github.com/jacobgoldfarb/',
  linkedin: 'https://linkedin.com/in/jacob-goldfarb/',
  email: 'mailto:jacob_goldfarb@icloud.com',
  gptzero: 'https://gptzero.me',
}

export default function Home({ images }) {
  return (
    <Layout
      title="Jacob Goldfarb"
      keywords="jacob, goldfarb, portfolio, software engineer, developer, gptzero"
    >
      <section className="min-h-[80vh] flex items-center mt-12">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
            <div className="max-w-lg md:w-1/2">
              <h1 className="text-xl md:text-3xl font-semibold mb-6 text-center md:text-left">
                I&apos;m Jacob. I design and develop products people like using.
              </h1>
              <p className="text-lg md:text-xl text-center md:text-left leading-relaxed">
                I&apos;m currently building at{' '}
                <a href={LINKS.gptzero} target="_blank" rel="noopener noreferrer">
                  gptzero
                </a>
                . Outside of work I like photography, film, and baseball. Check out my{' '}
                <a href={LINKS.github} target="_blank" rel="noopener noreferrer">
                  github
                </a>
                ,{' '}
                <a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer">
                  linkedin
                </a>
                , or shoot me an <a href={LINKS.email}>email</a>.
              </p>
            </div>
            <div className="w-full md:w-[600px] aspect-[4/3]">
              <ImageGallery images={images} className="w-full h-full shadow-2xl" />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
