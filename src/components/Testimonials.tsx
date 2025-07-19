import { useState, useEffect } from 'react'
import { Card, CardContent } from './ui/card'
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react'
import { Button } from './ui/button'

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Small Business Owner',
      company: 'Johnson Consulting',
      content: 'CVY Group has been instrumental in helping me navigate the complexities of business taxes and financial planning. Their expertise saved me thousands of dollars and countless hours of stress.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Real Estate Investor',
      company: 'Chen Properties',
      content: 'The investment advisory services have been exceptional. The team helped me diversify my portfolio and plan for retirement. I feel confident about my financial future.',
      rating: 5
    },
    {
      name: 'Lisa Rodriguez',
      role: 'Marketing Director',
      company: 'Tech Innovations Inc.',
      content: 'Professional, knowledgeable, and always available when I need them. CVY Group handles all our payroll and accounting needs flawlessly. Highly recommended!',
      rating: 5
    },
    {
      name: 'David Thompson',
      role: 'Retired Teacher',
      company: 'Personal Client',
      content: 'After 30 years of teaching, I needed help with retirement planning and tax optimization. CVY Group made the process simple and stress-free. Excellent service!',
      rating: 5
    }
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  // Auto-advance testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [testimonials.length])

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients 
            have to say about working with CVY Group.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <Card className="border-0 shadow-xl">
            <CardContent className="p-8 lg:p-12">
              <div className="text-center">
                {/* Quote Icon */}
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Quote className="h-8 w-8 text-primary" />
                </div>

                {/* Stars */}
                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Testimonial Content */}
                <blockquote className="text-xl lg:text-2xl text-gray-700 leading-relaxed mb-8 italic">
                  "{testimonials[currentIndex].content}"
                </blockquote>

                {/* Author */}
                <div className="border-t border-gray-200 pt-6">
                  <div className="font-semibold text-gray-900 text-lg">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="text-gray-600">
                    {testimonials[currentIndex].role}
                  </div>
                  <div className="text-primary font-medium">
                    {testimonials[currentIndex].company}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg hover:shadow-xl"
            onClick={prevTestimonial}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg hover:shadow-xl"
            onClick={nextTestimonial}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex ? 'bg-primary' : 'bg-gray-300'
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-700">CPA</div>
            <div className="text-sm text-gray-600">Certified</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-700">IRS</div>
            <div className="text-sm text-gray-600">Authorized</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-700">BBB</div>
            <div className="text-sm text-gray-600">A+ Rating</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-700">FINRA</div>
            <div className="text-sm text-gray-600">Registered</div>
          </div>
        </div>
      </div>
    </section>
  )
}