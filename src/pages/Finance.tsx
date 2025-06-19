import React from 'react';
import { DollarSign, ArrowLeft, FileText, Upload, Download } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Finance = () => {
  const guides = [
    {
      title: 'Managing Budgets',
      description: 'Step-by-step guide to create and manage budgets',
      steps: [
        'Navigate to Finance → Budgets',
        'Select the fiscal year and department',
        'Enter budget details and allocations',
        'Review and approve the budget',
        'Save changes and notify stakeholders'
      ]
    },
    {
      title: 'Tracking Expenses',
      description: 'Guide to track and report expenses',
      steps: [
        'Go to Finance → Expense Tracker',
        'Input expense details (date, amount, category)',
        'Attach receipts and documentation',
        'Review expense reports',
        'Submit for approval'
      ]
    },
    {
      title: 'Generating Financial Reports',
      description: 'Create detailed financial reports for analysis',
      steps: [
        'Access Finance → Financial Reports',
        'Select report type (Monthly, Quarterly, Annual)',
        'Choose date range and filters',
        'Generate and download the report',
        'Review and share with stakeholders'
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
                <DollarSign className="w-6 h-6 text-green-600 mr-2" />
                <span className="text-xl font-bold text-gray-900">Finance Management</span>
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
              <DollarSign className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Manage Budgets</h3>
              <p className="text-gray-600 mb-4">Create and manage budgets</p>
              <Button className="w-full">Manage Budgets</Button>
            </CardContent>
          </Card>
          <Card className="hover:shadow-md transition-shadow">
            <CardContent className="p-6 text-center">
              <Upload className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Track Expenses</h3>
              <p className="text-gray-600 mb-4">Log and track expenses</p>
              <Button variant="outline" className="w-full">Track Expenses</Button>
            </CardContent>
          </Card>
          <Card className="hover:shadow-md transition-shadow">
            <CardContent className="p-6 text-center">
              <Download className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Generate Reports</h3>
              <p className="text-gray-600 mb-4">Download financial reports</p>
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
                      <span className="flex-shrink-0 w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm font-semibold mr-3">
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

export default Finance;