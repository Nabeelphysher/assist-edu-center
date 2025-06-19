
import React from 'react';
import { FileText, ArrowLeft, Download, Filter, Calendar } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Reports = () => {
  const guides = [
    {
      title: 'Generating Attendance Reports',
      description: 'Create detailed attendance reports for students and classes',
      steps: [
        'Navigate to Reports → Attendance Reports',
        'Select date range using the calendar picker',
        'Choose specific classes or students',
        'Select report format (Summary or Detailed)',
        'Generate and download the report'
      ]
    },
    {
      title: 'Grade Export to Excel/PDF',
      description: 'Export student grades in various formats for external use',
      steps: [
        'Go to Reports → Grade Reports',
        'Filter by subject, class, or time period',
        'Choose export format (Excel, PDF, CSV)',
        'Configure report layout and columns',
        'Download the formatted report'
      ]
    },
    {
      title: 'Custom Report Builder',
      description: 'Create custom reports with filters and advanced options',
      steps: [
        'Access Reports → Custom Reports',
        'Select data sources (Students, Grades, Attendance)',
        'Add filters and sorting criteria',
        'Design report layout and formatting',
        'Save template and generate report'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center text-blue-600 hover:text-blue-800 mr-4">
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back to Support
              </Link>
              <div className="flex items-center">
                <FileText className="w-6 h-6 text-purple-600 mr-2" />
                <span className="text-xl font-bold text-gray-900">Reports & Analytics</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="hover:shadow-md transition-shadow">
            <CardContent className="p-6 text-center">
              <Calendar className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Attendance Report</h3>
              <p className="text-gray-600 mb-4">Generate attendance summaries</p>
              <Button className="w-full">Generate Report</Button>
            </CardContent>
          </Card>
          <Card className="hover:shadow-md transition-shadow">
            <CardContent className="p-6 text-center">
              <Download className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Grade Export</h3>
              <p className="text-gray-600 mb-4">Download grades in Excel/PDF</p>
              <Button variant="outline" className="w-full">Export Grades</Button>
            </CardContent>
          </Card>
          <Card className="hover:shadow-md transition-shadow">
            <CardContent className="p-6 text-center">
              <Filter className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Custom Reports</h3>
              <p className="text-gray-600 mb-4">Build custom reports with filters</p>
              <Button variant="outline" className="w-full">Create Report</Button>
            </CardContent>
          </Card>
        </div>

        {/* Detailed Guides */}
        <div className="space-y-8">
          {guides.map((guide, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-2xl">{guide.title}</CardTitle>
                <CardDescription className="text-lg">{guide.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ol className="space-y-3">
                  {guide.steps.map((step, stepIndex) => (
                    <li key={stepIndex} className="flex items-start">
                      <span className="flex-shrink-0 w-8 h-8 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-sm font-semibold mr-3">
                        {stepIndex + 1}
                      </span>
                      <span className="text-gray-700">{step}</span>
                    </li>
                  ))}
                </ol>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reports;
