
import { useState, useEffect } from 'react';
import Layout from '../components/Layout'
import ParallaxImage from '../components/ParallaxImage'

const imageFilenames = [
  'ChristinaPicture.jpg',
  'DSC01224-2.jpg',
  'DSC01381.jpg',
  'DSC01706-2.jpg',
  'DSC02009.jpg',
  'DSC02010-2.jpg',
  'DSC02025.jpg',
  'DSC02032-2.jpg',
  'DSC02032.jpg',
  'DSC02054.jpg',
  'DSC02083.jpg',
  'DSC02088.jpg',
  'DSC02091.jpg',
  'DSC02100.jpg',
  'DSC02267.jpg',
  'DSC02284.jpg',
  'DSC02295-2.jpg',
  'DSC02295.jpg',
  'DSC02337.jpg',
  'DSC02532.jpg',
  'DSC02714-HDR.jpg',
  'DSC02890.jpg',
  'DSC03160-2.jpg',
  'DSC03160-3.jpg',
  'DSC03160-4.jpg',
  'DSC03160.jpg',
  'DSC03160.psd',
  'DSC03165.psd',
  'DSC03173.jpg',
  'DSC03408.jpg',
  'DSC03493.jpg',
  'DSC03499-2.jpg',
  'DSC03499-3.jpg',
  'DSC03499.jpg',
  'IMG_3408.jpg'
];


const Home = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((current) => (current + 1) % imageFilenames.length);
    }, 4000);
    return () => clearInterval(timer); 
  }, []);
  return (
    <Layout
      title={"Jacob Goldfarb"}
      keywords="jacob, goldfarb, portfolio, software engineer, developer"
    >
      <section>
        <div className="relative container mx-auto md:px-0">
          <div className="flex-col md:flex-row flex mt-8 mx-4">
            <div className="flex flex-col items-center md:items-start md:mt-10 md:mt-0 mr-32">
              <div className="text-3xl md:text-5xl text-center md:text-left font-semibold mb-6">
                {"Hey, I'm"} <a href="https://linkedin.com/in/hire-jacob" className='underline'>{"Jacob."}</a>{" I design and implement products people like using."}
              <p className="text-lg md:text-xl mb-6 text-center md:text-left font-normal mt-10">
                {"I strive to create beautiful experiences with code. i'm currently building at"} <a className="underline" href="https://gptzero.me">{"gptzero."}</a> {" I also like photography." }
              </p>
            </div>
          </div>
            <ParallaxImage className="w-full" src={`/photos/${imageFilenames[currentImage]}`} alt="i took this" />
        </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
