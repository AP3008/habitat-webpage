'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function About() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
                  className="text-white bg-white/20 px-3 py-2 rounded-md text-sm font-medium transition-colors"
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
            About Our Chapter
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Learn about Western University's chapter of Habitat for Humanity and our mission to build homes, hope, and community.
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Our Story */}
          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#00AFD7] mb-8">
              Our Story
            </h2>
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Western University's chapter of Habitat for Humanity was founded with a simple yet powerful vision: to bring together passionate students who believe that everyone deserves a safe, decent, and affordable place to call home.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Since our founding, we have grown into one of the most active student organizations on campus, mobilizing hundreds of volunteers each year to work alongside families in our community. Our chapter is part of the global Habitat for Humanity network, which has helped build or repair homes for more than 39 million people worldwide.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  What started as a small group of dedicated students has blossomed into a vibrant community of volunteers, advocates, and future leaders who are committed to making affordable housing a reality for all.
                </p>
              </div>

              {/* Story Image Placeholder */}
              <div className="relative h-80 md:h-96 bg-gradient-to-br from-[#B3E5F3] to-[#00AFD7] rounded-2xl shadow-xl flex items-center justify-center overflow-hidden">
                {/* Replace with actual image */}
                {/* <Image 
                  src="/about-story.jpg"
                  alt="Our Story"
                  fill
                  className="object-cover"
                /> */}
                <div className="text-center p-8">
                  <svg className="w-24 h-24 mx-auto text-white mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <p className="text-white font-medium">Story Image Placeholder</p>
                </div>
              </div>
            </div>
          </div>

          {/* What We Do */}
          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#00AFD7] mb-8">
              What We Do
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Build Projects */}
              <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-[#00AFD7] rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Build Projects</h3>
                <p className="text-gray-600">
                  We organize regular build days where volunteers work alongside families to construct and renovate homes in London and surrounding communities.
                </p>
              </div>

              {/* Fundraising */}
              <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-[#00AFD7] rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Fundraising</h3>
                <p className="text-gray-600">
                  Through creative fundraising initiatives and events, we raise funds to support Habitat's mission and help families achieve homeownership.
                </p>
              </div>

              {/* Advocacy */}
              <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-[#00AFD7] rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Advocacy</h3>
                <p className="text-gray-600">
                  We raise awareness about housing issues and advocate for policies that make affordable housing accessible to all community members.
                </p>
              </div>
            </div>
          </div>

          {/* Our Values */}
          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#00AFD7] mb-8 text-center">
              Our Values
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-[#00AFD7]/10 rounded-full flex items-center justify-center">
                    <span className="text-[#00AFD7] font-bold">1</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Community Partnership</h3>
                  <p className="text-gray-600">
                    We work hand-in-hand with families and local organizations, building homes and relationships that strengthen our community.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-[#00AFD7]/10 rounded-full flex items-center justify-center">
                    <span className="text-[#00AFD7] font-bold">2</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Student Leadership</h3>
                  <p className="text-gray-600">
                    Our chapter is entirely student-run, providing opportunities for Western students to develop leadership and project management skills.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-[#00AFD7]/10 rounded-full flex items-center justify-center">
                    <span className="text-[#00AFD7] font-bold">3</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Inclusivity</h3>
                  <p className="text-gray-600">
                    Everyone is welcome in our chapter, regardless of experience. We believe diverse perspectives make us stronger.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-[#00AFD7]/10 rounded-full flex items-center justify-center">
                    <span className="text-[#00AFD7] font-bold">4</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Long-term Impact</h3>
                  <p className="text-gray-600">
                    We're committed to creating sustainable solutions that have lasting positive effects on families and our community.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Full Width Image Banner */}
          <div className="mb-20">
            <div className="relative h-64 md:h-80 lg:h-96 bg-gradient-to-r from-[#00AFD7] to-[#0099BD] rounded-2xl shadow-xl flex items-center justify-center overflow-hidden">
              {/* Replace with actual image */}
              {/* <Image 
                src="/about-banner.jpg"
                alt="About Banner"
                fill
                className="object-cover"
              /> */}
              <div className="text-center p-8">
                <svg className="w-32 h-32 mx-auto text-white/50 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="text-white font-medium text-lg">Full Width Banner Image Placeholder</p>
              </div>
            </div>
          </div>

          {/* Our Impact */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#00AFD7] mb-8 text-center">
              Our Impact
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-[#00AFD7] mb-2">500+</div>
                <p className="text-gray-600 font-medium">Volunteer Hours</p>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-[#00AFD7] mb-2">15+</div>
                <p className="text-gray-600 font-medium">Build Projects</p>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-[#00AFD7] mb-2">100+</div>
                <p className="text-gray-600 font-medium">Active Members</p>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-[#00AFD7] mb-2">10+</div>
                <p className="text-gray-600 font-medium">Families Helped</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-r from-[#00AFD7] to-[#0099BD]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Want to Learn More?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Connect with us to discover how you can get involved and make a difference in our community.
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
              href="/events"
              className="inline-block bg-transparent border-2 border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white hover:text-[#00AFD7] transition-all duration-300 shadow-xl"
            >
              View Upcoming Events
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