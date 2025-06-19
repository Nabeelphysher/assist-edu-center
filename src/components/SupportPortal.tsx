
import React, { useState } from 'react';
import { Search, Users, GraduationCap, FileText, Settings, Phone, MessageCircle, Mail, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const SupportPortal = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    {
      id: 'students',
      title: 'Student Management',
      description: 'Add, edit, and manage student records',
      icon: Users,
      color: 'bg-blue-500',
      articles: 12
    },
    {
      id: 'teachers',
      title: 'Teacher & Mentor Management',
      description: 'Manage staff, roles, and permissions',
      icon: GraduationCap,
      color: 'bg-green-500',
      articles: 8
    },
    {
      id: 'reports',
      title: 'Reports & Analytics',
      description: 'Generate and download reports',
      icon: FileText,
      color: 'bg-purple-500',
      articles: 15
    },
    {
      id: 'admin',
      title: 'Admin & Settings',
      description: 'System configuration and controls',
      icon: Settings,
      color: 'bg-orange-500',
      articles: 6
    }
  ];

  const popularArticles = [
    { title: 'How to Add a New Student', category: 'students', views: 1250 },
    { title: 'Bulk Upload Students via CSV', category: 'students', views: 980 },
    { title: 'Generating Attendance Reports', category: 'reports', views: 856 },
    { title: 'Assigning Teacher Permissions', category: 'teachers', views: 732 },
    { title: 'Downloading Grades in Excel/PDF', category: 'reports', views: 645 }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-white" />
                </div>
                <span className="ml-3 text-xl font-bold text-gray-900">EduSystem Support</span>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium">Home</a>
              <a href="#" className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium">Students</a>
              <a href="#" className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium">Teachers</a>
              <a href="#" className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium">Reports</a>
              <a href="#" className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Welcome to EduSystem Support
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Find comprehensive guides on managing students, teachers, and reports
          </p>
          <div className="max-w-2xl mx-auto relative">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="How can we help you? Search for guides, tutorials..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-4 py-4 text-lg bg-white text-gray-900 border-0 rounded-lg shadow-lg focus:ring-2 focus:ring-blue-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Browse by Category</h2>
            <p className="text-lg text-gray-600">Quick access to the most common tasks and guides</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Card key={category.id} className="hover:shadow-lg transition-shadow cursor-pointer group">
                <CardHeader>
                  <div className={`w-12 h-12 ${category.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl font-semibold">{category.title}</CardTitle>
                  <CardDescription className="text-gray-600">{category.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">{category.articles} articles</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Articles */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Popular Articles</h2>
          <div className="space-y-4">
            {popularArticles.map((article, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 hover:text-blue-600">
                        {article.title}
                      </h3>
                      <p className="text-sm text-gray-500 capitalize">{article.category} • {article.views} views</p>
                    </div>
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Need More Help?</h2>
          <p className="text-lg text-gray-600 mb-8">Can't find what you're looking for? Get in touch with our support team</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <MessageCircle className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Live Chat</h3>
                <p className="text-gray-600 mb-4">Get instant help from our support team</p>
                <Button className="w-full">Start Chat</Button>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Mail className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Email Support</h3>
                <p className="text-gray-600 mb-4">Send us a detailed message</p>
                <Button variant="outline" className="w-full">Send Email</Button>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Phone className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Phone Support</h3>
                <p className="text-gray-600 mb-4">Call us during business hours</p>
                <Button variant="outline" className="w-full">Call Now</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white">Contact Us</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Live Chat</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Documentation</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">System Status</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white">Video Tutorials</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">User Guides</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">API Documentation</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Best Practices</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white">Student Management</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Teacher Portal</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Reports</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Settings</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="text-gray-300">support@edusystem.com</li>
                <li className="text-gray-300">+1 (555) 123-4567</li>
                <li className="text-gray-300">Mon-Fri 9AM-6PM EST</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-300">&copy; 2024 EduSystem. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SupportPortal;
