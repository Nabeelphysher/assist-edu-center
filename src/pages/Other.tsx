import React from 'react';
import { Clipboard, ArrowLeft, Settings, HelpCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Other = () => {
  const guides = [
    {
      title: 'Managing Miscellaneous Tasks',
      description: 'Guide to handling various administrative tasks',
      steps: [
        'Navigate to Other → Miscellaneous Tasks',
        'Select the task type from the dropdown',
        'Fill in the required details for the task',
        'Review and confirm the task details',
        'Submit the task for processing'
      ]
    },
    {
      title: 'Generating Administrative Reports',
      description: 'Create reports for various administrative functions',
      steps: [
        'Go to Other → Administrative Reports',
        'Choose the report type from the options',
        'Select date range and relevant filters',
        'Generate and download the report',
        'Review the report for accuracy'
      ]
    },
    {
      title: 'Handling User Queries',
      description: 'Steps to manage and respond to user queries',
      steps: [
        'Access Other → User Queries',
        'Filter queries by status or type',
        'Select a query to view details',
        'Respond to the query or escalate if necessary',
        'Mark the query as resolved once addressed'
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
                <Clipboard className="w-6 h-6 text-yellow-600 mr-2" />
                <span className="text-xl font-bold text-gray-900">Miscellaneous Management</span>
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
              <Settings className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Manage Tasks</h3>
              <p className="text-gray-600 mb-4">Handle various administrative tasks</p>
              <Button className="w-full">Manage Tasks</Button>
            </CardContent>
          </Card>
          <Card className="hover:shadow-md transition-shadow">
            <CardContent className="p-6 text-center">
              <HelpCircle className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">User Queries</h3>
              <p className="text-gray-600 mb-4">Manage and respond to user queries</p>
              <Button variant="outline" className="w-full">View Queries</Button>
            </CardContent>
          </Card>
          <Card className="hover:shadow-md transition-shadow">
            <CardContent className="p-6 text-center">
              <Clipboard className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Administrative Reports</h3>
              <p className="text-gray-600 mb-4">Generate various reports</p>
              <Button variant="outline" className="w-full">Generate Reports</Button>
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
                      <span className="flex-shrink-0 w-8 h-8 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center text-sm font-semibold mr-3">
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

export default Other;