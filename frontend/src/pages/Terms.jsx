import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { FileText, Scale, AlertTriangle, UserX, Shield, Calendar, Mail } from 'lucide-react';

export const Terms = () => {
  const lastUpdated = "January 1, 2025";

  const sections = [
    {
      icon: <UserX className="w-6 h-6" />,
      title: "Acceptance of Terms",
      content: [
        "By downloading, installing, or using Habitia, you agree to these terms",
        "You must be at least 13 years old to use our services",
        "If you disagree with any part of these terms, you may not use Habitia",
        "These terms apply to all users, including visitors and registered users",
        "Your use of the app constitutes acceptance of these terms and conditions"
      ]
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Use of the Service",
      content: [
        "Habitia is provided for personal, non-commercial use only",
        "You may use the app to track your habits and monitor your progress",
        "You are responsible for maintaining the security of your account",
        "You must provide accurate information when creating an account",
        "You agree not to use the service for any unlawful purposes"
      ]
    },
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: "Prohibited Activities",
      content: [
        "Attempting to hack, reverse engineer, or compromise our systems",
        "Uploading malicious content or harmful code",
        "Sharing inappropriate, offensive, or illegal content",
        "Creating multiple accounts to circumvent restrictions",
        "Using automated tools to access or scrape our services"
      ]
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Intellectual Property",
      content: [
        "All content and features in Habitia are owned by us or our licensors",
        "You retain ownership of the data you create while using the app",
        "You may not copy, distribute, or create derivative works without permission",
        "Our trademarks and logos may not be used without written consent",
        "We respect intellectual property rights and expect users to do the same"
      ]
    },
    {
      icon: <Scale className="w-6 h-6" />,
      title: "Limitation of Liability",
      content: [
        "Habitia is provided 'as is' without warranties of any kind",
        "We are not liable for any indirect, incidental, or consequential damages",
        "Our liability is limited to the amount you paid for the service (if any)",
        "You use the app at your own risk and discretion",
        "We do not guarantee uninterrupted or error-free service"
      ]
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="secondary" className="mb-6 bg-blue-100 text-blue-700">
            <FileText className="w-4 h-4 mr-2" />
            Legal Terms
          </Badge>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Terms & Conditions
          </h1>
          
          <p className="text-xl text-gray-600 mb-4">
            Please read these terms carefully before using Habitia. 
            These terms govern your use of our app and services.
          </p>
          
          <div className="flex items-center justify-center text-sm text-gray-500">
            <Calendar className="w-4 h-4 mr-2" />
            Last updated: {lastUpdated}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Introduction */}
          <Card className="mb-12 bg-gradient-to-r from-blue-50 to-indigo-50 border-0">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Welcome to Habitia</h2>
              <p className="text-gray-700 leading-relaxed">
                These Terms and Conditions ("Terms") govern your use of the Habitia mobile application 
                and website (collectively, the "Service") operated by Habitia ("us", "we", or "our"). 
                Please read these Terms carefully before using our Service.
              </p>
            </CardContent>
          </Card>

          {/* Terms Sections */}
          <div className="space-y-8">
            {sections.map((section, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-0 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl text-gray-900">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center text-white mr-4">
                      {section.icon}
                    </div>
                    {section.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {section.content.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Important Sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <Card className="border-0 bg-gray-50">
              <CardHeader>
                <CardTitle className="flex items-center text-lg text-gray-900">
                  <AlertTriangle className="w-5 h-5 mr-2 text-orange-600" />
                  Account Termination
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm leading-relaxed">
                  We reserve the right to suspend or terminate your account if you violate these terms. 
                  You may also delete your account at any time through the app settings.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-gray-50">
              <CardHeader>
                <CardTitle className="flex items-center text-lg text-gray-900">
                  <Scale className="w-5 h-5 mr-2 text-purple-600" />
                  Governing Law
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm leading-relaxed">
                  These terms are governed by applicable laws. Any disputes will be resolved through 
                  binding arbitration or in the courts of our jurisdiction.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Data and Privacy */}
          <Card className="mt-8 border-2 border-blue-200 bg-blue-50">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Data and Privacy</h3>
              <p className="text-gray-700 leading-relaxed">
                Your privacy is important to us. Please review our Privacy Policy to understand 
                how we collect, use, and protect your information. By using Habitia, you also 
                agree to our Privacy Policy.
              </p>
            </CardContent>
          </Card>

          {/* Service Availability */}
          <Card className="mt-8 border-2 border-green-200 bg-green-50">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Service Availability</h3>
              <p className="text-gray-700 leading-relaxed">
                We strive to keep Habitia available 24/7, but we cannot guarantee uninterrupted service. 
                We may need to suspend the service for maintenance, updates, or due to circumstances 
                beyond our control.
              </p>
            </CardContent>
          </Card>

          {/* Changes to Terms */}
          <Card className="mt-8 border-2 border-orange-200 bg-orange-50">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Changes to Terms</h3>
              <p className="text-gray-700 leading-relaxed">
                We reserve the right to modify these terms at any time. We will notify users of 
                significant changes via email or app notification. Continued use of the service 
                after changes indicates acceptance of the new terms.
              </p>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card className="mt-8 bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-0">
            <CardContent className="p-8 text-center">
              <Mail className="w-8 h-8 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Questions About These Terms?</h3>
              <p className="mb-6 opacity-90">
                If you have any questions about these Terms and Conditions, 
                please don't hesitate to contact us.
              </p>
              <div className="space-y-2 text-sm opacity-90">
                <p>Email: legal@habitia.app</p>
                <p>Response time: Within 72 hours</p>
              </div>
            </CardContent>
          </Card>

          {/* Disclaimer */}
          <Card className="mt-8 border-0 bg-gray-100">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Important Disclaimer</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Habitia is a habit tracking tool designed to help you build better routines. 
                It is not a substitute for professional medical, psychological, or therapeutic advice. 
                If you have concerns about your mental or physical health, please consult with 
                qualified healthcare professionals.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Terms;