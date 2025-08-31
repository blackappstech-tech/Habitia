import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Target, 
  Clock, 
  Palette, 
  BarChart3, 
  Calendar, 
  Cloud,
  Download,
  Smartphone,
  Bell,
  TrendingUp,
  Shield,
  Zap
} from 'lucide-react';

export const Features = () => {
  const mainFeatures = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Streak Tracker",
      description: "Stay motivated by seeing how many days you've kept up your habits. Our visual streak counter helps you maintain momentum and celebrate milestones.",
      benefits: ["Visual progress tracking", "Milestone celebrations", "Motivation boost", "Consistency insights"],
      color: "from-green-500 to-emerald-600",
      mockupIcon: "🔥"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Smart Reminders",
      description: "Never miss a habit with our intelligent notification system that adapts to your schedule and preferences.",
      benefits: ["Customizable timing", "Smart frequency", "Gentle nudges", "Snooze options"],
      color: "from-blue-500 to-indigo-600",
      mockupIcon: "⏰"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Custom Themes",
      description: "Personalize your experience with beautiful themes that match your style and keep you engaged.",
      benefits: ["Multiple color schemes", "Dark/Light modes", "Seasonal themes", "Custom backgrounds"],
      color: "from-purple-500 to-violet-600",
      mockupIcon: "🎨"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Progress Charts",
      description: "Visualize your growth with detailed analytics and charts that show your improvement over time.",
      benefits: ["Weekly/Monthly views", "Success rate tracking", "Trend analysis", "Goal insights"],
      color: "from-orange-500 to-red-600",
      mockupIcon: "📊"
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Heatmap View",
      description: "See your consistency at a glance with our GitHub-style heatmap that shows your daily activity.",
      benefits: ["Year overview", "Pattern recognition", "Consistency tracking", "Visual feedback"],
      color: "from-teal-500 to-cyan-600",
      mockupIcon: "📅"
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud Backup",
      description: "Your progress is always safe with automatic cloud synchronization across all your devices.",
      benefits: ["Automatic sync", "Data security", "Multi-device access", "No data loss"],
      color: "from-indigo-500 to-blue-600",
      mockupIcon: "☁️"
    }
  ];

  const additionalFeatures = [
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Mobile Optimized",
      description: "Perfect experience on any device"
    },
    {
      icon: <Bell className="w-6 h-6" />,
      title: "Smart Notifications",
      description: "Get reminded at the perfect time"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Progress Analytics",
      description: "Deep insights into your habits"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Privacy First",
      description: "Your data stays private and secure"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Lightning Fast",
      description: "Smooth performance every time"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="secondary" className="mb-6 bg-blue-100 text-blue-700">
            ✨ Powerful Features
          </Badge>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Everything you need to{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              build lasting habits
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Discover the comprehensive toolkit that makes habit building simple, engaging, and successful
          </p>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {mainFeatures.map((feature, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm overflow-hidden">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-4">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                      {feature.icon}
                    </div>
                    <div>
                      <CardTitle className="text-2xl text-gray-900">{feature.title}</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                    {feature.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full"></div>
                        <span className="text-sm text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  {/* Mockup Preview */}
                  <div className="relative h-32 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg flex items-center justify-center">
                    <div className="text-4xl opacity-70">{feature.mockupIcon}</div>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-lg"></div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How it works
            </h2>
            <p className="text-xl text-gray-600">
              Start building better habits in three simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Create</h3>
              <p className="text-gray-600">
                Set up your habits with custom reminders and goals that fit your lifestyle
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Track</h3>
              <p className="text-gray-600">
                Log your daily progress and watch your streaks grow with satisfying visual feedback
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Succeed</h3>
              <p className="text-gray-600">
                Analyze your progress and celebrate milestones as you transform your life
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              And much more
            </h2>
            <p className="text-xl text-gray-600">
              Additional features that make Habitia the best habit tracker
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalFeatures.map((feature, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
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
            Ready to transform your habits?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Start your journey today with all these powerful features
          </p>
          
          <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
            <Link to="/download">
              <Download className="w-5 h-5 mr-2" />
              Download Now
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Features;