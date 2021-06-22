import React, { useState, useEffect } from 'react';
import Hero from './Hero/Hero';
import About from './About/About';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import { Helmet } from 'react-helmet';

import { PortfolioProvider } from '../context/context';

import { heroData, aboutData, projectsData, contactData, footerData } from '../mock/data';

function App() {
  const [hero, setHero] = useState({});
  const [about, setAbout] = useState({});
  const [projects, setProjects] = useState([]);
  const [contact, setContact] = useState({});
  const [footer, setFooter] = useState({});

  useEffect(() => {
    setHero({ ...heroData });
    setAbout({ ...aboutData });
    setProjects([...projectsData]);
    setContact({ ...contactData });
    setFooter({ ...footerData });
  }, []);
  const title = "David Yu's Portfolio";
  const siteName = "David Yu's Portfolio";
  const description = "This is David Yu's Website.";
  const image = 'images/siteimg.png';
  const robots = '/';
  const siteUrl = 'https://www.davidyu.dev';
  const siteImage = 'images/siteimg.png';
  const pathname = '/';
  const twitterId = '/';
  return (
    <PortfolioProvider value={{ hero, about, projects, contact, footer }}>
      <Helmet title={title} titleTemplate={`%s | ${siteName}`}>
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
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </PortfolioProvider>
  );
}

export default App;
