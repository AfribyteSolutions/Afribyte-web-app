import React from 'react'
import Portfolio from '../Portfolio'
import Div from '../Div'
import Slider from 'react-slick';

export default function PortfolioSlider() {
  const portfolioData = [
    {
      title:'UI and UX Design ',
      subtitle:'See Details',
      href:'/service',
      src:'/images/portfolio_1.png'
    },
    {
      title:'Web Application Creation',
      subtitle:'See Details',
      href:'/service',
      src:'/images/portfolio_2.png'
    },
    {
      title:'Creative Design for Application',
      subtitle:'See Details',
      href:'/service',
      src:'/images/portfolio_3.png'
    },
    {
      title:'New School Web App Style',
      subtitle:'See Details',
      href:'/service',
      src:'/images/portfolio_4.png'
    }
  ]
  
  /** Slider Settings **/
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0",
    slidesToShow: 3,
    speed: 500,
    dots: true,
    arrows:false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };
  
  return (
    <Slider {...settings} className='cs-slider cs-style3 cs-gap-24'>
      {portfolioData.map((item, index)=> (
        <Div key={index}>
          <Portfolio 
            title={item.title} 
            subtitle={item.subtitle}
            href={item.href}
            src={item.src}
          />
        </Div>
      ))}
    </Slider>
  )
}
