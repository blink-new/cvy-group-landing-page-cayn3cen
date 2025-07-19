import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { 
  Calculator, 
  BookOpen, 
  Users, 
  TrendingUp, 
  Building, 
  FileText,
  ArrowRight
} from 'lucide-react'
import { Button } from './ui/button'

export function Services() {
  const services = [
    {
      icon: Calculator,
      title: 'Tax Preparation',
      description: 'Expert tax preparation and planning services for individuals and businesses. Maximize your deductions and minimize your tax liability.',
      features: ['Individual Tax Returns', 'Business Tax Returns', 'Tax Planning', 'IRS Representation']
    },
    {
      icon: BookOpen,
      title: 'Bookkeeping & Accounting',
      description: 'Comprehensive bookkeeping and accounting services to keep your finances organized and compliant.',
      features: ['Monthly Bookkeeping', 'Financial Statements', 'Cash Flow Management', 'QuickBooks Setup']
    },
    {
      icon: Users,
      title: 'Payroll Services',
      description: 'Complete payroll management including processing, tax filings, and compliance with federal and state regulations.',
      features: ['Payroll Processing', 'Tax Filings', 'Direct Deposit', 'Employee Benefits']
    },
    {
      icon: TrendingUp,
      title: 'Investment Advisory',
      description: 'Professional investment guidance and portfolio management to help you build and preserve wealth.',
      features: ['Portfolio Management', 'Retirement Planning', 'Risk Assessment', 'Investment Strategy']
    },
    {
      icon: Building,
      title: 'Business Consulting',
      description: 'Strategic business consulting to help you make informed decisions and grow your business.',
      features: ['Business Planning', 'Financial Analysis', 'Growth Strategies', 'Performance Metrics']
    },
    {
      icon: FileText,
      title: 'Financial Planning',
      description: 'Comprehensive financial planning services to help you achieve your long-term financial goals.',
      features: ['Estate Planning', 'Insurance Review', 'Goal Setting', 'Financial Education']
    }
  ]

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Financial Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From tax preparation to investment advisory, we provide the full spectrum 
            of financial services to meet all your personal and business needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-1">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                    <IconComponent className="h-6 w-6 text-primary group-hover:text-white" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-900">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Schedule a free consultation to discuss your financial needs and learn how 
              our expert team can help you achieve your goals.
            </p>
            <Button size="lg" className="text-lg px-8 py-4" asChild>
              <a href="#contact">
                Schedule Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}