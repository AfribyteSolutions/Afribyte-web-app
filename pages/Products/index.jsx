import Head from 'next/head';
import React from 'react';
import Cta from '../../components/Cta';
import Div from '../../components/Div';
import Layout from '../../components/Layout';
import PageHeading from '../../components/PageHeading';
import Spacing from '../../components/Spacing';
import Link from 'next/link';

export default function ProductsIndex() {
  const productData = [
    {
      title: 'Afribooking',
      description: 'Afribooking is redefining how travelers explore Africa by connecting them to a diverse selection of accommodations — from serene beach lodges to vibrant city apartments. The platform offers verified listings, detailed reviews, and a seamless reservation experience. Whether you’re a digital nomad or planning a family getaway, Afribooking empowers you to book confidently and explore Africa like never before.',
      src: '/images/portfolio_8.png',
      link: '/afribooking'
    },
    {
      title: 'Afri-HR',
      description: 'Afri-HR is more than an HR tool — it’s a complete digital workforce management system built for African enterprises. From automated onboarding to payroll, leave management, performance tracking, and real-time analytics, Afri-HR ensures businesses can scale efficiently while staying compliant. It supports remote and hybrid teams, giving both HR departments and employees the power to operate seamlessly.',
      src: '/images/service_2.jpg',
      link: '/AfriHR'
    },
    {
      title: 'AfriVents',
      description: 'AfriVents is your go-to solution for planning, promoting, and managing African events. With features like mobile ticketing, real-time analytics, artist profiles, and community building tools, event organizers can create unforgettable experiences. From concerts and festivals to business expos and local gatherings, AfriVents connects audiences with culture and creativity across the continent.',
      src: '/images/post_afribyte_4.jpg',
      link: '/AfriVent'
    }
  ];

  return (
    <>
      <Head>
        <title>Our Products - Afribooking, Afri-HR & AfriVents | Afribyte</title>
        <meta 
          name="description" 
          content="Explore Afribyte’s innovative platforms — Afribooking for travel, Afri-HR for workforce management, and AfriVents for African events. Discover digital tools tailored for Africa." 
        />
        <meta name="keywords" content="Afribooking, Afri-HR, AfriVents, Afribyte products, African tech solutions, booking apps Africa, HR software Africa, event platform Africa" />

        <meta property="og:title" content="Our Products - Afribooking, Afri-HR & AfriVents | Afribyte" />
        <meta property="og:description" content="Discover Afribyte's suite of tech platforms designed for Africa — from booking and HR to event management." />
        <meta property="og:image" content="/images/portfolio_hero_bg.jpeg" />
        <meta property="og:url" content="https://www.afribyte.com/products" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Our Products - Afribooking, Afri-HR & AfriVents | Afribyte" />
        <meta name="twitter:description" content="Explore Afribyte’s leading African tech platforms for travel, HR, and events." />
        <meta name="twitter:image" content="/images/portfolio_hero_bg.jpeg" />

        <link rel="canonical" href="https://www.afribyte.com/products" />
        <link rel="icon" href="/footer_logo.png" />
      </Head>


      <Layout>
        <PageHeading
          title="Our Products"
          bgSrc="/images/portfolio_hero_bg.jpeg"
          pageLinkText="Products"
        />

        <Spacing lg="25" md="40" />
        <Div className="container text-center">
          <h2>Discover Our Innovations</h2>
        </Div>
        <Spacing lg="50" md="50" />

        <Div className="container">
          {productData.map((item, index) => (
            <Div className={`row align-items-center ${index % 2 !== 0 ? 'flex-row-reverse' : ''}`} key={index}>
              <Div className="col-xl-5 col-lg-6">
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <Link href={item.link} legacyBehavior>
                  <a className="btn mt-3" style={{ backgroundColor: '#f88a0d', color: 'white', fontWeight: '600' }}>
                    Learn More
                  </a>
                </Link>
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
