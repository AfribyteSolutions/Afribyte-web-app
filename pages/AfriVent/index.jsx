import { Icon } from "@iconify/react";
import Head from "next/head";
import React, { useState } from "react";
import Cta from "../../components/Cta";
import Div from "../../components/Div";
import Layout from "../../components/Layout";
import PageHeading from "../../components/PageHeading";

import SectionHeading from "../../components/SectionHeading";
import Spacing from "../../components/Spacing";

export default function AfriVent() {
  return (
    <>
      <Head>
        <title>AfriVents - Africa’s All-in-One Event Booking & Ticketing Platform</title>
        <meta 
          name="description" 
          content="Discover, promote, and attend events with AfriVents – the future of event ticketing in Africa. Secure bookings, digital access, and seamless management for all events." 
        />
        <meta 
          name="keywords" 
          content="AfriVents, event ticketing Africa, Afribyte events, African festivals, book African events, event booking platform, ticket management system Africa" 
        />

        <meta property="og:title" content="AfriVents - Africa’s All-in-One Event Booking & Ticketing Platform" />
        <meta property="og:description" content="AfriVents connects attendees and organizers through an intuitive, secure event platform. Book, host, and attend events effortlessly across Africa." />
        <meta property="og:image" content="/images/post_afribyte_4.jpg" />
        <meta property="og:url" content="https://www.afribyte.com/afrivents" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AfriVents - Africa’s All-in-One Event Booking & Ticketing Platform" />
        <meta name="twitter:description" content="Your gateway to African events – concerts, festivals, business expos and more, with secure digital ticketing from Afribyte." />
        <meta name="twitter:image" content="/images/post_afribyte_4.jpg" />

        <link rel="canonical" href="https://www.afribyte.com/afrivents" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <PageHeading
          title="AfriVents"
          bgSrc="/images/portfolio_hero_bg.jpeg"
          pageLinkText="AfriVents"
        />
        <Spacing lg="145" md="80" />
        <Div className="container">
          <Div className="cs-portfolio_1_heading">
            <SectionHeading
              title="Seamless Event Ticketing"
              subtitle="AfriVents"
            />
            <img
              src="/images/post_afribyte_4.jpg"
              style={{ width: "280px", height: "auto" }}
            />
          </Div>
          <br />
          <p>
            AfriVents by Afribyte is an all-in-one event management and
            ticketing platform, making it easier than ever to discover, promote,
            and attend events across Africa. Whether it's concerts, festivals,
            business conferences, or local gatherings, AfriVents connects event
            organizers and attendees with a seamless booking experience.
            <br />
            <br />
            Users can explore upcoming events, purchase tickets securely, and
            get instant digital access to their bookings. Event organizers can
            manage ticket sales, monitor attendance, and engage with their
            audience effortlessly.
            <br />
            <br />
            With AfriVents, finding and attending your next favorite event has
            never been easier. Experience the future of event ticketing today!
          </p>
          <Spacing lg="40" md="45" />

          {/* --- Image Grid --- */}
          <Div
            className="cs-afrivent-image-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "20px",
              marginTop: "40px",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* Top Row */}
            {/* <Div style={{ gridColumn: '1 / 2', display: 'flex', justifyContent: 'center' }}>
    <img 
      src="/images/Afri-vent1.png" 
      alt="AfriVent 1" 
      style={{ width: '100%', borderRadius: '8px' }} 
    />
  </Div>
  <Div style={{ gridColumn: '2 / 3', display: 'flex', justifyContent: 'center' }}>
    <img 
      src="/images/Afri-vent2.png" 
      alt="AfriVent 2" 
      style={{ width: '100%', borderRadius: '8px' }} 
    />
  </Div> */}

            {/* Bottom Row (smaller) */}
            <Div
              style={{
                gridColumn: "1 / 3",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <img
                src="/images/afri-vent3.png"
                alt="AfriVent 3"
                style={{ width: "100%", borderRadius: "8px", height: "50vh" }}
              />
            </Div>
          </Div>

          <Spacing lg="90" md="45" />
          <Div className="text-center">
            <Spacing lg="65" md="40" />
            <span className="cs-text_btn">
              <span>Coming Soon</span>
              <Icon icon="bi:arrow-right" />
            </span>
          </Div>
        </Div>
        <Spacing lg="145" md="80" />
        <Cta
          title="Infotech@afribytesolution.com"
          bgSrc="/images/cta_bg_2.jpeg"
          variant="rounded-0"
        />
      </Layout>
    </>
  );
}
