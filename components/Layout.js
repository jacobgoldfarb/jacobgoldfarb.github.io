import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Head from 'next/head';

const Layout = ({ children, title, description, keywords }) => {
  return (
    <div className="flex flex-col min-h-screen relative bg-white text-black">
      <Head>
        <title>{`Jacob Goldfarb | ${title}`}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <main className="my-auto mx-10 md:ml-20 flex flex-col items-center flex-grow relative z-10">
        <div>{children}</div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
