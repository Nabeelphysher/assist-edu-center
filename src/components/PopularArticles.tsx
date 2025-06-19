
import React from 'react';
import { ChevronDown } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const PopularArticles = () => {
  const popularArticles = [
    { title: 'How to Add a New Student', category: 'students', views: 1250 },
    { title: 'Bulk Upload Students via CSV', category: 'students', views: 980 },
    { title: 'Generating Attendance Reports', category: 'reports', views: 856 },
    { title: 'Assigning Teacher Permissions', category: 'teachers', views: 732 },
    { title: 'Downloading Grades in Excel/PDF', category: 'reports', views: 645 }
  ];

  return (
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
  );
};

export default PopularArticles;
