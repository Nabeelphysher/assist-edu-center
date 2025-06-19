import React from 'react';
import { ChevronRight } from 'lucide-react';
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
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Popular Articles</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {popularArticles.map((article, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-shadow cursor-pointer bg-white rounded-xl border border-gray-100"
            >
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-700 transition-colors mb-2">
                    {article.title}
                  </h3>
                  <p className="text-sm text-gray-500 capitalize mb-4">
                    {article.category} &bull; {article.views.toLocaleString()} views
                  </p>
                </div>
                <div className="flex items-center justify-end">
                  <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors" />
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
