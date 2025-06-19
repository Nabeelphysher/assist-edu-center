
import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Users, GraduationCap, FileText, Settings, Clock, Eye } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const KnowledgeBase = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [expandedFAQ, setExpandedFAQ] = useState<string | null>(null);

  const knowledgeBaseSections = [
    {
      id: 'students',
      title: 'Student Management',
      icon: Users,
      color: 'bg-blue-500',
      articles: [
        {
          title: 'How to Add a New Student',
          description: 'Step-by-step guide to registering new students in the system',
          readTime: '3 min',
          difficulty: 'Beginner',
          views: 1250
        },
        {
          title: 'Editing Student Information',
          description: 'Update student details, contact information, and academic records',
          readTime: '2 min',
          difficulty: 'Beginner',
          views: 890
        },
        {
          title: 'Bulk Student Import via CSV',
          description: 'Upload multiple students at once using CSV file format',
          readTime: '5 min',
          difficulty: 'Intermediate',
          views: 654
        },
        {
          title: 'Student Enrollment Management',
          description: 'Manage course enrollments and class assignments',
          readTime: '4 min',
          difficulty: 'Intermediate',
          views: 432
        }
      ]
    },
    {
      id: 'teachers',
      title: 'Teacher & Mentor Management',
      icon: GraduationCap,
      color: 'bg-green-500',
      articles: [
        {
          title: 'Adding New Teachers',
          description: 'Complete guide to onboarding new teaching staff',
          readTime: '4 min',
          difficulty: 'Beginner',
          views: 732
        },
        {
          title: 'Assigning Teacher Permissions',
          description: 'Set up role-based access controls for teaching staff',
          readTime: '3 min',
          difficulty: 'Advanced',
          views: 567
        },
        {
          title: 'Managing Class Assignments',
          description: 'Assign teachers to subjects and manage their schedules',
          readTime: '5 min',
          difficulty: 'Intermediate',
          views: 445
        }
      ]
    },
    {
      id: 'reports',
      title: 'Reports & Analytics',
      icon: FileText,
      color: 'bg-purple-500',
      articles: [
        {
          title: 'Generating Attendance Reports',
          description: 'Create detailed attendance reports for students and classes',
          readTime: '3 min',
          difficulty: 'Beginner',
          views: 856
        },
        {
          title: 'Grade Export to Excel/PDF',
          description: 'Export student grades in various formats for external use',
          readTime: '2 min',
          difficulty: 'Beginner',
          views: 645
        },
        {
          title: 'Custom Report Builder',
          description: 'Create custom reports with filters and advanced options',
          readTime: '8 min',
          difficulty: 'Advanced',
          views: 234
        }
      ]
    }
  ];

  const faqs = [
    {
      id: 'faq1',
      question: 'Why can\'t I delete a student record?',
      answer: 'Student records with active enrollments or grade history cannot be deleted for data integrity. You can deactivate the student instead, which will remove them from active lists while preserving historical data.'
    },
    {
      id: 'faq2',
      question: 'How do I reset a teacher\'s password?',
      answer: 'Go to Teacher Management > Find the teacher > Click on their profile > Security Settings > Reset Password. The teacher will receive an email with instructions to set a new password.'
    },
    {
      id: 'faq3',
      question: 'Report generation failed - what should I do?',
      answer: 'First, check if you have the necessary permissions. Ensure your date range is valid and not too large. If the issue persists, try generating a smaller report or contact support for assistance.'
    },
    {
      id: 'faq4',
      question: 'Can I undo bulk student imports?',
      answer: 'Yes, bulk imports can be undone within 24 hours through the Import History section. After 24 hours, you\'ll need to manually remove students or contact support for assistance.'
    },
    {
      id: 'faq5',
      question: 'How do I backup student data?',
      answer: 'Navigate to Admin Settings > Data Management > Export Data. Select the data types you want to backup and choose your preferred format. Regular backups are performed automatically.'
    }
  ];

  const toggleSection = (sectionId: string) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId);
  };

  const toggleFAQ = (faqId: string) => {
    setExpandedFAQ(expandedFAQ === faqId ? null : faqId);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Knowledge Base Sections */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Knowledge Base</h2>
        <div className="space-y-6">
          {knowledgeBaseSections.map((section) => (
            <Card key={section.id} className="overflow-hidden">
              <CardHeader 
                className="cursor-pointer hover:bg-gray-50 transition-colors"
                onClick={() => toggleSection(section.id)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className={`w-10 h-10 ${section.color} rounded-lg flex items-center justify-center mr-4`}>
                      <section.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{section.title}</CardTitle>
                      <CardDescription>{section.articles.length} articles available</CardDescription>
                    </div>
                  </div>
                  {expandedSection === section.id ? (
                    <ChevronUp className="w-5 h-5 text-gray-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </div>
              </CardHeader>
              
              {expandedSection === section.id && (
                <CardContent className="pt-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {section.articles.map((article, index) => (
                      <Card key={index} className="hover:shadow-md transition-shadow cursor-pointer">
                        <CardContent className="p-4">
                          <h4 className="font-semibold text-gray-900 mb-2 hover:text-blue-600">
                            {article.title}
                          </h4>
                          <p className="text-sm text-gray-600 mb-3">{article.description}</p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <Badge variant="secondary" className={getDifficultyColor(article.difficulty)}>
                                {article.difficulty}
                              </Badge>
                              <span className="text-xs text-gray-500 flex items-center">
                                <Clock className="w-3 h-3 mr-1" />
                                {article.readTime}
                              </span>
                            </div>
                            <span className="text-xs text-gray-500 flex items-center">
                              <Eye className="w-3 h-3 mr-1" />
                              {article.views}
                            </span>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <Card key={faq.id} className="overflow-hidden">
              <CardHeader 
                className="cursor-pointer hover:bg-gray-50 transition-colors py-4"
                onClick={() => toggleFAQ(faq.id)}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                  {expandedFAQ === faq.id ? (
                    <ChevronUp className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  )}
                </div>
              </CardHeader>
              
              {expandedFAQ === faq.id && (
                <CardContent className="pt-0 pb-4">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KnowledgeBase;
