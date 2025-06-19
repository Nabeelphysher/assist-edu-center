import React from 'react';
import { Users, ArrowLeft, FileText, Settings, DollarSign } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HR = () => {
  const guides = [
    {
      title: 'Managing Employee Records',
      description: 'Complete guide to maintaining employee information',
      steps: [
        'Navigate to HR → Employee Records',
        'Add new employee details or edit existing records',
        'Upload necessary documents (ID, contracts)',
        'Set employment status and save changes',
        'Verify updates and ensure accuracy'
      ]
    },
    {
      title: 'Tracking Attendance',
      description: 'Monitor employee attendance and leave requests',
      steps: [
        'Go to HR → Attendance Management',
        'View attendance logs and reports',
        'Approve or reject leave requests',
        'Generate attendance summary reports',
        'Notify employees of attendance status'
      ]
    },
    {
      title: 'Handling Payroll',
      description: 'Manage payroll processing and employee compensation',
      steps: [
        'Access HR → Payroll Management',
        'Input salary details and deductions',
        'Generate payroll reports for review',
        'Disburse salaries and bonuses',
        'Ensure compliance with tax regulations'
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
                <span className="text-xl font-bold text-gray-900">Human Resources</span>
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
              <FileText className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Manage Employee Records</h3>
              <p className="text-gray-600 mb-4">Maintain employee information</p>
              <Button className="w-full">View Records</Button>
            </CardContent>
          </Card>
          <Card className="hover:shadow-md transition-shadow">
            <CardContent className="p-6 text-center">
              <Settings className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Track Attendance</h3>
              <p className="text-gray-600 mb-4">Monitor employee attendance</p>
              <Button variant="outline" className="w-full">Attendance Logs</Button>
            </CardContent>
          </Card>
          <Card className="hover:shadow-md transition-shadow">
            <CardContent className="p-6 text-center">
              <DollarSign className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Handle Payroll</h3>
              <p className="text-gray-600 mb-4">Manage payroll processing</p>
              <Button variant="outline" className="w-full">Payroll Management</Button>
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

export default HR;