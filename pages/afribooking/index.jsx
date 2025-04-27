import { Icon } from '@iconify/react';
import Head from 'next/head';
import React, { useState } from 'react';
import Cta from '../../components/Cta';
import Div from '../../components/Div';
import Layout from '../../components/Layout';
import PageHeading from '../../components/PageHeading';
import Portfolio from '../../components/Portfolio';
import SectionHeading from '../../components/SectionHeading';
import Spacing from '../../components/Spacing';

export default function AfribookingPage() {
  const [active, setActive] = useState('all');
  const [itemShow, setItemShow] = useState(7);
  const portfolioData = [
    {
      title: 'Log In/ Sign Up',
      subtitle: 'See Details',
      href: '/portfolio/portfolio-details',
      src: '/images/portfolio_6.png',
      category: 'ui_ux_design',
    },
    {
      title: 'Explore Page',
      subtitle: 'See Details',
      href: '/portfolio/portfolio-details',
      src: '/images/explore.png',
      category: 'logo_design',
    },
    {
      title: 'Profit Earnings',
      subtitle: 'See Details',
      href: '/portfolio/portfolio-details',
      src: '/images/portfolio_5.png',
      category: 'web_design',
    },
    {
      title: 'Afribooking-Africa',
      subtitle: 'See Details',
      href: '/portfolio/portfolio-details',
      src: '/images/portfolio_7.png',
      category: 'mobile_apps',
    },
    {
      title: 'Afribooking-Tabs',
      subtitle: 'These tabs take you to different parts of the application',
      href: '/portfolio/portfolio-details',
      src: '/images/explore-2.png',
      category: 'Explore',
    
    }
  ];
  const categoryMenu = [
    {
      title: 'Web Design',
      category: 'web_design',
    },
    {
      title: 'UI/UX Design',
      category: 'ui_ux_design',
    },
    {
      title: 'Mobile Apps',
      category: 'mobile_apps',
    },
    {
      title: 'Logo Design',
      category: 'logo_design',
    },
  ];
  return (
    <>
      <Head>
        <title>Afribooking - Discover Authentic Stays Across Africa | Afribyte</title>
        <meta 
          name="description" 
          content="Afribooking connects travelers to unique accommodations across Africa. Book authentic homes, eco-lodges, villas, and guesthouses with ease." 
        />
        <meta 
          name="keywords" 
          content="Afribooking, African travel, holiday homes, booking platform Africa, eco-lodges, guesthouses, African tourism, Afribyte, authentic African stays" 
        />

        <meta property="og:title" content="Afribooking - Discover Authentic Stays Across Africa | Afribyte" />
        <meta property="og:description" content="Explore the beauty of Africa with Afribooking. Book cozy homes, cultural getaways, and community-powered stays on our trusted travel platform." />
        <meta property="og:image" content="/images/portfolio_8.png" />
        <meta property="og:url" content="https://www.afribyte.com/afribooking" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Afribooking - Discover Authentic Stays Across Africa" />
        <meta name="twitter:description" content="Travel Africa with ease. Find unique accommodations and connect with local culture through Afribooking." />
        <meta name="twitter:image" content="/images/portfolio_8.png" />

        <link rel="canonical" href="https://www.afribyte.com/afribooking" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <PageHeading
          title="Afribooking"
          bgSrc="images/portfolio_hero_bg.jpeg"
          pageLinkText="Afribooking"
        />
        <Spacing lg="145" md="80" />
        <Div className="container">
          <Div className="cs-portfolio_1_heading">
            <SectionHeading title="Leading Holiday Home Booking Platform" subtitle="Afribooking" />
            <img src="/images/portfolio_8.png" style={{ width: "230px", height: "auto" }} />
            
            {/* <Div className="cs-filter_menu cs-style1">
              <ul className="cs-mp0 cs-center">
                <li className={active === 'all' ? 'active' : ''}>
                  <span onClick={() => setActive('all')}>All</span>
                </li>
                {categoryMenu.map((item, index) => (
                  <li
                    className={active === item.category ? 'active' : ''}
                    key={index}
                  >
                    <span onClick={() => setActive(item.category)}>
                      {item.title}
                    </span>
                  </li>
                ))}
              </ul>
            </Div> */}
          </Div>
          <br></br><p>
          Afribooking by Afribyte is an innovative booking platform designed to revolutionize travel and accommodation across Africa. Starting in Cameroon, Afribooking opens the doors to a world of authentic experiences by connecting travelers with unique stays, ranging from cozy guesthouses to luxurious villas and eco-friendly lodges.
          Our platform celebrates the richness and diversity of African culture by showcasing locally-owned properties and empowering hosts to share their stories and traditions.
          <br></br> Afribooking is for everyone—whether you’re a global traveler seeking adventure, a business professional looking for a comfortable stay, or a family planning a memorable getaway in Africa.
          With a user-friendly interface, secure payment options, and a focus on fostering community connections, Afribooking makes discovering the beauty and charm of Africa seamless and accessible. Wherever your journey takes you, Afribooking is your trusted gateway to the best of Africa.
          </p>
          <Spacing lg="90" md="45" />
          <Div className="row">
            {portfolioData.slice(0, itemShow).map((item, index) => (
              <Div
                className={`${
                  index === 3 || index === 6 ? 'col-lg-8' : 'col-lg-4'
                } ${
                  active === 'all'
                    ? ''
                    : !(active === item.category)
                    ? 'd-none'
                    : ''
                }`}
                key={index}
              >
                <Portfolio
                  title={item.title}
                  subtitle={item.subtitle}
                  href={item.href}
                  src={item.src}
                  variant="cs-style1 cs-type1"
                />
                <Spacing lg="25" md="25" />
              </Div>
            ))}
          </Div>

          <Div className="text-center">
            {portfolioData.length <= itemShow ? (
              ''
            ) : (
              <>
                <Spacing lg="65" md="40" />
                <span
                  className="cs-text_btn"
                  onClick={() => setItemShow(itemShow + 3)}
                >
                  <span>Download Application</span>
                  <Icon icon="bi:arrow-right" />
                </span>
              </>
            )}
          </Div>
        </Div>
        <Spacing lg="145" md="80" />
        <Cta
          title="infotech@afribytesolution.com"
          bgSrc="/images/cta_bg_2.jpeg"
          variant="rounded-0"
        />
      </Layout>
    </>
  );
}
