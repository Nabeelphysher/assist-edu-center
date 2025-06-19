import React from 'react';
import { Users, ArrowLeft, UserPlus, Settings, FileText } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Advisors = () => {
  const guides = [
    {
      title: 'Adding New Advisors',
      description: 'Complete guide to onboarding new advisors',
      steps: [
        'Navigate to Advisors → Add New Advisor',
        'Enter personal information (name, email, phone)',
        'Set up login credentials and temporary password',
        'Assign areas of expertise and availability',
        'Configure access permissions and save'
      ]
    },
    {
      title: 'Managing Advisor Schedules',
      description: 'Set up and manage advisor schedules',
      steps: [
        'Go to Advisors → Schedule Management',
        'Select the advisor from the list',
        'Add or modify available time slots',
        'Save changes and notify the advisor',
        'Review and confirm the updated schedule'
      ]
    },
    {
      title: 'Viewing Advisor Reports',
      description: 'Access reports related to advisor performance',
      steps: [
        'Access Advisors → Performance Reports',
        'Select the advisor and date range',
        'Generate the report for review',
        'Download or print the report as needed',
        'Discuss findings in the next team meeting'
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
                <Users className="w-6 h-6 text-blue-600 mr-2" />
                <span className="text-xl font-bold text-gray-900">Advisor Management</span>
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
              <UserPlus className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Add New Advisor</h3>
              <p className="text-gray-600 mb-4">Onboard new advisors</p>
              <Button className="w-full">Add Advisor</Button>
            </CardContent>
          </Card>
          <Card className="hover:shadow-md transition-shadow">
            <CardContent className="p-6 text-center">
              <Settings className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Manage Schedules</h3>
              <p className="text-gray-600 mb-4">Set up advisor schedules</p>
              <Button variant="outline" className="w-full">Manage Schedule</Button>
            </CardContent>
          </Card>
          <Card className="hover:shadow-md transition-shadow">
            <CardContent className="p-6 text-center">
              <FileText className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">View Reports</h3>
              <p className="text-gray-600 mb-4">Access advisor performance reports</p>
              <Button variant="outline" className="w-full">View Reports</Button>
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
                      <span className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold mr-3">
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

export default Advisors;