import React from 'react';
import Div from '../Div';
import AuthorWidget from '../Widget/AuthorWidget';
import RecentPost from '../Widget/RecentPost';
import SearchWidget from '../Widget/SearchWidget';


export default function Sidebar({ onCategorySelect }) {
  const tagData = [
    { title: 'Tech', url: '/' },
    { title: 'Innovation', url: '/' },
    { title: 'Startups', url: '/' },
    { title: 'Africa', url: '/' },
    { title: 'AI', url: '/' },
    { title: 'Fintech', url: '/' },
  ];

  const categoryData = [
    { title: 'Tech & Innovation' },
    { title: 'Business & HR Tech' },
    { title: 'Travel & Tech' },
    { title: 'Events & Culture' },
    { title: 'Fintech & Digital Economy' },
  ];

  const recentPostData = [
    {
      title: 'How Afribyte is Transforming Africa’s Digital Landscape',
      thumb: '/images/post_afribyte_1.jpeg',
      href: '#',
      date: '15 Mar 2025'
    },
    {
      title: 'The Future of HR: How Afri-HR is Redefining Workforce Management',
      thumb: '/images/post_afribyte_2.jpeg',
      href: '#',
      date: '10 Mar 2025'
    },
    {
      title: 'Afribooking: A Game-Changer for African Travel & Hospitality',
      thumb: '/images/post_afribyte_3.jpeg',
      href: '#',
      date: '05 Mar 2025'
    },
    {
      title: 'Why AfriVents is Revolutionizing Event Ticketing in Africa',
      thumb: '/images/post_afribyte_4.jpeg',
      href: '#',
      date: '02 Mar 2025'
    },
  ];

  return (
    <>
      <Div className="cs-sidebar_item">
        <AuthorWidget
          src='/images/logo.png'
          name='Tech Team'
          description='Afribyte is pioneering digital solutions for Africa’s evolving tech ecosystem, fostering innovation, and creating impact-driven solutions.'
        />
      </Div>
      <Div className="cs-sidebar_item">
        <SearchWidget title='Search Blog' />
      </Div>
      <Div className="cs-sidebar_item">
        <h2 className="cs-sidebar_widget_title">Categories</h2>
        <ul className="cs-menu_widget">
          {categoryData.map((item, index) => (
            <li key={index}>
              <button 
                style={{ background: 'none', border: 'none', color: '#333', cursor: 'pointer', padding: 0 }}
                onClick={() => onCategorySelect(item.title)}
              >
                {item.title}
              </button>
            </li>
          ))}
        </ul>
      </Div>
      <Div className="cs-sidebar_item">
        <RecentPost title='Latest Articles' data={recentPostData} />
      </Div>
    </>
  );
}
