
import React from 'react';
import { Clock, Eye } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface Article {
  title: string;
  description: string;
  readTime: string;
  difficulty: string;
  views: number;
}

interface ArticleCardProps {
  article: Article;
}

const ArticleCard = ({ article }: ArticleCardProps) => {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Card className="hover:shadow-md transition-shadow cursor-pointer">
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
  );
};

export default ArticleCard;
