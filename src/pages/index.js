import React from 'react';
import { Helmet } from 'react-helmet';
import App from '../components/App';
import { headData } from '../mock/data';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';

export default () => {
  const { title, lang, description } = headData;
  const siteName = "David Yu's Portfolio";
  const image = 'images/siteimg.png';
  const robots = '/';
  const siteUrl = 'https://www.davidyu.dev';
  const siteImage = 'images/siteimg.png';
  const pathname = '/';
  const twitterId = '/';

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title || 'David Yu Portfolio'}</title>
        <html lang={lang || 'en'} />
        <meta name="description" content={description || 'David Yu Portfolio'} />
        <html lang="en" />
        <meta name="description" content={description} />
        <meta name="image" content={image} />
        <meta name="robots" content={robots} />
        <link rel="canonical" href="/" />
        {/* Social */}
        <meta itemProp="name" content={siteName} />
        <meta property="st:title" content={title} />
        <meta property="st:info" content={description} />
        {/* OG */}
        <meta property="og:url" content={`${siteUrl}${pathname || '/'}`} />
        <meta property="og:site_name" content={siteName} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image || `${siteUrl}${siteImage}`} />
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:creator" content={twitterId} />
        <meta name="twitter:site" content={twitterId} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
      </Helmet>
      <App />
    </>
  );
};