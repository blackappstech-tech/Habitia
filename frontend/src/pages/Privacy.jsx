import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Shield, Lock, Eye, Database, Globe, UserCheck, Mail, Calendar } from 'lucide-react';

export const Privacy = () => {
  const lastUpdated = "January 1, 2025";

  const sections = [
    {
      icon: <Database className="w-6 h-6" />,
      title: "Information We Collect",
      content: [
        "Account information (email address, username)",
        "Habit tracking data and progress statistics",
        "App usage patterns and preferences",
        "Device information for optimization",
        "Crash reports and error logs for debugging"
      ]
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "How We Use Your Information",
      content: [
        "Provide and improve our habit tracking services",
        "Sync your data across multiple devices",
        "Send helpful reminders and notifications",
        "Analyze app performance and user engagement",
        "Provide customer support and respond to inquiries"
      ]
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Data Security",
      content: [
        "All data is encrypted in transit and at rest",
        "Secure cloud storage with industry-standard protection",
        "Regular security audits and vulnerability assessments",
        "Limited access to your data by authorized personnel only",
        "Automatic backups to prevent data loss"
      ]
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Data Sharing",
      content: [
        "We do not sell your personal information to third parties",
        "Anonymous usage statistics may be shared for research",
        "Data may be shared to comply with legal requirements",
        "Service providers helping us operate the app (under strict agreements)",
        "In case of business transfer, with prior notice to users"
      ]
    },
    {
      icon: <UserCheck className="w-6 h-6" />,
      title: "Your Rights",
      content: [
        "Access and download your personal data",
        "Correct inaccurate information in your account",
        "Delete your account and associated data",
        "Opt-out of non-essential communications",
        "Request portability of your data to another service"
      ]
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="secondary" className="mb-6 bg-blue-100 text-blue-700">
            <Shield className="w-4 h-4 mr-2" />
            Privacy First
          </Badge>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Privacy Policy
          </h1>
          
          <p className="text-xl text-gray-600 mb-4">
            Your privacy is important to us. This policy explains how we collect, 
            use, and protect your information when you use Habitia.
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
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Commitment to Privacy</h2>
              <p className="text-gray-700 leading-relaxed">
                At Habitia, we believe that privacy is a fundamental right. We are committed to being 
                transparent about how we collect, use, and protect your personal information. This 
                privacy policy applies to all users of our mobile application and website.
              </p>
            </CardContent>
          </Card>

          {/* Privacy Sections */}
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

          {/* Additional Sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <Card className="border-0 bg-gray-50">
              <CardHeader>
                <CardTitle className="flex items-center text-lg text-gray-900">
                  <Lock className="w-5 h-5 mr-2 text-green-600" />
                  Cookie Policy
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm leading-relaxed">
                  We use essential cookies to provide our services and analytics cookies to understand 
                  how you use our app. You can manage cookie preferences in your device settings.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-gray-50">
              <CardHeader>
                <CardTitle className="flex items-center text-lg text-gray-900">
                  <Globe className="w-5 h-5 mr-2 text-blue-600" />
                  International Users
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm leading-relaxed">
                  We comply with GDPR, CCPA, and other privacy regulations. Users in different 
                  regions have specific rights regarding their personal data.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Children's Privacy */}
          <Card className="mt-8 border-2 border-orange-200 bg-orange-50">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Children's Privacy</h3>
              <p className="text-gray-700 leading-relaxed">
                Habitia is intended for users aged 13 and older. We do not knowingly collect 
                personal information from children under 13. If you are a parent and believe 
                your child has provided personal information, please contact us immediately.
              </p>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card className="mt-8 bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-0">
            <CardContent className="p-8 text-center">
              <Mail className="w-8 h-8 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Questions About Privacy?</h3>
              <p className="mb-6 opacity-90">
                If you have any questions about this privacy policy or how we handle your data, 
                we're here to help.
              </p>
              <div className="space-y-2 text-sm opacity-90">
                <p>Email: privacy@habitia.app</p>
                <p>Response time: Within 48 hours</p>
              </div>
            </CardContent>
          </Card>

          {/* Updates */}
          <Card className="mt-8 border-0 bg-gray-50">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Policy Updates</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                We may update this privacy policy from time to time. We will notify you of any 
                significant changes by email or through the app. Your continued use of Habitia 
                after any changes indicates your acceptance of the updated policy.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Privacy;