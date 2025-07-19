import { Card, CardContent } from './ui/card'
import { Award, Users, Clock, Shield } from 'lucide-react'

export function About() {
  const stats = [
    {
      icon: Clock,
      number: '20+',
      label: 'Years Experience',
      description: 'Serving clients since 2001'
    },
    {
      icon: Users,
      number: '500+',
      label: 'Happy Clients',
      description: 'Individuals and businesses'
    },
    {
      icon: Award,
      number: '99%',
      label: 'Client Satisfaction',
      description: 'Consistently high ratings'
    },
    {
      icon: Shield,
      number: '100%',
      label: 'Compliance Rate',
      description: 'Always up to date'
    }
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center px-4 py-2 bg-accent/10 rounded-full text-accent font-medium text-sm mb-6">
              <span>About CVY Group</span>
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Two Decades of Financial Excellence
            </h2>
            
            <div className="space-y-4 text-gray-600 mb-8">
              <p className="text-lg leading-relaxed">
                Since 2001, CVY Group has been a trusted partner for individuals and businesses 
                seeking comprehensive financial services. Our team of certified professionals 
                brings decades of combined experience to every client relationship.
              </p>
              
              <p className="text-lg leading-relaxed">
                We pride ourselves on staying current with the latest tax laws, accounting 
                standards, and investment strategies to ensure our clients receive the most 
                effective and compliant financial guidance.
              </p>
              
              <p className="text-lg leading-relaxed">
                Our commitment to excellence and personalized service has earned us a reputation 
                as one of the most trusted financial service providers in the region.
              </p>
            </div>

            {/* Key Values */}
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Integrity First</h4>
                  <p className="text-gray-600">We maintain the highest ethical standards in all our dealings.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Client-Centered Approach</h4>
                  <p className="text-gray-600">Your financial success is our primary focus and motivation.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Continuous Innovation</h4>
                  <p className="text-gray-600">We leverage the latest technology and best practices.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <Card key={index} className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-1">
                      {stat.number}
                    </div>
                    <div className="font-semibold text-gray-900 mb-1">
                      {stat.label}
                    </div>
                    <div className="text-sm text-gray-600">
                      {stat.description}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Meet Our Expert Team
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Our certified professionals bring diverse expertise and a shared commitment 
            to helping you achieve your financial goals.
          </p>
          
          {/* Team placeholder - would be replaced with actual team photos */}
          <div className="bg-gradient-to-r from-primary to-blue-700 rounded-2xl p-12 text-white">
            <div className="max-w-3xl mx-auto">
              <h4 className="text-xl font-semibold mb-4">
                Certified Public Accountants • Licensed Investment Advisors • Tax Specialists
              </h4>
              <p className="text-blue-100">
                Our team holds advanced certifications and continues professional education 
                to stay at the forefront of financial services.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}