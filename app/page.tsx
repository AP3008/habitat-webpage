import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-[#00AFD7] via-[#0099BD] to-[#0077A3]">
        {/* Background overlay */}
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        
        {/* Placeholder for background image */}
        {/* <Image 
          src="/hero-placeholder.jpg" 
          alt="Hero background"
          fill
          className="object-cover"
          priority
        /> */}
        
        {/* Hero Content */}
        <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Building Homes.<br />
            Building Hope.<br />
            <span className="text-[#B3E5F3]">At Western.</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            Join Western University's chapter of Habitat for Humanity in creating affordable housing and strengthening our community, one home at a time.
          </p>
          <Link 
            href="/join"
            className="inline-block bg-white text-[#00AFD7] font-semibold px-8 py-4 rounded-lg hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-xl text-lg"
          >
            Join Us Today
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#00AFD7] text-center mb-12">
            Our Mission
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Mission Text */}
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Western's Habitat for Humanity chapter is dedicated to bringing together students who are passionate about making a difference in our community. We believe that everyone deserves a decent place to live.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Through volunteer work, fundraising, and awareness campaigns, we partner with families to build and renovate homes, fostering strength, stability, and self-reliance in our local neighborhoods.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our student-led initiatives create lasting impact while providing meaningful experiences for Western students to develop leadership skills and forge lifelong connections.
              </p>
            </div>

            {/* Mission Image Placeholder */}
            <div className="relative h-80 md:h-96 bg-gradient-to-br from-[#B3E5F3] to-[#00AFD7] rounded-2xl shadow-xl flex items-center justify-center overflow-hidden">
              {/* Replace with actual image */}
              {/* <Image 
                src="/mission-placeholder.jpg"
                alt="Mission"
                fill
                className="object-cover"
              /> */}
              <div className="text-center p-8">
                <svg className="w-24 h-24 mx-auto text-white mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                <p className="text-white font-medium">Mission Image Placeholder</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events Preview */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#00AFD7] mb-4">
              Upcoming Events
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Check back soon for our upcoming builds, fundraisers, and community events!
            </p>
          </div>

          {/* Placeholder for when events are added */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Event cards will be added here */}
          </div>

          {/* View All Events Button */}
          <div className="text-center">
            <Link 
              href="/events"
              className="inline-block bg-[#00AFD7] text-white font-semibold px-8 py-3 rounded-lg hover:bg-[#0099BD] transition-all duration-300 shadow-lg"
            >
              View All Events
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-r from-[#00AFD7] to-[#0099BD] relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Whether you can volunteer for a few hours or want to become a core member, there's a place for you in our community. Join us today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/join"
              className="inline-block bg-white text-[#00AFD7] font-semibold px-8 py-4 rounded-lg hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              Become a Member
            </Link>
            <Link 
              href="/about"
              className="inline-block bg-transparent border-2 border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white hover:text-[#00AFD7] transition-all duration-300 shadow-xl"
            >
              Learn More About Us
            </Link>
            {/* Instagram Link - Add your Instagram URL here */}
            <a 
              href="YOUR_INSTAGRAM_URL_HERE"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-12 h-12 bg-white text-[#00AFD7] rounded-lg hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-xl"
              aria-label="Follow us on Instagram"
            >
              <svg 
                className="w-6 h-6" 
                fill="currentColor" 
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}