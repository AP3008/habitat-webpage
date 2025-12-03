'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Team() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Portfolio data structure
  const portfolios = [
    {
      name: 'Events',
      vicePresident: { name: 'VP Name', image: '/team/events-vp.jpg' },
      director: { name: 'Director Name', image: '/team/events-director.jpg' }
    },
    {
      name: 'Finance',
      vicePresident: { name: 'VP Name', image: '/team/finance-vp.jpg' },
      director: { name: 'Director Name', image: '/team/finance-director.jpg' }
    },
    {
      name: 'Communications',
      vicePresident: { name: 'VP Name', image: '/team/communications-vp.jpg' },
      director: { name: 'Director Name', image: '/team/communications-director.jpg' }
    },
    {
      name: 'Marketing',
      vicePresident: { name: 'VP Name', image: '/team/marketing-vp.jpg' },
      director: { name: 'Director Name', image: '/team/marketing-director.jpg' }
    },
    {
      name: 'External',
      vicePresident: { name: 'VP Name', image: '/team/external-vp.jpg' },
      director: { name: 'Director Name', image: '/team/external-director.jpg' }
    },
    {
      name: 'Outreach',
      vicePresident: { name: 'VP Name', image: '/team/outreach-vp.jpg' },
      director: { name: 'Director Name', image: '/team/outreach-director.jpg' }
    },
    {
      name: 'Campus Engagement',
      vicePresident: { name: 'VP Name', image: '/team/campus-vp.jpg' },
      director: { name: 'Director Name', image: '/team/campus-director.jpg' }
    }
  ];

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
                  <svg className="w-6 h-6 text-[#0b1a1d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                  className="text-white bg-white/20 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Team
                </Link>
                <Link 
                  href="/events"
                  className="text-white hover:bg-white/20 px-3 py-2 rounded-md text-sm font-medium transition-colors"
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
            Meet Our Team
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Our passionate student leaders work together to build homes, hope, and community across London, Ontario.
          </p>
        </div>
      </section>

      {/* President Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#00AFD7] mb-4">
              Chapter Leadership
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Leading our chapter with vision and dedication
            </p>
          </div>

          {/* President Card - Featured */}
          <div className="max-w-md mx-auto mb-20">
            <div className="bg-gradient-to-br from-[#00AFD7] to-[#0099BD] rounded-2xl shadow-2xl overflow-hidden transform hover:scale-105 transition-all duration-300">
              {/* President Image */}
              <div className="relative h-80 bg-gradient-to-br from-[#B3E5F3] to-[#00AFD7] flex items-center justify-center">
                {/* Replace with actual image */}
                {/* <Image 
                  src="/team/president.jpg"
                  alt="President"
                  fill
                  className="object-cover"
                /> */}
                <div className="text-center p-8">
                  <svg className="w-32 h-32 mx-auto text-white/80 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <p className="text-white font-medium">President Photo</p>
                </div>
              </div>
              
              {/* President Info */}
              <div className="p-8 text-center">
                <div className="inline-block bg-white/20 text-white px-4 py-1 rounded-full text-sm font-semibold mb-3">
                  PRESIDENT
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  President Name
                </h3>
                <p className="text-white/80 text-sm">
                  Add president bio or description here
                </p>
              </div>
            </div>
          </div>

          {/* Portfolios Section */}
          <div className="mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#00AFD7] mb-4 text-center">
              Portfolio Teams
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto text-center mb-12">
              Each portfolio is led by a Vice President and Director working together to achieve our mission
            </p>
          </div>

          {/* Portfolio Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolios.map((portfolio, index) => (
              <div 
                key={index}
                className="bg-white border-2 border-gray-100 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                {/* Portfolio Header */}
                <div className="bg-gradient-to-r from-[#00AFD7] to-[#0099BD] p-4 text-center">
                  <h3 className="text-xl font-bold text-white">
                    {portfolio.name}
                  </h3>
                </div>

                {/* Vice President Card */}
                <div className="p-6 border-b border-gray-100">
                  <div className="flex items-center gap-4">
                    {/* VP Image */}
                    <div className="relative w-20 h-20 flex-shrink-0 bg-gradient-to-br from-[#B3E5F3] to-[#00AFD7] rounded-full flex items-center justify-center overflow-hidden">
                      {/* Replace with actual image */}
                      {/* <Image 
                        src={portfolio.vicePresident.image}
                        alt={`${portfolio.name} VP`}
                        fill
                        className="object-cover"
                      /> */}
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    
                    {/* VP Info */}
                    <div className="flex-1">
                      <div className="inline-block bg-[#00AFD7]/10 text-[#00AFD7] px-3 py-1 rounded-full text-xs font-semibold mb-2">
                        VICE PRESIDENT
                      </div>
                      <h4 className="text-lg font-bold text-gray-900">
                        {portfolio.vicePresident.name}
                      </h4>
                    </div>
                  </div>
                </div>

                {/* Director Card */}
                <div className="p-6">
                  <div className="flex items-center gap-4">
                    {/* Director Image */}
                    <div className="relative w-20 h-20 flex-shrink-0 bg-gradient-to-br from-[#B3E5F3] to-[#00AFD7] rounded-full flex items-center justify-center overflow-hidden">
                      {/* Replace with actual image */}
                      {/* <Image 
                        src={portfolio.director.image}
                        alt={`${portfolio.name} Director`}
                        fill
                        className="object-cover"
                      /> */}
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    
                    {/* Director Info */}
                    <div className="flex-1">
                      <div className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-semibold mb-2">
                        DIRECTOR
                      </div>
                      <h4 className="text-lg font-bold text-gray-900">
                        {portfolio.director.name}
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-r from-[#00AFD7] to-[#0099BD]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Interested in a Leadership Role?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            We're always looking for passionate students to join our team and help lead our chapter.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://westernusc.store/product/habitat-for-humanity-western/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-[#00AFD7] font-semibold px-8 py-4 rounded-lg hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              Join Our Chapter
            </a>
            <Link 
              href="/about"
              className="inline-block bg-transparent border-2 border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white hover:text-[#00AFD7] transition-all duration-300 shadow-xl"
            >
              Learn More
            </Link>
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