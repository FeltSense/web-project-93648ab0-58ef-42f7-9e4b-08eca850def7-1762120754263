export default function Testimonials() {
  return (
    <section className="py-24 px-4 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
  {/* Decorative Elements */}
  <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full filter blur-3xl opacity-30 -translate-y-1/2 translate-x-1/2"></div>
  <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-100 rounded-full filter blur-3xl opacity-30 translate-y-1/2 -translate-x-1/2"></div>
  
  <div className="max-w-7xl mx-auto relative z-10">
    {/* Header */}
    <div className="text-center mb-16 animate-fade-in">
      <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
        Trusted by Thousands
      </div>
      <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-4">
        What Our Guests Say
      </h2>
      <p className="text-xl text-slate-600 max-w-2xl mx-auto">
        Real experiences from real people who've discovered something special at OG's Resto
      </p>
    </div>

    {/* Masonry Grid */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-auto">
      
      {/* Testimonial 1 - Tall */}
      <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 hover:-translate-y-1 group">
        <div className="flex items-start gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-5 h-5 text-amber-400 fill-current" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <svg className="w-10 h-10 text-blue-200 mb-4 opacity-50" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
        <p className="text-slate-700 text-lg leading-relaxed mb-6">
          I've been ordering from OG's Resto for the past 6 months and I'm blown away every single time. Their online ordering system is incredibly smooth - I can customize everything, track my order in real-time, and my food arrives hot within 25 minutes. Last week I tried their signature truffle pasta and it was restaurant-quality perfection delivered to my door. The packaging is eco-friendly too, which I really appreciate!
        </p>
        <div className="flex items-center gap-4 pt-4 border-t border-slate-100">
          <img 
            src="https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_1280.jpg" 
            alt="Marcus Chen"
            className="w-14 h-14 rounded-full object-cover ring-4 ring-blue-50 group-hover:ring-blue-100 transition-all"
          />
          <div>
            <h4 className="font-bold text-slate-900">Marcus Chen</h4>
            <p className="text-sm text-slate-500">Software Engineer, Tech Startup</p>
          </div>
        </div>
      </div>

      {/* Testimonial 2 - Medium */}
      <div className="bg-gradient-to-br from-blue-600 to-teal-600 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group text-white">
        <div className="flex items-start gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-5 h-5 text-amber-300 fill-current" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <svg className="w-10 h-10 text-white/20 mb-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
        <p className="text-white/95 text-lg leading-relaxed mb-6">
          We hosted our company's quarterly celebration at OG's Resto and it exceeded all expectations. The private dining experience was flawless - they accommodated our team of 35 with custom menus, dietary restrictions handled perfectly, and the service was impeccable. Our CEO specifically mentioned it was the best corporate event we've ever had. Worth every penny!
        </p>
        <div className="flex items-center gap-4 pt-4 border-t border-white/20">
          <img 
            src="https://cdn.pixabay.com/photo/2017/08/01/08/29/woman-2563491_1280.jpg" 
            alt="Sarah Mitchell"
            className="w-14 h-14 rounded-full object-cover ring-4 ring-white/30 group-hover:ring-white/50 transition-all"
          />
          <div>
            <h4 className="font-bold text-white">Sarah Mitchell</h4>
            <p className="text-sm text-white/80">Events Manager, Fortune 500</p>
          </div>
        </div>
      </div>

      {/* Testimonial 3 - Short */}
      <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 hover:-translate-y-1 group">
        <div className="flex items-start gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-5 h-5 text-amber-400 fill-current" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <svg className="w-10 h-10 text-teal-200 mb-4 opacity-50" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
        <p className="text-slate-700 text-lg leading-relaxed mb-6">
          As a food blogger with 200K followers, I'm extremely picky. OG's Resto has become my go-to recommendation. Their seasonal menu changes keep things exciting, and the chef's attention to plating makes every dish Instagram-worthy. Plus, their loyalty program actually rewards frequent diners - I've earned 3 free meals this year!
        </p>
        <div className="flex items-center gap-4 pt-4 border-t border-slate-100">
          <img 
            src="https://cdn.pixabay.com/photo/2016/11/29/13/14/attractive-1869761_1280.jpg" 
            alt="Jessica Rodriguez"
            className="w-14 h-14 rounded-full object-cover ring-4 ring-teal-50 group-hover:ring-teal-100 transition-all"
          />
          <div>
            <h4 className="font-bold text-slate-900">Jessica Rodriguez</h4>
            <p className="text-sm text-slate-500">Food Blogger & Influencer</p>
          </div>
        </div>
      </div>

      {/* Testimonial 4 - Medium-Tall */}
      <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 hover:-translate-y-1 group lg:col-span-2">
        <div className="flex items-start gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-5 h-5 text-amber-400 fill-current" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <svg className="w-10 h-10 text-blue-200 mb-4 opacity-50" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
        <p className="text-slate-700 text-lg leading-relaxed mb-6">
          My wife and I celebrated our 25th anniversary at OG's Resto last month, and it was absolutely magical. From the moment we walked in, the staff made us feel like VIPs. They surprised us with a complimentary champagne toast and a custom dessert with "Happy Anniversary" written in chocolate. The ambiance was romantic without being stuffy, and our server knew the menu inside-out, making perfect wine pairings for each course. We've been to dozens of fine dining establishments, but this experience stands out. Already booked our next visit for her birthday in December!
        </p>
        <div className="flex items-center gap-4 pt-4 border-t border-slate-100">
          <img 
            src="https://cdn.pixabay.com/photo/2016/11/18/19/07/happy-1836445_1280.jpg" 
            alt="David Thompson"
            className="w-14 h-14 rounded-full object-cover ring-4 ring-blue-50 group-hover:ring-blue-100 transition-all"
          />
          <div>
            <h4 className="font-bold text-slate-900">David Thompson</h4>
            <p className="text-sm text-slate-500">Retired Executive & Food Enthusiast</p>
          </div>
        </div>
      </div>

    </div>

    {/* Bottom CTA */}
    <div className="text-center mt-16">
      <div className="inline-flex items-center gap-2 text-slate-600 bg-white px-6 py-3 rounded-full shadow-md">
        <span className="text-2xl font-bold text-blue-600">4.9</span>
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-5 h-5 text-amber-400 fill-current" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <span className="text-sm">from 2,847+ reviews</span>
      </div>
    </div>
  </div>
</section>
  );
}