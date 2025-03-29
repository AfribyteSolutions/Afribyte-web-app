import Head from 'next/head';
import React from 'react';
import Card from '../../components/Card';
import Cta from '../../components/Cta';
import Div from '../../components/Div';
import Layout from '../../components/Layout';
import PageHeading from '../../components/PageHeading';
import PricingTableList from '../../components/PricingTable/PricingTableList';
import SectionHeading from '../../components/SectionHeading';
import TestimonialSlider from '../../components/Slider/TestimonialSlider';
import Spacing from '../../components/Spacing';

export default function Service() {
  return (
    <>
      <Head>
        <title>Service</title>
        <meta name="description" content="The Services we provide as an Information Technology Company" />
        <link rel="icon" href="/footer_logo.png" />
      </Head>
      <Layout>
        <PageHeading
          title="Services"
          bgSrc="images/service_hero_bg.jpeg"
          pageLinkText="Services"
        />
  
        <Spacing lg="25" md="40" />
        <Spacing lg="25" md="40" />
                {/* Start About Section */}
                <Div className="container">
          {/* UI/UX Design Section */}
          <Div className="row align-items-center">
            <Div className="col-xl-5 col-lg-6">
              <SectionHeading
                title="Crafting Intuitive Experiences"
                subtitle="UI/UX Design"
              >
                <Spacing lg="30" md="20" />
                <p className="cs-m0">
                  We design user interfaces that are not only visually appealing but also 
                  highly functional. Our team focuses on user-centric experiences that enhance engagement 
                  and usability. From wireframing to prototyping, we ensure your digital products are seamless and intuitive.
                </p>
                <Spacing lg="30" md="30" />
                <Div className="cs-separator cs-accent_bg"></Div>
                <Spacing lg="25" md="40" />
              </SectionHeading>
            </Div>
            <Div className="col-xl-6 col-lg-6">
              <img src="/images/ui-ux-design.jpg" alt="UI/UX Design" className="img-fluid" />
            </Div>
          </Div>

          <Spacing lg="150" md="80" />

          {/* Application Development Section */}
          <Div className="row align-items-center flex-row-reverse">
            <Div className="col-xl-5 col-lg-6">
              <SectionHeading
                title="Building Scalable Applications"
                subtitle="Application Development"
              >
                <Spacing lg="30" md="20" />
                <p className="cs-m0">
                  Our expertise in mobile and desktop application development ensures that we deliver 
                  scalable, high-performance solutions. Whether it's iOS, Android, or cross-platform development, 
                  we create applications that meet business objectives and enhance user experience.
                </p>
                <Spacing lg="30" md="30" />
                <Div className="cs-separator cs-accent_bg"></Div>
                <Spacing lg="25" md="40" />
              </SectionHeading>
            </Div>
            <Div className="col-xl-6 col-lg-6">
              <img src="/images/app-development.jpg" alt="Application Development" className="img-fluid" />
            </Div>
          </Div>

          <Spacing lg="150" md="80" />

          {/* Website and Web App Development Section */}
          <Div className="row align-items-center">
            <Div className="col-xl-5 col-lg-6">
              <SectionHeading
                title="Innovative Web Solutions"
                subtitle="Website & Web App Development"
              >
                <Spacing lg="30" md="20" />
                <p className="cs-m0">
                  We specialize in creating responsive, high-performing websites and web applications. 
                  Our solutions are tailored to meet business needs, ensuring security, scalability, and seamless functionality.
                </p>
                <Spacing lg="30" md="30" />
                <Div className="cs-separator cs-accent_bg"></Div>
                <Spacing lg="25" md="40" />
              </SectionHeading>
            </Div>
            <Div className="col-xl-6 col-lg-6">
              <img src="/images/web-development.jpg" alt="Web Development" className="img-fluid" />
            </Div>
          </Div>

          <Spacing lg="150" md="80" />

          {/* Consultancy Section */}
          <Div className="row align-items-center flex-row-reverse">

            <Div className="col-xl-5 col-lg-6">
              <SectionHeading
                title="Expert Business Consulting"
                subtitle="Consultancy Services"
              >
                <Spacing lg="30" md="20" />
                <p className="cs-m0">
                  Our consultancy services help businesses navigate the complexities of the digital world. 
                  We provide strategic insights, technology solutions, and operational guidance to optimize growth 
                  and efficiency.
                </p>
                <Spacing lg="30" md="30" />
                <Div className="cs-separator cs-accent_bg"></Div>
                <Spacing lg="25" md="40" />
              </SectionHeading>
            </Div>
            <Div className="col-xl-6 col-lg-6">
              <img src="/images/consultancy.jpg" alt="Consultancy Services" className="img-fluid" />
            </Div>
          </Div>

          <Spacing lg="150" md="80" />
        </Div>
        <TestimonialSlider />
        <Spacing lg="150" md="80" />
        <Div className="container">
          <Cta
            title="Let’s discuss & make <br />something <i>cool</i> together"
            btnText="Contact Us"
            btnLink="/contact"
            bgSrc="/images/cta_bg.jpeg"
          />
        </Div>
      </Layout>
    </>
  );
}
