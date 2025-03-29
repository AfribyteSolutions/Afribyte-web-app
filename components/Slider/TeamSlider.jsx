import { Icon } from '@iconify/react';

import Slider from 'react-slick';
import Div from '../Div';
import Team from '../Team';

export default function TeamSlider() {
  /** Team Member Data **/
  const teamData = [
    {
      memberImage: '/images/team1.jpg',
      memberName: 'H. Angabo Abiyah',
      memberDesignation: 'Chief Executive Officer',
      // memberSocial: {
      //   linkedin: '/',
      //   twitter: '/',
      //   youtube: '/',
      //   facebook: '/',
      // },
    },
    {
      memberImage: '/images/team2.jpg',
      memberName: 'Marcel Mbanyam',
      memberDesignation: 'Chief Technical Officer',
      // memberSocial: {
      //   linkedin: '/',
      //   twitter: '/',
      //   youtube: '/',
      //   facebook: '/',
      // },
    },
    {
      memberImage: '/images/team3.jpg',
      memberName: 'Coretta Abiyah',
      memberDesignation: 'Chief Operations Officer',
      // memberSocial: {
      //   linkedin: '/',
      //   twitter: '/',
      //   youtube: '/',
      //   facebook: '/',
      // },
    },
    {
      memberImage: '/images/team4.jpg',
      memberName: 'Mensah Samuel',
      memberDesignation: 'Developer',
      // memberSocial: {
      //   linkedin: '/',
      //   twitter: '/',
      //   youtube: '/',
      //   facebook: '/',
      // },
    },
    {
      memberImage: '/images/team5.jpg',
      memberName: 'Aning Richmond',
      memberDesignation: 'Developer',
      // memberSocial: {
      //   linkedin: '/',
      //   twitter: '/',
      //   youtube: '/',
      //   facebook: '/',
      // },
    }
  ];
  /** Slider Settings **/
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
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          dots: true,
          arrows: false,
        },
      },
    ],
  };

  return (
    <Slider {...settings} className="cs-gap-24 cs-arrow_style2">
      {teamData.map((item, index) => (
        <Div key={index}>
          <Team
            memberImage={item.memberImage}
            memberName={item.memberName}
            memberDesignation={item.memberDesignation}
            // memberSocial={item.memberSocial}
          />
        </Div>
      ))}
    </Slider>
  );
}
