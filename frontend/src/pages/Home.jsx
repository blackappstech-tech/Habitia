import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { 
  Target, 
  Clock, 
  Palette, 
  BarChart3, 
  Calendar, 
  Cloud,
  Play,
  Download,
  Star,
  Users,
  TrendingUp,
  Zap
} from 'lucide-react';
import HeroAnimation from '../components/HeroAnimation';

export const Home = () => {
  const features = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Streak Tracker",
      description: "Stay motivated by seeing how many days you've kept up your habits",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Smart Reminders",
      description: "Never miss a habit with helpful notifications",
      color: "from-blue-500 to-indigo-600"
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Custom Themes",
      description: "Personalize the app to match your style",
      color: "from-purple-500 to-violet-600"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Progress Charts",
      description: "Visualize your growth and track your journey",
      color: "from-orange-500 to-red-600"
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Heatmap View",
      description: "See your consistency at a glance",
      color: "from-teal-500 to-cyan-600"
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "Backup Data",
      description: "Secure cloud backup for your progress",
      color: "from-indigo-500 to-blue-600"
    }
  ];

  const benefits = [
    "Simple, clean, and easy to use",
    "Designed to help anyone build discipline and self-growth",
    "Motivational approach that keeps you inspired every day",
    "Works for any goal: fitness, study, productivity, personal growth"
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Fitness Enthusiast",
      content: "Habitia helped me build a consistent workout routine. I'm on a 45-day streak!",
      rating: 5
    },
    {
      name: "Marcus Rodriguez",
      role: "Student",
      content: "The progress visualization keeps me motivated to study every day. Game changer!",
      rating: 5
    },
    {
      name: "Emily Johnson",
      role: "Professional",
      content: "Clean interface and smart reminders make habit tracking effortless.",
      rating: 5
    }
  ];

  const stats = [
    { icon: <Users className="w-5 h-5" />, value: "50K+", label: "Active Users" },
    { icon: <TrendingUp className="w-5 h-5" />, value: "2M+", label: "Habits Tracked" },
    { icon: <Zap className="w-5 h-5" />, value: "85%", label: "Success Rate" },
    { icon: <Star className="w-5 h-5" />, value: "4.8", label: "App Rating" }
  ];

  return (
    <div className="pt-16">
   {/* Hero Section */}
<section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
  <HeroAnimation />

  {/* Glassy Content */}
  <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 text-center 
                  bg-white/10 backdrop-blur-md rounded-2xl p-10 shadow-lg">
    <Badge variant="secondary" className="mb-6 bg-blue-100/60 text-blue-700 hover:bg-blue-200/70">
      🚀 Transform Your Life Today
    </Badge>

    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
      Build Better Habits,{' '}
      <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
        Build a Better You
      </span>
    </h1>

    <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
      Track daily habits, stay motivated with streaks, and transform your life one day at a time
    </p>

    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
      <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg">
        <Link to="/download">
          <Download className="w-5 h-5 mr-2" /> Download Habitia
        </Link>
      </Button>
      <Button variant="outline" size="lg" className="px-8 py-4 text-lg border-gray-300 hover:bg-gray-100">
        <Play className="w-5 h-5 mr-2" /> Watch Demo
      </Button>
    </div>

    {/* Stats */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
      {stats.map((stat, index) => (
        <div key={index} className="text-center">
          <div className="flex items-center justify-center text-blue-600 mb-2">
            {stat.icon}
          </div>
          <div className="text-2xl md:text-3xl font-bold text-gray-900">{stat.value}</div>
          <div className="text-sm text-gray-600">{stat.label}</div>
        </div>
      ))}
    </div>
  </div>
</section>





      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Everything you need to build lasting habits
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Powerful features designed to keep you motivated and on track
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/60 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Habitia?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <p className="text-gray-700 text-lg">{benefit}</p>
                </div>
              ))}
            </div>
            
            <div className="relative">
              <div className="w-full h-80 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center">
                <div className="text-6xl">📱</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What our users say
            </h2>
            <p className="text-xl text-gray-600">
              Join thousands who are building better habits with Habitia
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4">"{testimonial.content}"</p>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Start building better habits today
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of users who are transforming their lives with Habitia
          </p>
          
          <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
            <Link to="/download">
              <Download className="w-5 h-5 mr-2" />
              Get Started Free
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
