
import React from 'react';
import { ChevronDown, ChevronUp, LucideIcon } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import ArticleCard from './ArticleCard';

interface Article {
  title: string;
  description: string;
  readTime: string;
  difficulty: string;
  views: number;
}

interface KnowledgeBaseSectionData {
  id: string;
  title: string;
  icon: LucideIcon;
  color: string;
  articles: Article[];
}

interface KnowledgeBaseSectionProps {
  section: KnowledgeBaseSectionData;
  isExpanded: boolean;
  onToggle: (sectionId: string) => void;
}

const KnowledgeBaseSection = ({ section, isExpanded, onToggle }: KnowledgeBaseSectionProps) => {
  return (
    <Card className="overflow-hidden">
      <CardHeader 
        className="cursor-pointer hover:bg-gray-50 transition-colors"
        onClick={() => onToggle(section.id)}
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
          {isExpanded ? (
            <ChevronUp className="w-5 h-5 text-gray-400" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-400" />
          )}
        </div>
      </CardHeader>
      
      {isExpanded && (
        <CardContent className="pt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {section.articles.map((article, index) => (
              <ArticleCard key={index} article={article} />
            ))}
          </div>
        </CardContent>
      )}
    </Card>
  );
};

export default KnowledgeBaseSection;
