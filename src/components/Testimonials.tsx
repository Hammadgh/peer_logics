export default function Testimonials() {
  const testimonials = [
    {
      quote: "Great partnership.",
      author: "Sarah Johnson",
      role: "CEO, TechStart Inc.",
      rating: 5
    },
    {
      quote: "Delivered fast and right.",
      author: "Michael Chen",
      role: "CTO, DataFlow Systems",
      rating: 5
    },
    {
      quote: "Senior team, zero fluff.",
      author: "Emily Rodriguez",
      role: "Founder, GrowthCo",
      rating: 5
    }
  ];

  return (
    <section className="py-16 service-bg-primary">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold service-heading mb-4">
            What <span className="accent-cyan">Clients Say</span>
          </h2>
          <p className="text-lg service-text max-w-2xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what our clients have to say about our partnership and results.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative glass-card-enhanced bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700/50 rounded-xl p-6 hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20"
            >
              {/* Quote Icon */}
              <div className="absolute top-4 left-4 w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 accent-cyan" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.16 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.16 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                </svg>
              </div>

              {/* Quote */}
              <div className="pt-8 pb-6">
                <blockquote className="text-lg font-medium service-heading leading-relaxed">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
              </div>

              {/* Rating Stars */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-500 dark:text-yellow-400 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
              </div>

              {/* Author Info */}
              <div className="border-t border-gray-300 dark:border-gray-700/50 pt-4">
                <div className="font-semibold service-heading">{testimonial.author}</div>
                <div className="text-sm service-text-muted">{testimonial.role}</div>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="service-text-muted mb-6">
            Ready to join our satisfied clients?
          </p>
          <a href="/contact" className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/25 inline-block text-center">
            Start Your Project
          </a>
        </div>
      </div>
    </section>
  );
}



