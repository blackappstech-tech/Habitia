import React, { useState } from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { 
  Download as DownloadIcon,
  Smartphone,
  Star,
  Users,
  TrendingUp,
  Shield,
  QrCode,
  CheckCircle,
  ExternalLink
} from 'lucide-react';
import { toast } from 'sonner';

export const Download = () => {
  const [showQR, setShowQR] = useState(false);

  const features = [
    { icon: <CheckCircle className="w-5 h-5" />, text: "Free to download and use" },
    { icon: <CheckCircle className="w-5 h-5" />, text: "No ads or subscription required" },
    { icon: <CheckCircle className="w-5 h-5" />, text: "Cloud backup included" },
    { icon: <CheckCircle className="w-5 h-5" />, text: "Regular updates and new features" }
  ];

  const stats = [
    { icon: <Users className="w-6 h-6" />, value: "50K+", label: "Downloads" },
    { icon: <Star className="w-6 h-6" />, value: "4.8", label: "Rating" },
    { icon: <TrendingUp className="w-6 h-6" />, value: "85%", label: "Success Rate" },
    { icon: <Shield className="w-6 h-6" />, value: "100%", label: "Secure" }
  ];

  const handleGooglePlayClick = () => {
    window.open('https://play.google.com/store/apps/details?id=com.habitia.habittracker.blackapps', '_blank');
    toast.success('Redirecting to Google Play Store...');
  };

  const handleAppStoreClick = () => {
    toast.info('iOS version coming soon! Stay tuned for updates.');
  };

  const handleQRToggle = () => {
    setShowQR(!showQR);
    if (!showQR) {
      toast.info('QR code displayed! Scan with your phone camera.');
    }
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="secondary" className="mb-6 bg-blue-100 text-blue-700">
            📱 Get Started Today
          </Badge>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Download{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Habitia
            </span>{' '}
            for free
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Start building better habits today. Available on Android with iOS coming soon.
          </p>

          {/* Download Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
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

      {/* Download Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Download Options */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Choose your platform</h2>
              
              <div className="space-y-4">
                {/* Google Play Store */}
                <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer border-2 border-green-200 bg-green-50/50">
                  <CardContent className="p-6" onClick={handleGooglePlayClick}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
                          <Smartphone className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">Google Play Store</h3>
                          <p className="text-sm text-gray-600">Available now for Android devices</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge variant="secondary" className="bg-green-100 text-green-700">
                          Available
                        </Badge>
                        <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-green-600 transition-colors" />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* App Store */}
                <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer border-2 border-gray-200 bg-gray-50/50">
                  <CardContent className="p-6" onClick={handleAppStoreClick}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-gray-400 to-gray-500 rounded-lg flex items-center justify-center">
                          <Smartphone className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">Apple App Store</h3>
                          <p className="text-sm text-gray-600">Coming soon for iOS devices</p>
                        </div>
                      </div>
                      <Badge variant="secondary" className="bg-gray-100 text-gray-600">
                        Coming Soon
                      </Badge>
                    </div>
                  </CardContent>
                </Card>

                {/* QR Code Option */}
                <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer border-2 border-blue-200 bg-blue-50/50">
                  <CardContent className="p-6" onClick={handleQRToggle}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                          <QrCode className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">QR Code</h3>
                          <p className="text-sm text-gray-600">Scan with your phone camera</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        {showQR ? 'Hide' : 'Show'} QR
                      </Button>

                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* QR Code Display */}
              {showQR && (
                <Card className="mt-6 bg-white border-2 border-blue-200">
                  <CardContent className="p-6 text-center">
                    <h3 className="font-semibold text-gray-900 mb-4">Scan to Download</h3>
                    <div className="w-48 h-48 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <div className="text-6xl opacity-70">📱</div>
                    </div>
                    <p className="text-sm text-gray-600">
                      Point your phone camera at this QR code to download Habitia
                    </p>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Features List */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">What you get</h3>
              
              <div className="space-y-4 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="text-green-600 flex-shrink-0">
                      {feature.icon}
                    </div>
                    <span className="text-gray-700">{feature.text}</span>
                  </div>
                ))}
              </div>

              {/* Primary CTA */}
              <Button 
                onClick={handleGooglePlayClick}
                size="lg" 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 text-lg font-semibold mb-4"
              >
                <DownloadIcon className="w-5 h-5 mr-2" />
                Download for Android
              </Button>

              <p className="text-sm text-gray-600 text-center">
                Free download • No registration required • Start immediately
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* System Requirements */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">System Requirements</h2>
            <p className="text-xl text-gray-600">Make sure your device is compatible</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mr-3">
                    <Smartphone className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Android</h3>
                </div>
                <ul className="space-y-2 text-gray-600">
                  <li>• Android 7.0 (API level 24) or higher</li>
                  <li>• 100 MB free storage space</li>
                  <li>• Internet connection for cloud sync</li>
                  <li>• Notification permissions recommended</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg opacity-60">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-gray-400 to-gray-500 rounded-lg flex items-center justify-center mr-3">
                    <Smartphone className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">iOS</h3>
                </div>
                <ul className="space-y-2 text-gray-600">
                  <li>• iOS 14.0 or later (coming soon)</li>
                  <li>• iPhone 8 or newer recommended</li>
                  <li>• 100 MB free storage space</li>
                  <li>• Internet connection for cloud sync</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Your journey starts with a single download
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of users who are already building better habits with Habitia
          </p>
          
          <Button 
            onClick={handleGooglePlayClick}
            size="lg" 
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
          >
            <DownloadIcon className="w-5 h-5 mr-2" />
            Get Habitia Now
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Download;