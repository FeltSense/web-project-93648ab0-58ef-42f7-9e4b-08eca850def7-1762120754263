export default function Services() {
  return (
    <section className="py-24 bg-gradient-to-b from-white via-sage-50/30 to-white">
  <div className="container-custom">
    {/* Section Header */}
    <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
      <span className="inline-block px-4 py-2 bg-sage-100 text-sage-700 rounded-full text-sm font-medium mb-4 tracking-wide">
        WHAT WE OFFER
      </span>
      <h2 className="text-4xl md:text-5xl font-display font-bold text-charcoal-900 mb-6">
        Experience Excellence in Every Detail
      </h2>
      <p className="text-lg text-charcoal-600 leading-relaxed">
        From farm to table, from click to delivery—we've crafted every aspect of your dining experience with care and innovation.
      </p>
    </div>

    {/* Services Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      
      {/* Service 1: Fresh Ingredients */}
      <div className="group bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-500 hover:-translate-y-2">
        <div className="relative h-56 overflow-hidden">
          <img 
            src="https://cdn.pixabay.com/photo/2016/03/05/19/02/vegetables-1238252_1280.jpg"
            alt="Fresh organic vegetables and ingredients displayed on a rustic wooden table"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/60 via-charcoal-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="absolute top-4 right-4 w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
            <svg className="w-7 h-7 text-sage-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-display font-bold text-charcoal-900 mb-3 group-hover:text-sage-700 transition-colors duration-300">
            Farm-Fresh Ingredients
          </h3>
          <p className="text-charcoal-600 leading-relaxed mb-4">
            We partner with local farmers to bring you the freshest, highest-quality ingredients. Every dish celebrates seasonal flavors and sustainable sourcing.
          </p>
          <div className="flex items-center text-sage-600 font-medium text-sm group-hover:text-sage-700 transition-colors">
            <span>Learn more</span>
            <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>

      {/* Service 2: Online Ordering */}
      <div className="group bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-500 hover:-translate-y-2">
        <div className="relative h-56 overflow-hidden">
          <img 
            src="https://cdn.pixabay.com/photo/2017/08/10/14/09/restaurant-2623071_1280.jpg"
            alt="Person using smartphone for online food ordering with delivery app interface"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-terracotta-900/60 via-terracotta-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="absolute top-4 right-4 w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
            <svg className="w-7 h-7 text-terracotta-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-display font-bold text-charcoal-900 mb-3 group-hover:text-terracotta-700 transition-colors duration-300">
            Seamless Online Ordering
          </h3>
          <p className="text-charcoal-600 leading-relaxed mb-4">
            Order your favorites with just a few taps. Our intuitive platform makes it easy to customize, pay, and track your delivery in real-time.
          </p>
          <div className="flex items-center text-terracotta-600 font-medium text-sm group-hover:text-terracotta-700 transition-colors">
            <span>Order now</span>
            <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>

      {/* Service 3: Table Reservations */}
      <div className="group bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-500 hover:-translate-y-2">
        <div className="relative h-56 overflow-hidden">
          <img 
            src="https://cdn.pixabay.com/photo/2016/11/18/14/05/brick-wall-1834784_1280.jpg"
            alt="Elegant restaurant interior with beautifully set tables ready for dining"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-plum-900/60 via-plum-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="absolute top-4 right-4 w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
            <svg className="w-7 h-7 text-plum-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-display font-bold text-charcoal-900 mb-3 group-hover:text-plum-700 transition-colors duration-300">
            Effortless Reservations
          </h3>
          <p className="text-charcoal-600 leading-relaxed mb-4">
            Secure your perfect table in seconds. Choose your date, time, and party size—we'll handle the rest to ensure your dining experience is flawless.
          </p>
          <div className="flex items-center text-plum-600 font-medium text-sm group-hover:text-plum-700 transition-colors">
            <span>Book a table</span>
            <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>

      {/* Service 4: Diverse Menu */}
      <div className="group bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-500 hover:-translate-y-2">
        <div className="relative h-56 overflow-hidden">
          <img 
            src="https://cdn.pixabay.com/photo/2017/05/07/08/56/pancakes-2291908_1280.jpg"
            alt="Colorful array of diverse dishes including vegan and gluten-free options"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-sage-900/60 via-sage-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="absolute top-4 right-4 w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
            <svg className="w-7 h-7 text-sage-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-display font-bold text-charcoal-900 mb-3 group-hover:text-sage-700 transition-colors duration-300">
            Menu for Everyone
          </h3>
          <p className="text-charcoal-600 leading-relaxed mb-4">
            From vegan delights to gluten-free favorites, our diverse menu caters to every palate and dietary need. Everyone deserves an exceptional meal.
          </p>
          <div className="flex items-center text-sage-600 font-medium text-sm group-hover:text-sage-700 transition-colors">
            <span>View menu</span>
            <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>

    </div>

    {/* Bottom CTA */}
    <div className="mt-16 text-center animate-fade-in-up" style={{ animationDelay: '200ms' }}>
      <div className="inline-flex flex-col sm:flex-row gap-4 items-center justify-center">
        <button className="btn-primary group px-8 py-4 text-lg">
          Explore All Services
          <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </button>
        <button className="btn-secondary px-8 py-4 text-lg">
          Contact Us
        </button>
      </div>
    </div>
  </div>
</section>
  );
}