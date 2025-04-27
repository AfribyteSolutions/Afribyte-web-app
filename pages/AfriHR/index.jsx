import { Icon } from "@iconify/react";
import Head from "next/head";
import React, { useState } from "react";
import Cta from "../../components/Cta";
import Div from "../../components/Div";
import Layout from "../../components/Layout";
import PageHeading from "../../components/PageHeading";

import SectionHeading from "../../components/SectionHeading";
import Spacing from "../../components/Spacing";

export default function AfriHR() {
  return (
    <>
      <Head>
        <title>Afri-HR - Smart Human Resource Management for African Businesses</title>
        <meta 
          name="description" 
          content="Afri-HR is an all-in-one HR platform for African companies. Streamline hiring, payroll, onboarding, and performance tracking with secure digital tools." 
        />
        <meta 
          name="keywords" 
          content="Afri-HR, HR management Africa, payroll system, employee tracking, recruitment software, workforce automation, Afribyte HR platform" 
        />

        <meta property="og:title" content="Afri-HR - Smart Human Resource Management for African Businesses" />
        <meta property="og:description" content="Automate your HR operations with Afri-HR. From recruitment to payroll, simplify how you manage people and compliance in Africa." />
        <meta property="og:image" content="/images/afri-hr.jpg" />
        <meta property="og:url" content="https://www.afribyte.com/afrihr" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Afri-HR - Smart Human Resource Management for African Businesses" />
        <meta name="twitter:description" content="Afri-HR is transforming HR across Africa. Discover how digital tools make workforce management simple, fast, and secure." />
        <meta name="twitter:image" content="/images/afri-hr.jpg" />

        <link rel="canonical" href="https://www.afribyte.com/afrihr" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <PageHeading
          title="Afri-HR"
          bgSrc="/images/portfolio_hero_bg.jpeg"
          pageLinkText="Afri-HR"
        />
        <Spacing lg="145" md="80" />
        <Div className="container">
          <Div className="cs-portfolio_1_heading">
            <SectionHeading
              title="Simplifying HR Management"
              subtitle="Afri-HR"
            />
            <img
              src="/images/afri-hr.jpg"
              style={{ width: "230px", height: "auto" }}
            />
          </Div>
          <br />
          <p>
            Afri-HR by Afribyte is a comprehensive human resource management
            platform built to help companies streamline their HR processes. From
            recruitment and onboarding to payroll and employee performance
            tracking, Afri-HR provides businesses with the tools they need to
            manage their workforce efficiently.
            <br />
            <br />
            Whether you're a startup or a large enterprise, Afri-HR automates
            key HR functions, ensuring compliance with labor laws while
            enhancing employee engagement. With an intuitive dashboard, secure
            payroll processing, and seamless document management, Afri-HR makes
            HR operations effortless and more effective.
            <br />
            <br />
            Empower your business with smart HR solutions—choose Afri-HR for a
            seamless workforce management experience.
          </p>
          <Spacing lg="20" md="45" />
          <img
            src="/images/afri-hr.jpg"
            style={{ width: "auto", height: "auto" }}
          />
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
