import Head from "next/head";
import React from "react";
import Cta from "../components/Cta";
import Div from "../components/Div";
import FunFact from "../components/FunFact";
import Layout from "../components/Layout";
import PageHeading from "../components/PageHeading";
import SectionHeading from "../components/SectionHeading";
import TeamSlider from "../components/Slider/TeamSlider";
import Spacing from "../components/Spacing";

export default function About() {
  const funfaceData = [
    {
      title: "Global Happy Clients",
      factNumber: "50",
    },
    {
      title: "Project",
      factNumber: "70",
    },
    {
      title: "Dedicated Team",
      factNumber: "20",
    },
    {
      title: "Cumulative Experience",
      factNumber: "30",
    },
  ];
  return (
    <>
       <Head>
        <title>Home - About | Afribyte</title>
        <meta
          name="description"
          content="Learn more about Afribyte, an innovative company focused on building technology solutions for African societies."
        />
        <meta
          name="keywords"
          content="Afribyte, innovative technology solutions, African society, tech company, Afribyte about"
        />
        <meta
          name="author"
          content="Afribyte Solutions"
        />
        <meta property="og:title" content="Home - About | Afribyte" />
        <meta
          property="og:description"
          content="Discover Afribyte, a company dedicated to creating innovative tech solutions that empower African societies."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="URL-to-image" // Replace with actual image URL (optional)
        />
        <meta
          property="og:url"
          content="https://www.afribyte.com/about" // Replace with your actual URL
        />
        <meta name="twitter:title" content="Home - About | Afribyte" />
        <meta
          name="twitter:description"
          content="Discover Afribyte, a company dedicated to creating innovative tech solutions that empower African societies."
        />
        <meta name="twitter:image" content="URL-to-image" /> // Replace with actual image URL (optional)
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://www.afribyte.com/about" /> // Replace with your actual URL
      </Head>

      <Layout>
        {/* Start Page Heading Section */}
        <PageHeading
          title="About Us"
          bgSrc="images/about_hero_bg.jpeg"
          pageLinkText="About Us"
        />
        {/* End Page Heading Section */}

        {/* Start About Section */}
        <Spacing lg="150" md="80" />
        <Div className="container">
          <Div className="row">
            <Div className="col-xl-5 col-lg-7">
              <SectionHeading
                title="Your trusted partner for business"
                subtitle="About Our Agency"
              >
                <Spacing lg="30" md="20" />
                <p className="cs-m0">
                  Afribyte Solution specialises in delivering custom IT
                  solutions to suit the needs of companies of every size, mainly
                  within the African continent. Our products and services are
                  carefully and efficiently crafted to have a perfect balance
                  between cost and efficiency. We provide, custom, white label
                  and shared solutions, depending on the needs of the client.
                </p>
                <Spacing lg="30" md="30" />
                <Div className="cs-separator cs-accent_bg"></Div>
                <Spacing lg="25" md="40" />
              </SectionHeading>
            </Div>
            <Div className="col-lg-5 offset-xl-2">
              <img
                src="/images/about_img_1.jpg"
                alt="About"
                className="w-100 cs-radius_15"
              />
              <Spacing lg="25" md="25" />
            </Div>
            <Div className="col-lg-7">
              <img
                src="/images/about_img_2.jpg"
                alt="About"
                className="w-100 cs-radius_15"
              />
              <Spacing lg="25" md="25" />
            </Div>
            <Div className="col-lg-5">
              <img
                src="/images/about_img_3.jpg"
                alt="About"
                className="w-100 cs-radius_15"
              />
              <Spacing lg="25" md="25" />
            </Div>
          </Div>
        </Div>
        <Spacing lg="75" md="55" />
        {/* End About Section */}

        {/* Start Fun Fact Section */}
        <Div className="container">
          <FunFact
            title="Our fun fact"
            subtitle="Did you know? Afribyte Solutions is bridging the tech gap in Africa, one innovative solution at a time"
            data={funfaceData}
          />
        </Div>
        {/* End Fun Fact Section */}

        {/* Start Why Choose Section */}
        <Spacing lg="100" md="80" />
        <Div className="container">
          <Div className="row">
            <Div className="col-xl-5 col-lg-6">
              <Div className="cs-image_layer cs-style1">
                <Div className="cs-image_layer_in">
                  <img
                    src="/images/about_img_4.jpg"
                    alt="About"
                    className="w-100 cs-radius_15"
                  />
                </Div>
              </Div>
              <Spacing lg="0" md="40" />
            </Div>
            <Div className="col-xl-5 offset-xl-1 col-lg-6">
              <SectionHeading
                title="Highly experienced people with us"
                subtitle="Why Choose Us"
              >
                <Spacing lg="30" md="20" />
                <p className="cs-m0">
                  This is the main factor that sets us apart from our
                  competition and allows us to deliver a specialist business
                  consultancy service. Our team applies its wide-ranging
                  experience to determining. Through our years of experience,
                  we’ve also learned that while each channel.
                </p>
                <Spacing lg="15" md="15" />
                <p className="cs-m0">
                  This is the main factor that sets us apart from our
                  competition and allows us to deliver a specialist business
                  consultancy service. Our team applies its wide-ranging
                  experience to determining.
                </p>
                <Spacing lg="30" md="30" />
                <Div className="cs-separator cs-accent_bg"></Div>
                <Spacing lg="25" md="0" />
              </SectionHeading>
            </Div>
          </Div>
        </Div>
        {/* End Why Choose Section */}

        {/* Start Team Section */}
        <Spacing lg="145" md="80" />
        <Div className="container">
          <SectionHeading
            title="Awesome team <br/>members"
            subtitle="Our Team"
            variant="cs-style1"
          />
          <Spacing lg="85" md="45" />
          <TeamSlider />
        </Div>
        {/* End Team Section */}

        {/* Start CTA Section */}
        <Spacing lg="150" md="80" />
        <Div className="container">
          <Cta
            title="Let’s discuss & make <br />something <i>cool</i> together"
            btnText="Contact Us"
            btnLink="/contact"
            bgSrc="/images/cta_bg.jpeg"
          />
        </Div>
        {/* End CTA Section */}
      </Layout>
    </>
  );
}
