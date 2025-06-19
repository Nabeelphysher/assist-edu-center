
import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

interface FAQ {
  id: string;
  question: string;
  answer: string;
}

interface FAQItemProps {
  faq: FAQ;
  isExpanded: boolean;
  onToggle: (faqId: string) => void;
}

const FAQItem = ({ faq, isExpanded, onToggle }: FAQItemProps) => {
  return (
    <Card className="overflow-hidden">
      <CardHeader 
        className="cursor-pointer hover:bg-gray-50 transition-colors py-4"
        onClick={() => onToggle(faq.id)}
      >
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
          {isExpanded ? (
            <ChevronUp className="w-5 h-5 text-gray-400 flex-shrink-0" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
          )}
        </div>
      </CardHeader>
      
      {isExpanded && (
        <CardContent className="pt-0 pb-4">
          <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
        </CardContent>
      )}
    </Card>
  );
};

export default FAQItem;
