import Head from 'next/head';
import Card from '../components/Card';
import Cta from '../components/Cta';
import Div from '../components/Div';
import FunFact from '../components/FunFact';
import Hero from '../components/Hero';
import Layout from '../components/Layout';
import LogoList from '../components/LogoList';
import MovingText from '../components/MovingText';
import SectionHeading from '../components/SectionHeading';
import PortfolioSlider from '../components/Slider/PortfolioSlider';
import TeamSlider from '../components/Slider/TeamSlider';
import TestimonialSlider from '../components/Slider/TestimonialSlider';
import TimelineSlider from '../components/Slider/TimelineSlider';
import Spacing from '../components/Spacing';
import VideoModal from '../components/VideoModal';

export default function Home() {
  // Hero Social Links
  const heroSocialLinks = [
    {
      name: 'Facebook',
      links: '/',
    },
    {
      name: 'Twitter',
      links: '/',
    },
    {
      name: 'LinkedIn',
      links: '/',
    },
  ];

  // FunFact Data
  const funfaceData = [
    {
      title: 'Global Happy Clients',
      factNumber: '50',
    },
    {
      title: 'Project',
      factNumber: '70',
    },
    {
      title: 'Dedicated Team',
      factNumber: '20',
    },
    {
      title: 'Cumulative Experience',
      factNumber: '30',
    },
  ];

  return (
    <>
      <Head>
          <title>Afribyte - Top IT Solutions & Digital Agency in Africa</title>
          <meta 
            name="description" 
            content="Afribyte is Africa’s leading creative tech agency offering innovative IT solutions, web & app development, UI/UX design, and business consultancy services." 
          />
          <meta name="keywords" content="Afribyte, IT solutions Africa, web development, UI/UX design, digital agency, app development, tech in Africa" />
          <meta property="og:title" content="Afribyte - Top IT Solutions & Digital Agency in Africa" />
          <meta property="og:description" content="Explore Afribyte's innovative IT solutions built for businesses in Africa. From web design to full-scale applications, we bring your vision to life." />
          <meta property="og:image" content="/images/hero_bg.jpeg" />
          <meta property="og:url" content="https://www.afribyte.com" />
          <meta property="og:type" content="website" />
          <link rel="canonical" href="https://www.afribyte.com" />
          <link rel="icon" href="/footer_logo.png" />
      </Head>
      <Layout>
        {/* Start Hero Section */}
        <Hero
          title="Creativity In <br/>Our Blood Line"
          subtitle="We deliver best problem solving solution for our clients and provide finest finished products to care for your current and future needs."
          btnText="Contact Us Now"
          btnLink="/contact"
          scrollDownId="#service"
          socialLinksHeading="Follow Us"
          heroSocialLinks={heroSocialLinks}
          bgImageUrl="/images/hero_bg.jpeg"
        />
        {/* End Hero Section */}

        {/* Start FunFact Section */}
        <div className="container">
          <FunFact
            variant="cs-type1"
            title="Our fun fact"
            subtitle="Did you know? Afribyte Solutions is bridging the tech gap in Africa, one innovative solution at a time"
            data={funfaceData}
          />
        </div>
        {/* End FunFact Section */}

        {/* Start Service Section */}
        <Spacing lg="150" md="80" />
        <Div id="service">
          <Div className="container">
            <Div className="row">
              <Div className="col-xl-4">
                <SectionHeading
                  title="Services we can help you with"
                  subtitle="What We Do Outstandingly"
                  btnText="See All Services"
                  btnLink="/service"
                />
                <Spacing lg="90" md="45" />
              </Div>
              <Div className="col-xl-8">
                <Div className="row">
                  <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                  <Div className="col-lg-3 col-sm-6">
                    <Card
                      title="UI/UX design"
                      link="/service/service-details"
                      src="/images/service_1.jpg"
                      alt="Service"
                    />
                    <Spacing lg="0" md="30" />
                  </Div>
                  <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                  <Div className="col-lg-3 col-sm-6">
                    <Card
                      title="Application Development"
                      link="/service/service-details"
                      src="/images/service_2.jpg"
                      alt="Service"
                    />
                    <Spacing lg="0" md="30" />
                  </Div>
                  <Div className="col-lg-3 col-sm-6">
                    <Card
                      title="Consultancy"
                      link="/service/service-details"
                      src="/images/service_3.jpg"
                      alt="Service"
                    />
                    <Spacing lg="0" md="30" />
                  </Div>
                  <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                  <Div className="col-lg-3 col-sm-6">
                    <Card
                      title="Website and Web-App Developement."
                      link="/service/service-details"
                      src="/images/service_4.jpg"
                      alt="Service"
                    />
                    <Spacing lg="0" md="30" />
                  </Div>
                  <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                </Div>
              </Div>
            </Div>
          </Div>
        </Div>
        {/* End Service Section */}

        {/* Start Portfolio Section */}
        <Spacing lg="150" md="50" />
        <Div>
          <Div className="container">
            <SectionHeading
              title="Our Portfolio"
              subtitle="Latest Projects"
              variant="cs-style1 text-center"
            />
            <Spacing lg="90" md="45" />
          </Div>
          <PortfolioSlider />
        </Div>
        {/* End Portfolio Section */}

        {/* Start Video Block Section */}
        <Spacing lg="130" md="70" />
        <Div className="container">
          <h2 className="cs-font_50 cs-m0 text-center cs-line_height_4">
          Transform your vision into reality with Afribyte Solutions—where innovation meets excellence to deliver unmatched IT solutions
          </h2>
          <Spacing lg="70" md="70" />
          <img src="/images/video_bg.jpg" alt="Video Thumbnail" />
        </Div>
        {/* End Video Block Section */}

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
        <Spacing lg="150" md="80" />
        {/* End Team Section */}

        {/* Start Testimonial Section */}
        <TestimonialSlider />
        {/* End Testimonial Section */}

        {/* Start Blog Section */}
        {/* <Spacing lg="150" md="80" />
        <Div className="cs-shape_wrap_4">
          <Div className="cs-shape_4"></Div>
          <Div className="cs-shape_4"></Div>
          <Div className="container">
            <Div className="row">
              <Div className="col-xl-4">
                <SectionHeading
                  title="Explore recent publication"
                  subtitle="Our Blog"
                  btnText="View More Blog"
                  btnLink="/blog"
                />
                <Spacing lg="90" md="45" />
              </Div>
              <Div className="col-xl-7 offset-xl-1">
                <Div className="cs-half_of_full_width">
                  <PostSlider />
                </Div>
              </Div>
            </Div>
          </Div>
        </Div> */}
        {/* End Blog Section */}

        {/* Start MovingText Section */}
        <Spacing lg="125" md="70" />
        <MovingText text="Our reputed world wide partners" />
        <Spacing lg="105" md="70" />
        {/* End MovingText Section */}

        {/* Start LogoList Section */}
        <Div className="container">
          <LogoList />
        </Div>
        <Spacing lg="150" md="80" />
        {/* End LogoList Section */}

        {/* Start CTA Section */}
        <Div className="container">
          <Cta
            title="Let’s discuss & make <br />something <i>cool</i> together"
            btnText="Book an Appointment"
            btnLink="/contact"
            bgSrc="/images/cta_bg.jpeg"
          />
        </Div>
        {/* End CTA Section */}
      </Layout>
    </>
  );
}
