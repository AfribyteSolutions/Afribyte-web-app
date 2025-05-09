import Head from 'next/head';
import React from 'react';
import Cta from '../../components/Cta';
import Div from '../../components/Div';
import Layout from '../../components/Layout';
import PageHeading from '../../components/PageHeading';
import Spacing from '../../components/Spacing';

export default function PortfolioPage() {
  const portfolioData = [
    {
      title: 'UI and UX Design',
      description: 'Our UI/UX design services focus on creating intuitive and visually appealing digital experiences. We prioritize user-centered design to enhance usability and engagement.',
      src: '/images/portfolio_1.png'
    },
    {
      title: 'Web Application Creation',
      description: 'We develop robust and scalable web applications tailored to business needs. From front-end interfaces to back-end systems, we ensure high performance and security. Visit: www.tmc-ghana.vercel.app',
      src: '/images/portfolio_2.png'
    },
    {
      title: 'Fund Raising Web Application',
      description: 'Our creative design services blend aesthetics with functionality to produce stunning applications. We craft unique UI components and seamless user interactions.',
      src: '/images/portfolio_3-3.jpg'
    },
    {
      title: 'New School Web App Style',
      description: 'We incorporate modern design trends and cutting-edge technologies to develop next-generation web applications, setting new industry standards. Visit: www.afro-street-food.vercel.app',
      src: '/images/portfolio_4.png'
    }
  ];

  return (
    <>
      <Head>
        <title>Portfolio - UI/UX Design & Web Applications | Afribyte</title>
        <meta 
          name="description" 
          content="Explore Afribyte’s portfolio featuring UI/UX design, custom web applications, and cutting-edge digital projects for innovative businesses." 
        />
        <meta name="keywords" content="UI/UX portfolio, web app development, Afribyte projects, digital solutions, creative design Africa, Afribyte case studies" />

        <meta property="og:title" content="Portfolio - UI/UX Design & Web Applications | Afribyte" />
        <meta property="og:description" content="Discover Afribyte’s recent digital creations — from immersive designs to smart web applications for African businesses and global users." />
        <meta property="og:image" content="/images/portfolio_hero_bg.jpeg" />
        <meta property="og:url" content="https://www.afribyte.com/portfolio" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Portfolio - UI/UX Design & Web Applications | Afribyte" />
        <meta name="twitter:description" content="See Afribyte’s most recent work in digital design and web development. Innovation and creativity meet functionality." />
        <meta name="twitter:image" content="/images/portfolio_hero_bg.jpeg" />

        <link rel="canonical" href="https://www.afribyte.com/portfolio" />
        <link rel="icon" href="/footer_logo.png" />   
      </Head>
      <Layout>
        <PageHeading
          title="Portfolio"
          bgSrc="/images/portfolio_hero_bg.jpeg"
          pageLinkText="Portfolio"
        />

        <Spacing lg="25" md="40" />
        <Spacing lg="25" md="40" />
        
        <Spacing lg="25" md="40" />
        <Div className="container text-center">
          <h2>Some Of Our Works</h2>
        </Div>
        <Spacing lg="50" md="50" />
        <Div className="container">
          {portfolioData.map((item, index) => (
            <Div className={`row align-items-center ${index % 2 !== 0 ? 'flex-row-reverse' : ''}`} key={index}>
              <Div className="col-xl-5 col-lg-6">
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </Div>
              <Div className="col-xl-6 col-lg-6">
                <img src={item.src} alt={item.title} className="img-fluid" />
              </Div>
              <Spacing lg="80" md="80" />
              <hr /> 
              <Spacing lg="80" md="80" />
            </Div>
          ))}
        </Div>
        <Spacing lg="150" md="80" />
        <Div className="container">
          <Cta
            title="Let’s discuss & create <br />something <i>amazing</i> together"
            btnText="Contact Us"
            btnLink="/contact"
            bgSrc="/images/cta_bg.jpeg"
          />
        </Div>
      </Layout>
    </>
  );
}
