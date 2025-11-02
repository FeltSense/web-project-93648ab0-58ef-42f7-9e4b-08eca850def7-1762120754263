export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
  {/* Decorative background elements */}
  <div className="absolute inset-0 opacity-5">
    <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-500 rounded-full blur-3xl"></div>
    <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
  </div>

  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Main Footer Content */}
    <div className="py-12 lg:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
      {/* Brand Column */}
      <div className="lg:col-span-1">
        <div className="flex items-center space-x-2 mb-4">
          <div className="w-10 h-10 bg-gradient-to-br from-teal-400 to-blue-500 rounded-lg flex items-center justify-center shadow-lg shadow-teal-500/20">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">OG's Resto</span>
        </div>
        <p className="text-slate-400 text-sm leading-relaxed mb-6">
          Crafting exceptional dining experiences with passion, quality, and innovation since day one.
        </p>
        <div className="flex space-x-4">
          <a href="#" className="w-10 h-10 bg-slate-800 hover:bg-gradient-to-br hover:from-teal-500 hover:to-blue-500 rounded-lg flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/30 hover:-translate-y-1" aria-label="Facebook">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>
          <a href="#" className="w-10 h-10 bg-slate-800 hover:bg-gradient-to-br hover:from-teal-500 hover:to-blue-500 rounded-lg flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/30 hover:-translate-y-1" aria-label="Instagram">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
          <a href="#" className="w-10 h-10 bg-slate-800 hover:bg-gradient-to-br hover:from-teal-500 hover:to-blue-500 rounded-lg flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/30 hover:-translate-y-1" aria-label="Twitter">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
            </svg>
          </a>
          <a href="#" className="w-10 h-10 bg-slate-800 hover:bg-gradient-to-br hover:from-teal-500 hover:to-blue-500 rounded-lg flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/30 hover:-translate-y-1" aria-label="LinkedIn">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
        </div>
      </div>

      {/* Quick Links */}
      <div>
        <h3 className="text-white font-semibold text-lg mb-4 flex items-center">
          <span className="w-1 h-6 bg-gradient-to-b from-teal-400 to-blue-500 rounded-full mr-3"></span>
          Quick Links
        </h3>
        <ul className="space-y-3">
          <li>
            <a href="#" className="text-slate-400 hover:text-teal-400 transition-colors duration-200 text-sm flex items-center group">
              <span className="w-0 group-hover:w-2 h-0.5 bg-teal-400 transition-all duration-200 mr-0 group-hover:mr-2"></span>
              About Us
            </a>
          </li>
          <li>
            <a href="#" className="text-slate-400 hover:text-teal-400 transition-colors duration-200 text-sm flex items-center group">
              <span className="w-0 group-hover:w-2 h-0.5 bg-teal-400 transition-all duration-200 mr-0 group-hover:mr-2"></span>
              Menu
            </a>
          </li>
          <li>
            <a href="#" className="text-slate-400 hover:text-teal-400 transition-colors duration-200 text-sm flex items-center group">
              <span className="w-0 group-hover:w-2 h-0.5 bg-teal-400 transition-all duration-200 mr-0 group-hover:mr-2"></span>
              Reservations
            </a>
          </li>
          <li>
            <a href="#" className="text-slate-400 hover:text-teal-400 transition-colors duration-200 text-sm flex items-center group">
              <span className="w-0 group-hover:w-2 h-0.5 bg-teal-400 transition-all duration-200 mr-0 group-hover:mr-2"></span>
              Events
            </a>
          </li>
          <li>
            <a href="#" className="text-slate-400 hover:text-teal-400 transition-colors duration-200 text-sm flex items-center group">
              <span className="w-0 group-hover:w-2 h-0.5 bg-teal-400 transition-all duration-200 mr-0 group-hover:mr-2"></span>
              Careers
            </a>
          </li>
        </ul>
      </div>

      {/* Support */}
      <div>
        <h3 className="text-white font-semibold text-lg mb-4 flex items-center">
          <span className="w-1 h-6 bg-gradient-to-b from-teal-400 to-blue-500 rounded-full mr-3"></span>
          Support
        </h3>
        <ul className="space-y-3">
          <li>
            <a href="#" className="text-slate-400 hover:text-teal-400 transition-colors duration-200 text-sm flex items-center group">
              <span className="w-0 group-hover:w-2 h-0.5 bg-teal-400 transition-all duration-200 mr-0 group-hover:mr-2"></span>
              Help Center
            </a>
          </li>
          <li>
            <a href="#" className="text-slate-400 hover:text-teal-400 transition-colors duration-200 text-sm flex items-center group">
              <span className="w-0 group-hover:w-2 h-0.5 bg-teal-400 transition-all duration-200 mr-0 group-hover:mr-2"></span>
              Contact Us
            </a>
          </li>
          <li>
            <a href="#" className="text-slate-400 hover:text-teal-400 transition-colors duration-200 text-sm flex items-center group">
              <span className="w-0 group-hover:w-2 h-0.5 bg-teal-400 transition-all duration-200 mr-0 group-hover:mr-2"></span>
              FAQs
            </a>
          </li>
          <li>
            <a href="#" className="text-slate-400 hover:text-teal-400 transition-colors duration-200 text-sm flex items-center group">
              <span className="w-0 group-hover:w-2 h-0.5 bg-teal-400 transition-all duration-200 mr-0 group-hover:mr-2"></span>
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" className="text-slate-400 hover:text-teal-400 transition-colors duration-200 text-sm flex items-center group">
              <span className="w-0 group-hover:w-2 h-0.5 bg-teal-400 transition-all duration-200 mr-0 group-hover:mr-2"></span>
              Terms of Service
            </a>
          </li>
        </ul>
      </div>

      {/* Contact Info */}
      <div>
        <h3 className="text-white font-semibold text-lg mb-4 flex items-center">
          <span className="w-1 h-6 bg-gradient-to-b from-teal-400 to-blue-500 rounded-full mr-3"></span>
          Get in Touch
        </h3>
        <ul className="space-y-4">
          <li className="flex items-start space-x-3 text-sm">
            <div className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
              <svg className="w-4 h-4 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div className="text-slate-400">
              <p className="leading-relaxed">123 Culinary Street</p>
              <p className="leading-relaxed">Food District, FC 12345</p>
            </div>
          </li>
          <li className="flex items-center space-x-3 text-sm">
            <div className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg className="w-4 h-4 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <a href="mailto:hello@ogsresto.com" className="text-slate-400 hover:text-teal-400 transition-colors duration-200">
              hello@ogsresto.com
            </a>
          </li>
          <li className="flex items-center space-x-3 text-sm">
            <div className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg className="w-4 h-4 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <a href="tel:+15551234567" className="text-slate-400 hover:text-teal-400 transition-colors duration-200">
              +1 (555) 123-4567
            </a>
          </li>
        </ul>
      </div>
    </div>

    {/* Bottom Bar */}
    <div className="border-t border-slate-800 py-6">
      <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <p className="text-slate-500 text-sm text-center md:text-left">
          © {new Date().getFullYear()} OG's Resto. All rights reserved. Crafted with passion.
        </p>
        <div className="flex items-center space-x-6">
          <a href="#" className="text-slate-500 hover:text-teal-400 text-sm transition-colors duration-200">
            Accessibility
          </a>
          <a href="#" className="text-slate-500 hover:text-teal-400 text-sm transition-colors duration-200">
            Sitemap
          </a>
          <a href="#" className="text-slate-500 hover:text-teal-400 text-sm transition-colors duration-200">
            Cookies
          </a>
        </div>
      </div>
    </div>
  </div>
</footer>
  );
}