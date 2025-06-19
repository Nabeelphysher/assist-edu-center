
import React from 'react';
import { Users, ArrowLeft, FileDown, Upload, Edit3, Trash2 } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Students = () => {
  const guides = [
    {
      title: 'How to Add a New Student',
      description: 'Complete step-by-step guide to register new students in the system',
      steps: [
        'Navigate to Students → Add New Student',
        'Fill in basic information (name, email, phone)',
        'Add academic details (grade, class, student ID)',
        'Upload profile photo (optional)',
        'Set enrollment status and save'
      ]
    },
    {
      title: 'Editing Student Information',
      description: 'Update student details, contact information, and academic records',
      steps: [
        'Go to Students → Student List',
        'Search for the student using filters',
        'Click on the student name or Edit button',
        'Modify the required fields',
        'Save changes and verify updates'
      ]
    },
    {
      title: 'Bulk Student Import via CSV',
      description: 'Upload multiple students at once using CSV file format',
      steps: [
        'Download the CSV template from Students → Bulk Import',
        'Fill in student data following the template format',
        'Upload the CSV file using the import tool',
        'Review and validate the data preview',
        'Confirm import and check for any errors'
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
                <span className="text-xl font-bold text-gray-900">Student Management</span>
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
              <Edit3 className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Add New Student</h3>
              <p className="text-gray-600 mb-4">Register a new student in the system</p>
              <Button className="w-full">Add Student</Button>
            </CardContent>
          </Card>
          <Card className="hover:shadow-md transition-shadow">
            <CardContent className="p-6 text-center">
              <Upload className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Bulk Import</h3>
              <p className="text-gray-600 mb-4">Upload multiple students via CSV</p>
              <Button variant="outline" className="w-full">Import CSV</Button>
            </CardContent>
          </Card>
          <Card className="hover:shadow-md transition-shadow">
            <CardContent className="p-6 text-center">
              <FileDown className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Export Data</h3>
              <p className="text-gray-600 mb-4">Download student list as Excel/PDF</p>
              <Button variant="outline" className="w-full">Export</Button>
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

export default Students;
