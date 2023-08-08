import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Head from 'next/head'; 

const Layout = ({ children, title, description, keywords }) => {
  return (
    <div className="flex flex-col min-h-screen relative overflow-hidden">
      <Head>
        <title>{`NoshDiary | ${title}`}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <Navbar />
      <main className="mt-10 mx-10 md:ml-20 flex flex-col items-center flex-grow relative z-10">
        <div>{children}</div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
