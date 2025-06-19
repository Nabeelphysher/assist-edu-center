
import React from 'react';
import { GraduationCap, ArrowLeft, UserPlus, Settings, Shield } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Teachers = () => {
  const guides = [
    {
      title: 'Adding New Teachers',
      description: 'Complete guide to onboarding new teaching staff',
      steps: [
        'Navigate to Teachers → Add New Teacher',
        'Enter personal information (name, email, phone)',
        'Set up login credentials and temporary password',
        'Assign subjects and grade levels',
        'Configure access permissions and save'
      ]
    },
    {
      title: 'Assigning Teacher Permissions',
      description: 'Set up role-based access controls for teaching staff',
      steps: [
        'Go to Teachers → Teacher List',
        'Find the teacher and click on Permissions',
        'Select appropriate role (Teacher, Senior Teacher, etc.)',
        'Configure specific module access (Students, Reports, etc.)',
        'Save permission changes and notify teacher'
      ]
    },
    {
      title: 'Managing Class Assignments',
      description: 'Assign teachers to subjects and manage their schedules',
      steps: [
        'Access Teachers → Class Assignments',
        'Select the teacher from the dropdown',
        'Choose subjects and grade levels',
        'Set up class schedule and room assignments',
        'Confirm assignments and update timetable'
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
                <GraduationCap className="w-6 h-6 text-green-600 mr-2" />
                <span className="text-xl font-bold text-gray-900">Teacher Management</span>
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
              <h3 className="text-lg font-semibold mb-2">Add New Teacher</h3>
              <p className="text-gray-600 mb-4">Onboard new teaching staff</p>
              <Button className="w-full">Add Teacher</Button>
            </CardContent>
          </Card>
          <Card className="hover:shadow-md transition-shadow">
            <CardContent className="p-6 text-center">
              <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Manage Permissions</h3>
              <p className="text-gray-600 mb-4">Set up role-based access</p>
              <Button variant="outline" className="w-full">Permissions</Button>
            </CardContent>
          </Card>
          <Card className="hover:shadow-md transition-shadow">
            <CardContent className="p-6 text-center">
              <Settings className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Class Assignments</h3>
              <p className="text-gray-600 mb-4">Assign subjects and schedules</p>
              <Button variant="outline" className="w-full">Assign Classes</Button>
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

export default Teachers;
