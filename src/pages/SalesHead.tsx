import React from 'react';
import { BarChart, ArrowLeft, FileText, Settings } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const SalesHead = () => {
  const guides = [
    {
      title: 'Managing Sales Reports',
      description: 'Step-by-step guide to generate and analyze sales reports',
      steps: [
        'Navigate to Sales → Sales Reports',
        'Select the date range for the report',
        'Choose report type (Daily, Weekly, Monthly)',
        'Generate the report and review the data',
        'Download or share the report as needed'
      ]
    },
    {
      title: 'Tracking Sales Performance',
      description: 'Monitor sales performance metrics and KPIs',
      steps: [
        'Go to Sales → Performance Dashboard',
        'View key performance indicators (KPIs)',
        'Analyze trends and identify areas for improvement',
        'Set performance goals for the sales team',
        'Review performance regularly and adjust strategies'
      ]
    },
    {
      title: 'Setting Sales Targets',
      description: 'Establish sales targets for the team',
      steps: [
        'Access Sales → Target Management',
        'Define targets based on historical data',
        'Communicate targets to the sales team',
        'Monitor progress towards targets',
        'Adjust targets as necessary based on performance'
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
                <BarChart className="w-6 h-6 text-orange-600 mr-2" />
                <span className="text-xl font-bold text-gray-900">Sales Management</span>
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
              <FileText className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Generate Sales Report</h3>
              <p className="text-gray-600 mb-4">Create detailed sales reports</p>
              <Button className="w-full">Generate Report</Button>
            </CardContent>
          </Card>
          <Card className="hover:shadow-md transition-shadow">
            <CardContent className="p-6 text-center">
              <Settings className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Track Performance</h3>
              <p className="text-gray-600 mb-4">Monitor sales performance metrics</p>
              <Button variant="outline" className="w-full">View Dashboard</Button>
            </CardContent>
          </Card>
          <Card className="hover:shadow-md transition-shadow">
            <CardContent className="p-6 text-center">
              <FileText className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Set Sales Targets</h3>
              <p className="text-gray-600 mb-4">Define targets for the sales team</p>
              <Button variant="outline" className="w-full">Manage Targets</Button>
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
                      <span className="flex-shrink-0 w-8 h-8 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center text-sm font-semibold mr-3">
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

export default SalesHead;