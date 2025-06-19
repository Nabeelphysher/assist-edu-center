
import React, { useState } from 'react';
import FAQItem from './FAQItem';

interface FAQ {
  id: string;
  question: string;
  answer: string;
}

const FAQSection = () => {
  const [expandedFAQ, setExpandedFAQ] = useState<string | null>(null);

  const faqs: FAQ[] = [
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

  const toggleFAQ = (faqId: string) => {
    setExpandedFAQ(expandedFAQ === faqId ? null : faqId);
  };

  return (
    <div className="mb-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq) => (
          <FAQItem 
            key={faq.id} 
            faq={faq} 
            isExpanded={expandedFAQ === faq.id}
            onToggle={toggleFAQ}
          />
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
