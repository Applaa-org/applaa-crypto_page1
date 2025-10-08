import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from '@/components/ui/navigation-menu'
import { cn } from '@/lib/utils'
import { Bitcoin, TrendingUp, Shield, Zap, ArrowRight, Menu, X, Star, Globe, Users, DollarSign } from 'lucide-react'
import { MadeWithApplaa } from '@/components/made-with-applaa'

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const features = [
    {
      icon: <Shield className="h-8 w-8 text-blue-500" />,
      title: "Bank-Grade Security",
      description: "Multi-layer encryption and cold storage protection for your digital assets"
    },
    {
      icon: <Zap className="h-8 w-8 text-yellow-500" />,
      title: "Lightning Fast",
      description: "Instant transactions with our advanced blockchain infrastructure"
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-green-500" />,
      title: "Smart Analytics",
      description: "AI-powered insights and real-time market analysis"
    }
  ]

  const stats = [
    { value: "$2.5B+", label: "Trading Volume" },
    { value: "2M+", label: "Active Users" },
    { value: "150+", label: "Countries Supported" },
    { value: "99.9%", label: "Uptime" }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-lg border-b border-white/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Bitcoin className="h-6 w-6" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                CryptoHub
              </span>
            </div>

            {/* Desktop Navigation */}
            <NavigationMenu className="hidden md:block">
              <NavigationMenuList className="space-x-8">
                <NavigationMenuItem>
                  <NavigationMenuLink href="#features" className={navigationMenuTriggerStyle()}>
                    Features
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink href="#stats" className={navigationMenuTriggerStyle()}>
                    Stats
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink href="#testimonials" className={navigationMenuTriggerStyle()}>
                    Testimonials
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                    Get Started
                  </Button>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-white/10">
              <div className="flex flex-col space-y-4 pt-4">
                <a href="#features" className="text-white/80 hover:text-white transition-colors">Features</a>
                <a href="#stats" className="text-white/80 hover:text-white transition-colors">Stats</a>
                <a href="#testimonials" className="text-white/80 hover:text-white transition-colors">Testimonials</a>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white w-full">
                  Get Started
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-24 pb-32 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Trade Crypto with Confidence
            </h1>
            <p className="text-xl md:text-2xl text-white/80 mb-8 leading-relaxed">
              Join millions of traders worldwide. Buy, sell, and manage your digital assets with the most trusted cryptocurrency platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 text-lg"
              >
                Start Trading Now
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 px-8 py-6 text-lg"
              >
                Watch Demo
              </Button>
            </div>
            
            {/* App Preview Mock */}
            <div className="relative mx-auto max-w-4xl">
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="bg-green-500/20 rounded-lg p-4 text-center">
                    <p className="text-sm text-green-400">BTC/USDT</p>
                    <p className="text-2xl font-bold">$43,250</p>
                    <p className="text-sm text-green-500">+2.45%</p>
                  </div>
                  <div className="bg-red-500/20 rounded-lg p-4 text-center">
                    <p className="text-sm text-red-400">ETH/USDT</p>
                    <p className="text-2xl font-bold">$2,650</p>
                    <p className="text-sm text-red-500">-1.23%</p>
                  </div>
                  <div className="bg-blue-500/20 rounded-lg p-4 text-center">
                    <p className="text-sm text-blue-400">SOL/USDT</p>
                    <p className="text-2xl font-bold">$98.50</p>
                    <p className="text-sm text-blue-500">+5.67%</p>
                  </div>
                </div>
                <div className="bg-white/10 rounded-lg p-4 text-center">
                  <p className="text-white/60 text-sm mb-2">24h Trading Volume</p>
                  <p className="text-3xl font-bold">$1.2B+</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="py-16 bg-black/20 backdrop-blur-lg">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</p>
                <p className="text-white/60">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose CryptoHub?</h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Experience the future of cryptocurrency trading with our cutting-edge platform
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <Card key={index} className="bg-white/5 backdrop-blur-lg border-white/10 text-center">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-white text-xl mb-2">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-white/70">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 bg-black/20 backdrop-blur-lg">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">What Our Users Say</h2>
            <p className="text-xl text-white/80">Join thousands of satisfied crypto traders</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Sarah Chen",
                role: "Professional Trader",
                content: "CryptoHub's analytics and security features have completely transformed my trading strategy. The AI insights are incredibly accurate.",
                avatar: "https://picsum.photos/64/64?random=1",
                rating: 5
              },
              {
                name: "Marcus Rodriguez",
                role: "Blockchain Developer",
                content: "The best platform I've used for managing my crypto portfolio. The interface is intuitive and the transaction speeds are unmatched.",
                avatar: "https://picsum.photos/64/64?random=2",
                rating: 5
              },
              {
                name: "Emma Thompson",
                role: "Crypto Investor",
                content: "As someone new to crypto, CryptoHub made it so easy to get started. The educational resources are fantastic!",
                avatar: "https://picsum.photos/64/64?random=3",
                rating: 5
              }
            ].map((testimonial, index) => (
              <Card key={index} className="bg-white/5 backdrop-blur-lg border-white/10">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <h4 className="text-white font-semibold">{testimonial.name}</h4>
                      <p className="text-white/60 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="flex mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-white/80">"{testimonial.content}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 text-center">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Your Crypto Journey?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Join millions of traders worldwide and discover why CryptoHub is the most trusted cryptocurrency platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 text-lg"
            >
              Create Free Account
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10 px-8 py-6 text-lg"
            >
              Download App
            </Button>
          </div>
          <p className="text-white/60">
            Get $10 in Bitcoin when you sign up and make your first trade
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/40 backdrop-blur-lg border-t border-white/10 py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Bitcoin className="h-5 w-5" />
                </div>
                <span className="text-xl font-bold">CryptoHub</span>
              </div>
              <p className="text-white/60 text-sm">
                The most trusted cryptocurrency platform for secure trading and investment.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Platform</h3>
              <ul className="space-y-2 text-sm text-white/60">
                <li><a href="#" className="hover:text-white transition-colors">Trading</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Portfolio</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Analytics</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-sm text-white/60">
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Guides</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm text-white/60">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">KYC/AML</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-white/60 text-sm">
            <p>&copy; 2024 CryptoHub. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <MadeWithApplaa />
    </div>
  )
}

export default Index