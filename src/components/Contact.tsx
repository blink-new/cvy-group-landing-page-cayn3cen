import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send,
  Calendar
} from 'lucide-react'

export function Contact() {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: '800.770.4592',
      description: 'Call us during business hours'
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'info@cvygroup.com',
      description: 'We respond within 24 hours'
    },
    {
      icon: MapPin,
      title: 'Office',
      details: '8221 Old Courthouse Rd, Suite 207',
      description: 'Vienna, VA 22182'
    },
    {
      icon: Clock,
      title: 'Hours',
      details: 'Mon-Fri: 9AM-6PM',
      description: 'Weekend appointments available'
    }
  ]

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Get Started Today
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to take control of your financial future? Contact us for a free consultation 
            and discover how CVY Group can help you achieve your goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900">
                Schedule Your Free Consultation
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <Input id="firstName" placeholder="John" />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <Input id="lastName" placeholder="Doe" />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <Input id="email" type="email" placeholder="john@example.com" />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <Input id="phone" type="tel" placeholder="(123) 456-7890" />
              </div>
              
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                  Service Interest
                </label>
                <select 
                  id="service" 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="">Select a service</option>
                  <option value="tax">Tax Preparation</option>
                  <option value="accounting">Bookkeeping & Accounting</option>
                  <option value="payroll">Payroll Services</option>
                  <option value="investment">Investment Advisory</option>
                  <option value="business">Business Consulting</option>
                  <option value="planning">Financial Planning</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <Textarea 
                  id="message" 
                  placeholder="Tell us about your financial needs and goals..."
                  rows={4}
                />
              </div>
              
              <Button className="w-full text-lg py-3">
                <Send className="mr-2 h-5 w-5" />
                Send Message
              </Button>
              
              <p className="text-sm text-gray-600 text-center">
                We'll respond within 24 hours to schedule your free consultation.
              </p>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon
                return (
                  <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <IconComponent className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-1">
                            {info.title}
                          </h3>
                          <p className="text-gray-900 font-medium mb-1">
                            {info.details}
                          </p>
                          <p className="text-sm text-gray-600">
                            {info.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>

            {/* Quick Actions */}
            <Card className="border-0 shadow-lg bg-gradient-to-r from-primary to-blue-700 text-white">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-4">
                  Prefer to Talk Directly?
                </h3>
                <p className="mb-6 text-blue-100">
                  Call us now for immediate assistance or to schedule an appointment 
                  that fits your schedule.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="secondary" className="flex-1" asChild>
                    <a href="tel:+18007704592">
                      <Phone className="mr-2 h-4 w-4" />
                      Call Now
                    </a>
                  </Button>
                  <Button variant="outline" className="flex-1 bg-white/10 border-white/20 text-white hover:bg-white/20">
                    <Calendar className="mr-2 h-4 w-4" />
                    Book Online
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Map Placeholder */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-0">
                <div className="h-64 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <h4 className="font-semibold text-gray-700 mb-2">
                      Visit Our Office
                    </h4>
                    <p className="text-gray-600">
                      8221 Old Courthouse Rd, Suite 207<br />
                      Vienna, VA 22182
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}