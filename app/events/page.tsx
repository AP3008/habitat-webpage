'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Events() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState<'upcoming' | 'past'>('upcoming');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Placeholder events data - replace with real events
  const upcomingEvents: Array<{
    id: number;
    title: string;
    date: string;
    time: string;
    location: string;
    description: string;
    image: string;
    category: string;
  }> = [
    // Add your events here following this format:
    // {
    //   id: 1,
    //   title: 'Community Build Day',
    //   date: 'Saturday, December 7, 2024',
    //   time: '9:00 AM - 4:00 PM',
    //   location: 'London, ON',
    //   description: 'Join us for a full day of construction work helping a local family build their dream home.',
    //   image: '/events/build-day.jpg',
    //   category: 'Build'
    // },
  ];

  const pastEvents: Array<{
    id: number;
    title: string;
    date: string;
    time: string;
    location: string;
    description: string;
    image: string;
    category: string;
  }> = [
    // Add past events here following the same format
  ];

  const displayEvents = activeTab === 'upcoming' ? upcomingEvents : pastEvents;

  return (
    <main className="min-h-screen bg-white">
      {/* Sticky Header */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'translate-y-0 opacity-100' 
            : 'translate-y-0 opacity-100'
        }`}
      >
        <nav className="bg-[#00AFD7]/70 backdrop-blur-md shadow-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              {/* Logo/Title */}
              <Link href="/" className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#00AFD7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <span className="text-white font-bold text-lg hidden sm:block">
                  Western Habitat
                </span>
              </Link>

              {/* Navigation Links */}
              <div className="flex items-center space-x-1 sm:space-x-4">
                <Link 
                  href="/"
                  className="text-white hover:bg-white/20 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Home
                </Link>
                <Link 
                  href="/about"
                  className="text-white hover:bg-white/20 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  About
                </Link>
                <Link 
                  href="/team"
                  className="text-white hover:bg-white/20 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Team
                </Link>
                <Link 
                  href="/events"
                  className="text-white bg-white/20 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Events
                </Link>
                <a 
                  href="https://westernusc.store/product/habitat-for-humanity-western/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-[#00AFD7] hover:bg-gray-100 px-4 py-2 rounded-md text-sm font-semibold transition-colors ml-2"
                >
                  Join
                </a>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-16 sm:pb-20 bg-gradient-to-br from-[#00AFD7] to-[#0099BD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Our Events
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Join us for builds, fundraisers, and community events throughout the year. Everyone is welcome!
          </p>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setActiveTab('upcoming')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === 'upcoming'
                    ? 'bg-[#00AFD7] text-white shadow-lg'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Upcoming Events
              </button>
              <button
                onClick={() => setActiveTab('past')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === 'past'
                    ? 'bg-[#00AFD7] text-white shadow-lg'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Past Events
              </button>
            </div>
          </div>

          {/* Events Grid */}
          {displayEvents.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {displayEvents.map((event) => (
                <div
                  key={event.id}
                  className="bg-white border-2 border-gray-100 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
                >
                  {/* Event Image */}
                  <div className="relative h-48 bg-gradient-to-br from-[#00AFD7] to-[#0099BD] flex items-center justify-center overflow-hidden">
                    {/* Replace with actual image */}
                    {/* <Image 
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    /> */}
                    <div className="text-center p-8">
                      <svg className="w-16 h-16 text-white/80 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 right-4 bg-white text-[#00AFD7] px-3 py-1 rounded-full text-xs font-semibold">
                      {event.category}
                    </div>
                  </div>

                  {/* Event Details */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#00AFD7] transition-colors">
                      {event.title}
                    </h3>
                    
                    {/* Date & Time */}
                    <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                      <svg className="w-4 h-4 text-[#00AFD7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span>{event.date}</span>
                    </div>

                    {/* Time */}
                    <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                      <svg className="w-4 h-4 text-[#00AFD7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>{event.time}</span>
                    </div>

                    {/* Location */}
                    <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                      <svg className="w-4 h-4 text-[#00AFD7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>{event.location}</span>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {event.description}
                    </p>

                    {/* Action Button - Only for upcoming events */}
                    {activeTab === 'upcoming' && (
                      <button className="w-full bg-[#00AFD7] text-white font-semibold py-3 rounded-lg hover:bg-[#0099BD] transition-all duration-300 transform hover:scale-105">
                        Register Interest
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <svg className="w-24 h-24 mx-auto text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p className="text-xl text-gray-500">No events to display at this time.</p>
              <p className="text-gray-400 mt-2">Check back soon for upcoming activities!</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#00AFD7] mb-6">
            Stay Connected
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Want to be the first to know about upcoming events? Join our mailing list or follow us on social media!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://westernusc.store/product/habitat-for-humanity-western/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#00AFD7] text-white font-semibold px-8 py-4 rounded-lg hover:bg-[#0099BD] transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Join Our Chapter
            </a>
            <a 
              href="https://www.instagram.com/h4hwesternuniversity/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white border-2 border-[#00AFD7] text-[#00AFD7] font-semibold px-8 py-4 rounded-lg hover:bg-[#00AFD7] hover:text-white transition-all duration-300 shadow-lg"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              Follow on Instagram
            </a>
          </div>
        </div>
      </section>

      {/* Footer Placeholder */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Western University Habitat for Humanity. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}