import React from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Download,
  Heart,
  Users,
  Target,
  Lightbulb,
  Award,
  Globe
} from 'lucide-react';

export const About = () => {
  const values = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Passion-Driven",
      description: "We believe in the power of habits to transform lives and are passionate about helping people achieve their goals."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "User-Centric",
      description: "Every feature is designed with our users in mind, focusing on simplicity, effectiveness, and delightful experiences."
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Results-Oriented",
      description: "We measure success by the positive changes our users make in their lives, not just app downloads or engagement."
    }
  ];

  const milestones = [
    {
      year: "2023",
      title: "The Beginning",
      description: "Started development with a simple goal: make habit tracking that actually works."
    },
    {
      year: "2024",
      title: "First Launch",
      description: "Released the initial version with core features and received overwhelming positive feedback."
    },
    {
      year: "2025",
      title: "Growing Community",
      description: "Reached 50,000+ active users and continues to help people build better habits every day."
    }
  ];

  const stats = [
    { icon: <Users className="w-8 h-8" />, number: "50K+", label: "Active Users" },
    { icon: <Target className="w-8 h-8" />, number: "2M+", label: "Habits Tracked" },
    { icon: <Award className="w-8 h-8" />, number: "85%", label: "Success Rate" },
    { icon: <Globe className="w-8 h-8" />, number: "40+", label: "Countries" }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="secondary" className="mb-6 bg-blue-100 text-blue-700">
            💡 Our Story
          </Badge>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Building habits that{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              change lives
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            We believe that small, consistent actions lead to extraordinary transformations. 
            That's why we created Habitia – to make building life-changing habits simple, 
            enjoyable, and sustainable.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <Lightbulb className="w-8 h-8 text-blue-600 mr-3" />
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Mission</h2>
              </div>
              
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                To empower individuals around the world to create positive, lasting change in their lives 
                through the power of habit formation. We're not just building an app – we're building 
                a movement toward better living.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Whether you're looking to improve your health, boost productivity, learn new skills, 
                or simply become more disciplined, Habitia provides the tools and motivation you need 
                to succeed.
              </p>
            </div>
            
            <div className="relative">
              <div className="w-full h-80 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center">
                <div className="text-8xl opacity-70">🎯</div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
                <Heart className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What drives us
            </h2>
            <p className="text-xl text-gray-600">
              The core values that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our journey
            </h2>
            <p className="text-xl text-gray-600">
              From idea to impact – the Habitia story
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-blue-500 to-purple-600"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                    <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <CardContent className="p-6">
                        <Badge variant="secondary" className="mb-3 bg-blue-100 text-blue-700">
                          {milestone.year}
                        </Badge>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{milestone.title}</h3>
                        <p className="text-gray-600">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="relative z-10">
                    <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
                  </div>
                  
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Making an impact
            </h2>
            <p className="text-xl text-blue-100">
              Numbers that reflect our community's success
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Looking ahead
          </h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            We're just getting started. Our vision is to become the most trusted companion 
            for anyone looking to build better habits and create positive change. We're constantly 
            innovating, listening to our community, and working to make habit formation more 
            effective and enjoyable for everyone.
          </p>
          
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg">
            <Link to="/download">
              <Download className="w-5 h-5 mr-2" />
              Join Our Mission
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;