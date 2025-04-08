import React, { useEffect, useState } from 'react';
import SocialWidget from '../Widget/SocialWidget';
import ContactInfoWidget from '../Widget/ContactInfoWidget';
import Div from '../Div';
import DropDown from './DropDown';
import Link from 'next/link';
import Spacing from '../../components/Spacing';

export default function Header({ variant }) {
  const [isSticky, setIsSticky] = useState(false);
  const [sideHeaderToggle, setSideHeaderToggle] = useState(false);
  const [mobileToggle, setMobileToggle] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    });
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = `mailto:afribyte.solutions@gmail.com?subject= Website Direct Message from ${formData.name}&body=${formData.message}`;
  };

  return (
    <>
      <header
        className={`cs-site_header cs-style1 text-uppercase ${
          variant ? variant : ''
        } cs-sticky_header ${isSticky ? 'cs-sticky_header_active' : ''}`}
      >
        <Div className="cs-main_header">
          <Div className="container">
            <Div className="cs-main_header_in">
              <Div className="cs-main_header_left">
                <Link className="cs-site_branding" href="/">
                  <img src="/images/logo.png" alt="Logo" />
                </Link>
              </Div>
              <Div className="cs-main_header_center">
                <Div className="cs-nav cs-primary_font cs-medium">
                  <ul
                    className="cs-nav_list"
                    style={{ display: `${mobileToggle ? 'block' : 'none'}` }}
                  >
                    <li><Link href="/" onClick={() => setMobileToggle(false)}>Home</Link></li>
                    <li><Link href="about" onClick={() => setMobileToggle(false)}>About</Link></li>
                    <li><Link href="/service" onClick={() => setMobileToggle(false)}>Services</Link></li>
                    <li className="menu-item-has-children">
                      <Link href="Products" onClick={() => setMobileToggle(false)}>Products</Link>
                      <DropDown>
                        <ul>
                          <li><Link href="/afribooking" onClick={() => setMobileToggle(false)}>Afribooking</Link></li>
                          <li><Link href="/AfriVent" onClick={() => setMobileToggle(false)}>Afrivents</Link></li>
                          <li><Link href="/AfriHR" onClick={() => setMobileToggle(false)}>Afri-HR</Link></li>
                        </ul>
                      </DropDown>
                    </li>
                    <li><Link href="/Portfolio" onClick={() => setMobileToggle(false)}>Portfolio</Link></li>
                    <li><Link href="/blog">Blog</Link></li>
                  </ul>
                  <span
                    className={
                      mobileToggle
                        ? 'cs-munu_toggle cs-toggle_active'
                        : 'cs-munu_toggle'
                    }
                    onClick={() => setMobileToggle(!mobileToggle)}
                  >
                    <span></span>
                  </span>
                </Div>
              </Div>
              <Div className="cs-main_header_right">
                <Div className="cs-toolbox">
                  <span
                    className="cs-icon_btn"
                    onClick={() => setSideHeaderToggle(!sideHeaderToggle)}
                  >
                    <span className="cs-icon_btn_in">
                      <span />
                      <span />
                      <span />
                      <span />
                    </span>
                  </span>
                </Div>
              </Div>
            </Div>
          </Div>
        </Div>
      </header>

      <Div
        className={
          sideHeaderToggle ? 'cs-side_header active' : 'cs-side_header'
        }
      >
        <button
          className="cs-close"
          onClick={() => setSideHeaderToggle(!sideHeaderToggle)}
        />
        <Div
          className="cs-side_header_overlay"
          onClick={() => setSideHeaderToggle(!sideHeaderToggle)}
        />
        <Div className="cs-side_header_in">
          <Div className="cs-side_header_shape" />
          <Link className="cs-site_branding" href="/">
            <img src="/images/footer_logo.png" alt="Logo" />
          </Link>
          <Div className="cs-side_header_box">
            <h2 className="cs-side_header_heading">
              Do you have a project in your <br /> mind? Connect with us.
            </h2>
          </Div>
          <Div className="cs-side_header_box">
            <ContactInfoWidget title="Contact Us" withIcon />
          </Div>
          <Div className="cs-side_header_box">
            <h3 className="cs-side_header_heading">Send Us a Direct Message</h3>
            <Spacing lg="15" md="80" />
            <form action="mailto:afribyte.solutions@gmail.com" method="POST" encType="text/plain" className="cs-form">
              <Div className="cs-form_field">
                <input 
                  type="email" 
                  name="email" 
                  placeholder="Your Email" 
                  required 
                  className="cs-input" 
                  style={{ background: 'transparent', border: 'none' }} 
                />
              </Div>
              <Spacing lg="15" md="80" />
              <button type="submit" className="cs-btn cs-style1 cs-btn_lg w-100">Send Message</button>
            </form>
          </Div>
          <SocialWidget />

        </Div>
      </Div>
    </>
  );
}
