import { Button } from './ui/button'
import { ArrowRight, CheckCircle } from 'lucide-react'

export function Hero() {
  const trustIndicators = [
    '20+ Years of Experience',
    'Licensed & Certified',
    'Trusted by 500+ Clients',
    'Full-Service Solutions'
  ]

  return (
    <section className="relative pt-20 pb-16 lg:pt-24 lg:pb-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-amber-50"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary font-medium text-sm mb-6">
              <span>🏆 Award-Winning Financial Services</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Your Trusted
              <span className="text-primary block">Financial Partner</span>
              Since 2001
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Comprehensive financial services including tax preparation, accounting, 
              payroll management, investments, and business consulting. Let our expertise 
              drive your financial success.
            </p>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {trustIndicators.map((indicator, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{indicator}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8 py-4" asChild>
                <a href="#contact">
                  Schedule Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4" asChild>
                <a href="#services">View Our Services</a>
              </Button>
            </div>
          </div>

          {/* Hero Image/Visual */}
          <div className="relative animate-fade-in">
            <div className="relative bg-gradient-to-br from-primary to-blue-700 rounded-2xl p-8 shadow-2xl">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-gray-900">Financial Growth</h3>
                    <span className="text-green-500 font-bold">+24.5%</span>
                  </div>
                  <div className="h-32 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg flex items-end justify-center p-4">
                    <div className="flex space-x-2 items-end">
                      <div className="w-4 h-8 bg-white/80 rounded"></div>
                      <div className="w-4 h-12 bg-white/90 rounded"></div>
                      <div className="w-4 h-16 bg-white rounded"></div>
                      <div className="w-4 h-20 bg-white rounded"></div>
                      <div className="w-4 h-24 bg-white rounded"></div>
                    </div>
                  </div>
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Jan</span>
                    <span>Mar</span>
                    <span>May</span>
                    <span>Jul</span>
                    <span>Sep</span>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-accent text-white p-3 rounded-full shadow-lg">
                <span className="text-sm font-bold">$</span>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-green-500 text-white p-3 rounded-full shadow-lg">
                <CheckCircle className="h-4 w-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}