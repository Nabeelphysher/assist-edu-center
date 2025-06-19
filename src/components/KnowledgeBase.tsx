
import React, { useState } from 'react';
import { Users, GraduationCap, FileText } from 'lucide-react';
import KnowledgeBaseSection from './KnowledgeBaseSection';
import FAQSection from './FAQSection';

const KnowledgeBase = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

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

  const toggleSection = (sectionId: string) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Knowledge Base Sections */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Knowledge Base</h2>
        <div className="space-y-6">
          {knowledgeBaseSections.map((section) => (
            <KnowledgeBaseSection
              key={section.id}
              section={section}
              isExpanded={expandedSection === section.id}
              onToggle={toggleSection}
            />
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <FAQSection />
    </div>
  );
};

export default KnowledgeBase;
