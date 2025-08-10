import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, BookOpen, Clock, Award } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface CourseCardProps {
  id: string;
  title: string;
  description: string;
  level: string;
  image: string;
  topics: string[];
  duration: string;
  difficulty: "مبتدئ" | "متوسط" | "متقدم";
  completed?: boolean;
  prerequisites?: string;
}

export const CourseCard = ({ 
  id, 
  title, 
  description, 
  level, 
  image, 
  topics, 
  duration, 
  difficulty,
  completed = false,
  prerequisites 
}: CourseCardProps) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/course/${id}`);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "مبتدئ": return "status-success";
      case "متوسط": return "status-warning";
      case "متقدم": return "status-info";
      default: return "status-info";
    }
  };

  return (
    <Card 
      className="card-interactive group overflow-hidden h-full"
      onClick={handleCardClick}
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4">
          <Badge className={getDifficultyColor(difficulty)}>
            {difficulty}
          </Badge>
        </div>
        {completed && (
          <div className="absolute bottom-4 right-4">
            <Badge className="status-success">
              <Award className="w-3 h-3 ml-1" />
              مكتمل
            </Badge>
          </div>
        )}
      </div>
      
      <CardHeader className="pb-2">
        <CardTitle className="text-right heading-sm text-foreground group-hover:text-primary transition-colors">
          {title}
        </CardTitle>
        <CardDescription className="text-right text-muted-foreground">
          {description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="pt-0">
        <div className="flex items-center justify-between mb-4 text-sm text-muted-foreground">
          <div className="flex items-center">
            <Clock className="w-4 h-4 ml-1" />
            {duration}
          </div>
          <div className="flex items-center">
            <BookOpen className="w-4 h-4 ml-1" />
            {topics.length} موضوع
          </div>
        </div>
        
        {prerequisites && (
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 mb-4">
            <p className="text-xs text-amber-700 font-medium">
              📋 {prerequisites}
            </p>
          </div>
        )}
        
        <div className="space-y-2 mb-4">
          <h4 className="text-sm font-medium text-foreground">المواضيع الرئيسية:</h4>
          <div className="flex flex-wrap gap-1">
            {topics.slice(0, 3).map((topic, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {topic}
              </Badge>
            ))}
            {topics.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{topics.length - 3} المزيد
              </Badge>
            )}
          </div>
        </div>
        
        <Button 
          className="w-full btn-hero"
          onClick={(e) => {
            e.stopPropagation();
            navigate(`/course/${id}`);
          }}
        >
          <ArrowLeft className="w-4 h-4 ml-2" />
          عرض التفاصيل
        </Button>
      </CardContent>
    </Card>
  );
};