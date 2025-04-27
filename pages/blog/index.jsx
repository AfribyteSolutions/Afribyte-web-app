import Head from 'next/head';
import React, { useState } from 'react';
import Cta from '../../components/Cta';
import Div from '../../components/Div';
import Layout from '../../components/Layout';
import PageHeading from '../../components/PageHeading';
import Pagination from '../../components/Pagination';
import PostStyle2 from '../../components/Post/PostStyle2';
import Sidebar from '../../components/Sidebar.jsx';
import Spacing from '../../components/Spacing';

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const postData = [
    {
      thumb: '/images/post_afribyte_1.jpg',
      title: 'How Afribyte is Transforming Africa’s Digital Landscape',
      subtitle:
        'Afribyte Solutions is at the forefront of bridging Africa’s tech gap. Through cutting-edge web and mobile solutions, we are empowering businesses and individuals. Our AI-driven innovations are fostering efficiency and scalability, making technology accessible to all. By leveraging emerging technologies, Afribyte is creating a digital ecosystem that enhances productivity, connectivity, and economic growth across the continent.',
      date: '15 Mar 2025',
      category: 'Tech & Innovation',
      href: '#'
    },
    {
      thumb: '/images/post_afribyte_2.jpg',
      title: 'The Future of HR: How Afri-HR is Redefining Workforce Management',
      subtitle:
        'Managing human resources in Africa comes with unique challenges, from compliance to workforce engagement. Afri-HR is simplifying HR processes with digital tools that streamline payroll, hiring, and employee engagement, making business operations smoother. By offering automation, data-driven insights, and employee self-service portals, Afri-HR is redefining workforce management, helping businesses reduce costs and improve efficiency.',
      date: '10 Mar 2025',
      category: 'Business & HR Tech',
      href: '#'
    },
    {
      thumb: '/images/post_afribyte_3.jpg',
      title: 'Afribooking: A Game-Changer for African Travel & Hospitality',
      subtitle:
        'From guest houses to luxury stays, Afribooking is reshaping Africa’s hospitality industry. By connecting travelers with verified accommodations, the platform ensures secure and seamless bookings, making travel planning effortless. Afribooking not only enhances trust in online bookings but also helps small and large hospitality businesses expand their reach and offer tailored experiences to their guests.',
      date: '05 Mar 2025',
      category: 'Travel & Tech',
      href: '#'
    },
    {
      thumb: '/images/post_afribyte_4.jpg',
      title: 'Why AfriVents is Revolutionizing Event Ticketing in Africa',
      subtitle:
        'AfriVents is making it easier than ever to find and attend African cultural events. With an intuitive booking system, secure payment methods, and event discovery features, it’s bringing communities together like never before. The platform enables artists, event organizers, and cultural institutions to reach a wider audience while ensuring seamless ticketing and access management for attendees.',
      date: '02 Mar 2025',
      category: 'Events & Culture',
      href: '#'
    },
    {
      thumb: '/images/post_afribyte_5.jpg',
      title: 'The Rise of Fintech in Africa: Afribyte’s Role in the Digital Economy',
      subtitle:
        'Financial technology is booming across Africa, enabling seamless transactions and financial inclusion. Afribyte is contributing by developing fintech solutions that empower businesses and individuals to thrive in a digital economy. With secure payment gateways, mobile banking integrations, and digital lending platforms, Afribyte is driving financial accessibility and innovation, making digital transactions more secure and efficient.',
      date: '25 Feb 2025',
      category: 'Fintech & Digital Economy',
      href: '#'
    }
  ];

  const filteredPosts = selectedCategory
    ? postData.filter(post => post.category === selectedCategory)
    : postData;

  return (
    <>
      <Head>
          <title>Afribyte Blog - Tech Innovation, Fintech, Events & More in Africa</title>
          <meta 
            name="description" 
            content="Read Afribyte’s latest articles on tech innovation, HR tech, African fintech, digital events, and how we’re shaping Africa’s digital economy." 
          />
          <meta 
            name="keywords" 
            content="Afribyte blog, African tech blog, fintech Africa, HR tech, event tech, digital innovation, Afribyte insights, Afribyte news" 
          />

          <meta property="og:title" content="Afribyte Blog - Tech Innovation, Fintech, Events & More in Africa" />
          <meta property="og:description" content="Explore the Afribyte blog for expert insights on Africa’s digital transformation, innovative platforms, and future-forward tech." />
          <meta property="og:image" content="/images/blog_hero_bg.jpeg" />
          <meta property="og:url" content="https://www.afribyte.com/blog" />
          <meta property="og:type" content="website" />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Afribyte Blog - Tech Innovation, Fintech, Events & More in Africa" />
          <meta name="twitter:description" content="Stay updated with Afribyte's thought leadership in African tech, HR, travel platforms, and digital culture." />
          <meta name="twitter:image" content="/images/blog_hero_bg.jpeg" />

          <link rel="canonical" href="https://www.afribyte.com/blog" />
          <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <PageHeading
          title="Afribyte Insights & Tech News"
          bgSrc="/images/blog_hero_bg.jpeg"
          pageLinkText="Blog"
        />
        <Spacing lg="150" md="80" />
        <Div className="container">
          <Div className="row">
            <Div className="col-lg-8">
              {filteredPosts.map((item, index) => (
                <Div key={index}>
                  <PostStyle2
                    thumb={item.thumb}
                    title={item.title}
                    subtitle={item.subtitle}
                    date={item.date}
                    category={item.category}
                    href={item.href}
                  />
                  {filteredPosts.length > index + 1 && <Spacing lg="95" md="60" />}
                </Div>
              ))}
              {filteredPosts.length === 0 && <p>No posts found for this category.</p>}
              <Spacing lg="60" md="40" />
              <Pagination />
            </Div>
            <Div className="col-xl-3 col-lg-4 offset-xl-1">
              <Spacing lg="0" md="80" />
              <Sidebar onCategorySelect={setSelectedCategory} />
            </Div>
          </Div>
        </Div>
        <Spacing lg="150" md="80" />
        <Div className="container">
          <Cta
            title="Join Afribyte in Revolutionizing Tech in Africa"
            btnText="Let’s Collaborate"
            btnLink="/contact"
            bgSrc="/images/cta_bg.jpeg"
          />
        </Div>
      </Layout>
    </>
  );
}
