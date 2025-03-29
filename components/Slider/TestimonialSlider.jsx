import React, { useState } from 'react';
import Slider from 'react-slick';
import { Icon } from '@iconify/react';
import Testimonial from '../Testimonial';
import Div from '../Div';
import Spacing from '../Spacing';
export default function TestimonialSlider() {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  const testimonialData = [
    {
      testimonialThumb: '/images/testimonial_1.jpg',
      testimonialText:
        'I wish I’d partnered with Afribyte Solutions sooner. Their approach transformed my business. Seriously, these guys are in a league of their own—innovative, reliable, and absolutely brilliant!',
      avatarName: 'Grace Monsery',
      avatarDesignation: 'CEO AT TECH',
      ratings: '5',
    },
    {
      testimonialThumb: '/images/testimonial_2.jpg',
      testimonialText:
        'Afribyte Solutions has set the gold standard for IT services. I’m still amazed at how seamlessly they delivered. Honestly, it feels like magic working with them. Total game-changers!',
      avatarName: 'I can’t believe the transformation Afribyte brought to our platform. From start to finish, they overdelivered. These guys aren’t just developers; they’re creators of excellence. Absolutely love their work!',
      avatarDesignation: 'CEO AT Afro-Street-Food',
      ratings: '5',
    },
    {
      testimonialThumb: '/images/testimonial_3.jpg',
      testimonialText:
        'Working with Afribyte Solutions was the best decision we’ve ever made. They took our ideas and turned them into something extraordinary. Their work isn’t just good—it’s groundbreaking!',
      avatarName: 'Obaa Yaa',
      avatarDesignation: 'CEO AT AfA',
      ratings: '4.5',
    },
    {
      testimonialThumb: '/images/testimonial_4.jpg',
      testimonialText:
        'I can’t believe the transformation Afribyte brought to our platform. From start to finish, they overdelivered. These guys aren’t just developers; they’re creators of excellence. Absolutely love their work!',
      avatarName: 'Richardson',
      avatarDesignation: 'CEO AT Inner-String',
      ratings: '4.5',
    },
  ];
  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <div
      {...props}
      className={
        'slick-prev slick-arrow' + (currentSlide === 0 ? ' slick-disabled' : '')
      }
      aria-hidden="true"
      aria-disabled={currentSlide === 0 ? true : false}
    >
      <Icon icon="bi:arrow-left" />
    </div>
  );
  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <div
      {...props}
      className={
        'slick-next slick-arrow' +
        (currentSlide === slideCount - 1 ? ' slick-disabled' : '')
      }
      aria-hidden="true"
      aria-disabled={currentSlide === slideCount - 1 ? true : false}
    >
      <Icon icon="bi:arrow-right" />
    </div>
  );
  return (
    <>
      <Div className="cs-gradient_bg_1 cs-shape_wrap_3 cs-parallax">
        <Spacing lg="130" md="80" />
        <Div className="cs-shape_3 cs-to_up">
          <img src="/images/shape_1.svg" alt="Shape" />
        </Div>
        <Div className="container">
          <Div className="cs-testimonial_slider">
            <Div className="cs-testimonial_slider_left">
              <Slider
                asNavFor={nav1}
                ref={slider2 => setNav2(slider2)}
                slidesToShow={3}
                swipeToSlide={true}
                focusOnSelect={true}
                centerMode={true}
                centerPadding="0px"
                arrows={false}
              >
                {testimonialData.map((item, index) => (
                  <Div className="slider-nav_item" key={index}>
                    <Div className="cs-rotate_img">
                      <Div className="cs-rotate_img_in">
                        <img src={item.testimonialThumb} alt="Thumb" />
                      </Div>
                    </Div>
                  </Div>
                ))}
              </Slider>
            </Div>
            <Div className="cs-testimonial_slider_right">
              <Slider
                asNavFor={nav2}
                ref={slider1 => setNav1(slider1)}
                prevArrow={<SlickArrowLeft />}
                nextArrow={<SlickArrowRight />}
                className="cs-arrow_style1"
              >
                {testimonialData.map((item, index) => (
                  <Div key={index}>
                    <Testimonial
                      testimonialText={item.testimonialText}
                      avatarName={item.avatarName}
                      avatarDesignation={item.avatarDesignation}
                      ratings={item.ratings}
                    />
                  </Div>
                ))}
              </Slider>
            </Div>
          </Div>
        </Div>
        <Spacing lg="130" md="80" />
      </Div>
    </>
  );
}
