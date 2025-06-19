
import React from 'react';
import { Users, GraduationCap, FileText, Settings } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const CategoriesSection = () => {
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

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Browse by Category</h2>
          <p className="text-lg text-gray-600">Quick access to the most common tasks and guides</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link key={category.id} to={`/${category.id}`}>
              <Card className="hover:shadow-lg transition-shadow cursor-pointer group h-full">
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
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
