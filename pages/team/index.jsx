import Head from 'next/head';
import React from 'react';
import Cta from '../../components/Cta';
import Div from '../../components/Div';
import Layout from '../../components/Layout';
import PageHeading from '../../components/PageHeading';
import SectionHeading from '../../components/SectionHeading';
import Spacing from '../../components/Spacing';
import Team from '../../components/Team';

export default function TeamPage() {
  const teamData = [
    {
      memberImage: '/images/team1.jpg',
      memberName: 'H. Angabo Abiyah',
      memberDesignation: 'Chief Executive Officer',
      // memberSocial: {
      //   linkedin: '/',
      //   twitter: '/',
      //   youtube: '/',
      //   facebook: '/',
      // },
    },
    {
      memberImage: '/images/team2.jpg',
      memberName: 'Marcel Mbanyam',
      memberDesignation: 'Chief Technical Officer',
      // memberSocial: {
      //   linkedin: '/',
      //   twitter: '/',
      //   youtube: '/',
      //   facebook: '/',
      // },
    },
    {
      memberImage: '/images/team3.jpg',
      memberName: 'Coretta Abiyah',
      memberDesignation: 'Chief Operations Officer',
      // memberSocial: {
      //   linkedin: '/',
      //   twitter: '/',
      //   youtube: '/',
      //   facebook: '/',
      // },
    },
    {
      memberImage: '/images/team4.jpg',
      memberName: 'Mensah Samuel',
      memberDesignation: 'Developer',
      // memberSocial: {
      //   linkedin: '/',
      //   twitter: '/',
      //   youtube: '/',
      //   facebook: '/',
      // },
    },
    {
      memberImage: '/images/team5.jpg',
      memberName: 'Aning Richmond',
      memberDesignation: 'Developer',
      // memberSocial: {
      //   linkedin: '/',
      //   twitter: '/',
      //   youtube: '/',
      //   facebook: '/',
      // },
    }
  ];
  return (
    <>
      <Head>
        <title>Meet the Afribyte Team - Tech Experts Driving Innovation</title>
        <meta 
          name="description" 
          content="Get to know the dedicated professionals behind Afribyte — a team of tech visionaries committed to delivering world-class digital solutions across Africa." 
        />
        <meta name="keywords" content="Afribyte team, tech experts Africa, software developers, UI/UX designers, CTO, CEO, innovation leaders" />
        <meta property="og:title" content="Meet the Afribyte Team - Tech Experts Driving Innovation" />
        <meta property="og:description" content="Discover the talented individuals behind Afribyte's success. From leadership to development, our team fuels African innovation." />
        <meta property="og:image" content="/images/team1.jpg" />
        <meta property="og:url" content="https://www.afribyte.com/team" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://www.afribyte.com/team" />
        <link rel="icon" href="/footer_logo.png" />
      </Head>
      <Layout>
        <PageHeading
          title="Our Team"
          bgSrc="images/team_hero_bg.jpeg"
          pageLinkText="Team"
        />
        <Spacing lg="145" md="80" />
        <Div className="container">
          <SectionHeading
            title="Meet our awesome <br/>team members"
            subtitle="Our Team"
            variant="cs-style1 text-center"
          />
          <Spacing lg="90" md="45" />
          <Div className="row">
            {teamData.map((item, index) => (
              <Div key={index} className="col-lg-3 col-sm-6">
                <Team
                  memberImage={item.memberImage}
                  memberName={item.memberName}
                  memberDesignation={item.memberDesignation}
                  // memberSocial={item.memberSocial}
                />
                <Spacing lg="80" md="30" />
              </Div>
            ))}
          </Div>
          <Spacing lg="70" md="50" />
          <Div className="container">
            <Cta
              title="Let’s connect and make <br />something <i>cool</i> together"
              btnText="Apply For Meeting"
              btnLink="/contact"
              bgSrc="/images/cta_bg.jpeg"
            />
          </Div>
        </Div>
      </Layout>
    </>
  );
}
