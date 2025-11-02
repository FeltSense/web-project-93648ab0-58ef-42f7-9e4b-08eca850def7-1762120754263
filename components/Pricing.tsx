export default function Pricing() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sage-50 via-white to-terracotta-50 py-20 px-4">
  <div className="max-w-6xl mx-auto">
    {/* Header Section */}
    <div className="text-center mb-16">
      <div className="inline-block mb-4">
        <span className="bg-gradient-to-r from-sage-600 to-terracotta-600 text-white px-6 py-2 rounded-full text-sm font-semibold tracking-wide shadow-lg">
          SPECIAL LAUNCH OFFER
        </span>
      </div>
      <h1 className="font-display text-5xl md:text-6xl font-bold text-charcoal-900 mb-6">
        Your Complete Restaurant
        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-sage-600 via-terracotta-600 to-plum-600">
          Digital Experience
        </span>
      </h1>
      <p className="text-xl text-charcoal-600 max-w-2xl mx-auto leading-relaxed">
        Everything you need to bring OG's Resto online. One simple payment, yours forever.
      </p>
    </div>

    {/* Pricing Card */}
    <div className="max-w-lg mx-auto">
      <div className="relative">
        {/* Decorative background blur */}
        <div className="absolute inset-0 bg-gradient-to-br from-sage-400/20 via-terracotta-400/20 to-plum-400/20 blur-3xl transform -rotate-6 scale-105"></div>
        
        {/* Main Card */}
        <div className="relative bg-white rounded-3xl shadow-2xl border border-sage-100 overflow-hidden">
          {/* Accent bar */}
          <div className="h-2 bg-gradient-to-r from-sage-500 via-terracotta-500 to-plum-500"></div>
          
          <div className="p-10">
            {/* Price Section */}
            <div className="text-center mb-8 pb-8 border-b border-sage-100">
              <h2 className="font-display text-2xl font-bold text-charcoal-900 mb-4">
                Complete Website Package
              </h2>
              <div className="flex items-baseline justify-center gap-2 mb-2">
                <span className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sage-600 to-terracotta-600">
                  $29
                </span>
              </div>
              <p className="text-charcoal-600 font-medium">
                One-time payment • Lifetime access
              </p>
              <div className="mt-4 inline-flex items-center gap-2 bg-sage-50 px-4 py-2 rounded-full">
                <svg className="w-5 h-5 text-sage-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-semibold text-sage-700">No monthly fees ever</span>
              </div>
            </div>

            {/* Features List */}
            <div className="space-y-4 mb-8">
              <h3 className="font-display text-lg font-bold text-charcoal-900 mb-4">
                Everything Included:
              </h3>
              
              <div className="flex items-start gap-3 group">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-sage-500 to-sage-600 flex items-center justify-center mt-0.5 group-hover:scale-110 transition-transform">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-charcoal-800 font-semibold">Premium Ingredient Showcase</p>
                  <p className="text-sm text-charcoal-600">Highlight your fresh, locally-sourced ingredients with beautiful galleries</p>
                </div>
              </div>

              <div className="flex items-start gap-3 group">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-terracotta-500 to-terracotta-600 flex items-center justify-center mt-0.5 group-hover:scale-110 transition-transform">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-charcoal-800 font-semibold">Complete Online Ordering System</p>
                  <p className="text-sm text-charcoal-600">Full-featured ordering with delivery tracking and payment processing</p>
                </div>
              </div>

              <div className="flex items-start gap-3 group">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-plum-500 to-plum-600 flex items-center justify-center mt-0.5 group-hover:scale-110 transition-transform">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-charcoal-800 font-semibold">Smart Table Reservation System</p>
                  <p className="text-sm text-charcoal-600">Easy booking with real-time availability and automated confirmations</p>
                </div>
              </div>

              <div className="flex items-start gap-3 group">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-sage-500 to-terracotta-500 flex items-center justify-center mt-0.5 group-hover:scale-110 transition-transform">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-charcoal-800 font-semibold">Dynamic Menu with Dietary Filters</p>
                  <p className="text-sm text-charcoal-600">Showcase your diverse menu with vegan, gluten-free, and allergen options</p>
                </div>
              </div>

              <div className="flex items-start gap-3 group">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-terracotta-500 to-plum-500 flex items-center justify-center mt-0.5 group-hover:scale-110 transition-transform">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-charcoal-800 font-semibold">Atmosphere & Events Gallery</p>
                  <p className="text-sm text-charcoal-600">Beautiful photo galleries showcasing your welcoming space for all occasions</p>
                </div>
              </div>

              <div className="flex items-start gap-3 group">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-plum-500 to-sage-500 flex items-center justify-center mt-0.5 group-hover:scale-110 transition-transform">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-charcoal-800 font-semibold">Mobile-Optimized Experience</p>
                  <p className="text-sm text-charcoal-600">Perfect on every device - phone, tablet, or desktop</p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <button 
              onClick={() => window.location.href = 'https://buy.stripe.com/test_5kQ7sN0IX2Pqalc8WP0VO00?client_reference_id=93648ab0-58ef-42f7-9e4b-08eca850def7'}
              className="w-full bg-gradient-to-r from-sage-600 via-terracotta-600 to-plum-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 mb-4"
            >
              Get Your Website Now - $29
            </button>

            {/* Trust Badges */}
            <div className="flex items-center justify-center gap-4 text-sm text-charcoal-600">
              <div className="flex items-center gap-1">
                <svg className="w-4 h-4 text-sage-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Secure Payment</span>
              </div>
              <div className="flex items-center gap-1">
                <svg className="w-4 h-4 text-terracotta-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Instant Access</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom guarantee */}
      <div className="text-center mt-8 bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-sage-100">
        <p className="text-charcoal-700 font-medium mb-2">
          🎉 Launch Special: Save $70 off regular price
        </p>
        <p className="text-sm text-charcoal-600">
          Get everything you need to launch OG's Resto online. No hidden fees, no subscriptions.
        </p>
      </div>
    </div>
  </div>
</div>
  );
}