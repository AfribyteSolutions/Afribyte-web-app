import { Icon } from '@iconify/react';
import Head from 'next/head';
import React from 'react';
import Div from '../components/Div';
import Layout from '../components/Layout';
import PageHeading from '../components/PageHeading';
import SectionHeading from '../components/SectionHeading';
import Spacing from '../components/Spacing';
import ContactInfoWidget from '../components/Widget/ContactInfoWidget';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact</title>
        <meta name="description" content="Get in touch with Afribyte. We would love to hear about your project and discuss how we can collaborate. Fill out the contact form or reach us directly." />
        <meta name="keywords" content="contact, Afribyte, web development, project, business inquiry, contact form" />
        <meta name="robots" content="index, follow" />
        
        <meta property="og:title" content="Contact Afribyte" />
        <meta property="og:description" content="Reach out to Afribyte to discuss your project or business inquiry. We are here to assist you!" />
        <meta property="og:image" content="/images/contact_hero_bg.jpeg" />
        <meta property="og:url" content="https://www.afribyte.com/contact" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Afribyte" />
        <meta name="twitter:description" content="Get in touch with Afribyte to start your project or get assistance. We are here to help!" />
        <meta name="twitter:image" content="/images/contact_hero_bg.jpeg" />
        
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <PageHeading
          title="Contact Us"
          bgSrc="/images/contact_hero_bg.jpeg"
          pageLinkText="Contact"
        />
        <Spacing lg="150" md="80" />
        <Div className="container">
          <Div className="row">
            <Div className="col-lg-6">
              <SectionHeading
                title="Do you have a project <br/>in your mind?"
                subtitle="Getting Touch"
              />
              <Spacing lg="55" md="30" />
              <ContactInfoWidget withIcon />
              <Spacing lg="0" md="50" />
            </Div>
            <Div className="col-lg-6">
              <form action="#" className="row">
                <Div className="col-sm-6">
                  <label className="cs-primary_color">Full Name*</label>
                  <input type="text" className="cs-form_field" />
                  <Spacing lg="20" md="20" />
                </Div>
                <Div className="col-sm-6">
                  <label className="cs-primary_color">Email*</label>
                  <input type="text" className="cs-form_field" />
                  <Spacing lg="20" md="20" />
                </Div>
                <Div className="col-sm-6">
                  <label className="cs-primary_color">Project Type*</label>
                  <input type="text" className="cs-form_field" />
                  <Spacing lg="20" md="20" />
                </Div>
                <Div className="col-sm-6">
                  <label className="cs-primary_color">Mobile*</label>
                  <input type="text" className="cs-form_field" />
                  <Spacing lg="20" md="20" />
                </Div>
                <Div className="col-sm-12">
                  <label className="cs-primary_color">Mobile*</label>
                  <textarea
                    cols="30"
                    rows="7"
                    className="cs-form_field"
                  ></textarea>
                  <Spacing lg="25" md="25" />
                </Div>
                <Div className="col-sm-12">
                  <button className="cs-btn cs-style1">
                    <span>Send Message</span>
                    <Icon icon="bi:arrow-right" />
                  </button>
                </Div>
              </form>
            </Div>
          </Div>
        </Div>
        <Spacing lg="150" md="80" />
        <Div className="cs-google_map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96652.27317354927!2d-74.33557928194516!3d40.79756494697628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3a82f1352d0dd%3A0x81d4f72c4435aab5!2sTroy+Meadows+Wetlands!5e0!3m2!1sen!2sbd!4v1563075599994!5m2!1sen!2sbd"
            allowFullScreen
            title="Google Map"
          />
        </Div>
        <Spacing lg="50" md="40" />
      </Layout>
    </>
  );
}
