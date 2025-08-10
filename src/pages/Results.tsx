import { useParams, useLocation, useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Award, 
  TrendingUp, 
  RotateCcw, 
  ArrowLeft,
  CheckCircle,
  XCircle,
  Home,
  FileText
} from "lucide-react";

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}

const courseNames = {
  "concrete-1": "خرسانة مسلحة 1",
  "structural-1": "تحليل إنشائي 1", 
  "materials-1": "هندسة المواد 1"
};

const nextCourses = {
  "concrete-1": "خرسانة مسلحة 2",
  "structural-1": "تحليل إنشائي 2",
  "materials-1": "هندسة المواد 2"
};

const Results = () => {
  const { courseId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  
  const { score, passed, answers, questions } = location.state || {};
  
  if (!score && score !== 0) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="heading-lg mb-4">لا توجد نتائج للعرض</h1>
          <Button onClick={() => navigate('/')}>
            العودة للرئيسية
          </Button>
        </div>
      </div>
    );
  }

  const courseName = courseNames[courseId as keyof typeof courseNames];
  const nextCourse = nextCourses[courseId as keyof typeof nextCourses];
  
  const correctAnswers = questions?.filter((question: Question, index: number) => 
    answers[index] === question.correctAnswer
  ).length || 0;

  const getScoreColor = (score: number) => {
    if (score >= 90) return "text-green-600";
    if (score >= 70) return "text-blue-600";
    if (score >= 50) return "text-amber-600";
    return "text-red-600";
  };

  const getScoreBadge = (score: number) => {
    if (score >= 90) return "امتياز";
    if (score >= 80) return "جيد جداً";
    if (score >= 70) return "جيد";
    if (score >= 60) return "مقبول";
    return "راسب";
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Results Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary text-white mb-6">
            {passed ? <Award className="w-10 h-10" /> : <TrendingUp className="w-10 h-10" />}
          </div>
          
          <h1 className="heading-xl mb-4">
            {passed ? "تهانينا! لقد نجحت" : "للأسف، لم تتمكن من النجاح"}
          </h1>
          
          <p className="text-lg text-muted-foreground">
            نتائج اختبار {courseName}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Score Card */}
          <Card className="card-elevated">
            <CardHeader>
              <CardTitle className="text-center">النتيجة النهائية</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className={`text-6xl font-bold mb-4 ${getScoreColor(score)}`}>
                {score}%
              </div>
              
              <Badge className={`${passed ? "status-success" : "status-warning"} text-lg px-4 py-1`}>
                {getScoreBadge(score)}
              </Badge>
              
              <div className="mt-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span>الدرجة المطلوبة:</span>
                  <span className="font-semibold">70%</span>
                </div>
                <Progress value={70} className="h-2" />
                <Progress value={score} className="h-3" />
              </div>
              
              <div className="grid grid-cols-2 gap-4 mt-6 text-sm">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">{correctAnswers}</div>
                  <div className="text-muted-foreground">إجابات صحيحة</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-600">{questions?.length - correctAnswers}</div>
                  <div className="text-muted-foreground">إجابات خاطئة</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Action Card */}
          <Card className="card-elevated">
            <CardHeader>
              <CardTitle className="text-center">الخطوات التالية</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {passed ? (
                <>
                  <div className="text-center mb-6">
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-green-700 mb-2">
                      مؤهل للمستوى التالي!
                    </h3>
                    <p className="text-muted-foreground">
                      يمكنك الآن التسجيل في {nextCourse}
                    </p>
                  </div>
                  
                  <Button className="w-full btn-hero" size="lg">
                    <Award className="w-5 h-5 ml-2" />
                    التسجيل في {nextCourse}
                  </Button>
                  
                  <Button variant="outline" className="w-full">
                    <FileText className="w-4 h-4 ml-2" />
                    تحميل الشهادة
                  </Button>
                </>
              ) : (
                <>
                  <div className="text-center mb-6">
                    <XCircle className="w-16 h-16 text-amber-500 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-amber-700 mb-2">
                      تحتاج إلى مراجعة أكثر
                    </h3>
                    <p className="text-muted-foreground">
                      احصل على 70% أو أكثر للانتقال للمستوى التالي
                    </p>
                  </div>
                  
                  <Button className="w-full btn-secondary" size="lg">
                    <RotateCcw className="w-5 h-5 ml-2" />
                    إعادة الاختبار
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => navigate(`/course/${courseId}`)}
                  >
                    <ArrowLeft className="w-4 h-4 ml-2" />
                    مراجعة المادة
                  </Button>
                </>
              )}
              
              <Button 
                variant="ghost" 
                className="w-full"
                onClick={() => navigate('/')}
              >
                <Home className="w-4 h-4 ml-2" />
                العودة للرئيسية
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Question Review */}
        {questions && (
          <Card className="mt-8 max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="text-right">مراجعة الإجابات</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {questions.map((question: Question, index: number) => {
                  const userAnswer = answers[index];
                  const isCorrect = userAnswer === question.correctAnswer;
                  
                  return (
                    <div key={question.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <h4 className="font-semibold mb-2">
                            السؤال {index + 1}: {question.question}
                          </h4>
                        </div>
                        <Badge className={isCorrect ? "status-success" : "bg-red-100 text-red-700 border-red-200"}>
                          {isCorrect ? "صحيح" : "خطأ"}
                        </Badge>
                      </div>
                      
                      <div className="space-y-2">
                        {question.options.map((option, optionIndex) => {
                          const isUserAnswer = userAnswer === optionIndex;
                          const isCorrectAnswer = question.correctAnswer === optionIndex;
                          
                          let className = "p-2 rounded border ";
                          if (isCorrectAnswer) {
                            className += "bg-green-50 border-green-200 text-green-700";
                          } else if (isUserAnswer && !isCorrect) {
                            className += "bg-red-50 border-red-200 text-red-700";
                          } else {
                            className += "bg-gray-50 border-gray-200";
                          }
                          
                          return (
                            <div key={optionIndex} className={className}>
                              <div className="flex items-center">
                                {isCorrectAnswer && <CheckCircle className="w-4 h-4 ml-2 text-green-600" />}
                                {isUserAnswer && !isCorrect && <XCircle className="w-4 h-4 ml-2 text-red-600" />}
                                <span>{option}</span>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Results;