import Footer from './Footer';
import Head from 'next/head';

const DEFAULT_DESCRIPTION = 'Jacob Goldfarb is a software engineer building products people love.';

const Layout = ({ children, title, description = DEFAULT_DESCRIPTION, keywords }) => {
  const fullTitle = title ? `${title} | Jacob Goldfarb` : 'Jacob Goldfarb';
  
  return (
    <div className="flex flex-col min-h-screen relative bg-white dark:bg-neutral-900 text-black dark:text-white">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <title>{fullTitle}</title>
        <meta name="description" content={description} />
        {keywords && <meta name="keywords" content={keywords} />}
        <meta property="og:title" content={fullTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={fullTitle} />
        <meta name="twitter:description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="my-auto mx-10 md:ml-20 flex flex-col items-center flex-grow relative z-10">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
