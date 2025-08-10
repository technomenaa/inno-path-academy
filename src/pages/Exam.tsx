import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { 
  Clock, 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle,
  AlertCircle
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}

const examQuestions = {
  "concrete-1": [
    {
      id: 1,
      question: "ما هي مقاومة الضغط المعيارية للخرسانة العادية؟",
      options: ["15-20 ميجا باسكال", "20-25 ميجا باسكال", "25-30 ميجا باسكال", "30-35 ميجا باسكال"],
      correctAnswer: 1
    },
    {
      id: 2,
      question: "ما هو الهدف الأساسي من استخدام حديد التسليح في الخرسانة؟",
      options: ["زيادة مقاومة الضغط", "زيادة مقاومة الشد", "تقليل الوزن", "تحسين العزل الحراري"],
      correctAnswer: 1
    },
    {
      id: 3,
      question: "ما هي نسبة الماء إلى الأسمنت المثلى للخرسانة العادية؟",
      options: ["0.3-0.4", "0.4-0.6", "0.6-0.8", "0.8-1.0"],
      correctAnswer: 1
    },
    {
      id: 4,
      question: "في أي منطقة تحدث الشقوق أولاً في الكمرة المسلحة؟",
      options: ["منطقة الضغط العلوية", "منطقة الشد السفلية", "منطقة القص", "منطقة الدعامات"],
      correctAnswer: 1
    },
    {
      id: 5,
      question: "ما هو قطر حديد التسليح الأكثر استخداماً في المباني السكنية؟",
      options: ["8-10 مم", "12-16 مم", "18-20 مم", "22-25 مم"],
      correctAnswer: 1
    }
  ],
  "structural-1": [
    {
      id: 1,
      question: "ما هو مجموع العزوم حول أي نقطة في الجسم المتوازن؟",
      options: ["موجب", "سالب", "صفر", "متغير"],
      correctAnswer: 2
    },
    {
      id: 2,
      question: "في الكمرة البسيطة، أين يكون العزم الأعظمي؟",
      options: ["عند الدعامات", "في منتصف البحر", "عند ربع البحر", "عند نقطة التحميل"],
      correctAnswer: 1
    },
    {
      id: 3,
      question: "ما هي وحدة قياس العزم في النظام الدولي؟",
      options: ["نيوتن", "كيلو نيوتن متر", "باسكال", "متر"],
      correctAnswer: 1
    },
    {
      id: 4,
      question: "في مخطط القوى القاطعة، ماذا يمثل التغير في القوة القاطعة؟",
      options: ["الحمولة المطبقة", "العزم", "رد الفعل", "التشوه"],
      correctAnswer: 0
    },
    {
      id: 5,
      question: "ما هي العلاقة بين القوة القاطعة والعزم في الكمرة؟",
      options: ["مستقلان", "القوة القاطعة = مشتقة العزم", "العزم = مشتقة القوة القاطعة", "متناسبان عكسياً"],
      correctAnswer: 2
    }
  ],
  "materials-1": [
    {
      id: 1,
      question: "ما هو اختبار سلامب (Slump Test) المستخدم لقياس؟",
      options: ["مقاومة الضغط", "قابلية التشغيل", "مقاومة الشد", "الكثافة"],
      correctAnswer: 1
    },
    {
      id: 2,
      question: "كم يوماً يحتاج مكعب الخرسانة للوصول إلى مقاومة الضغط المعيارية؟",
      options: ["7 أيام", "14 يوم", "28 يوم", "56 يوم"],
      correctAnswer: 2
    },
    {
      id: 3,
      question: "ما هو الغرض من عملية المعالجة (Curing) للخرسانة؟",
      options: ["تسريع التصلب", "منع التشقق", "ضمان الترطيب المناسب", "جميع ما سبق"],
      correctAnswer: 3
    },
    {
      id: 4,
      question: "ما هي درجة الحرارة المثلى لصب الخرسانة؟",
      options: ["أقل من 5°م", "5-30°م", "30-40°م", "أكثر من 40°م"],
      correctAnswer: 1
    },
    {
      id: 5,
      question: "ما هو الحد الأدنى لمقاومة الشد لحديد التسليح عالي المقاومة؟",
      options: ["240 ميجا باسكال", "400 ميجا باسكال", "500 ميجا باسكال", "600 ميجا باسكال"],
      correctAnswer: 2
    }
  ]
};

const Exam = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<{ [key: number]: number }>({});
  const [timeLeft, setTimeLeft] = useState(30 * 60); // 30 minutes
  const [isSubmitted, setIsSubmitted] = useState(false);

  const questions = examQuestions[courseId as keyof typeof examQuestions] || [];
  
  useEffect(() => {
    if (timeLeft > 0 && !isSubmitted) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && !isSubmitted) {
      handleSubmit();
    }
  }, [timeLeft, isSubmitted]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleAnswerChange = (value: string) => {
    setAnswers({ ...answers, [currentQuestion]: parseInt(value) });
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
    const score = calculateScore();
    const passed = score >= 70;
    
    toast({
      title: passed ? "تهانينا!" : "للأسف",
      description: passed 
        ? `لقد نجحت بدرجة ${score}% ويمكنك الانتقال للمستوى التالي`
        : `حصلت على ${score}% وتحتاج 70% للنجاح`,
      variant: passed ? "default" : "destructive",
    });
    
    navigate(`/results/${courseId}`, { 
      state: { 
        score, 
        passed, 
        answers, 
        questions 
      } 
    });
  };

  const calculateScore = () => {
    let correct = 0;
    questions.forEach((question, index) => {
      if (answers[index] === question.correctAnswer) {
        correct++;
      }
    });
    return Math.round((correct / questions.length) * 100);
  };

  const getAnsweredCount = () => {
    return Object.keys(answers).length;
  };

  if (questions.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="heading-lg mb-4">الاختبار غير متوفر</h1>
          <Button onClick={() => navigate('/')}>
            العودة للرئيسية
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Exam Header */}
        <Card className="mb-6">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-right">
                  اختبار {courseId === "concrete-1" ? "خرسانة مسلحة 1" : 
                           courseId === "structural-1" ? "تحليل إنشائي 1" : "هندسة المواد 1"}
                </CardTitle>
                <p className="text-muted-foreground">
                  السؤال {currentQuestion + 1} من {questions.length}
                </p>
              </div>
              <div className="text-left">
                <div className="flex items-center mb-2">
                  <Clock className="w-4 h-4 ml-2 text-primary" />
                  <span className="font-mono text-lg">{formatTime(timeLeft)}</span>
                </div>
                <Badge className={timeLeft < 300 ? "status-warning" : "status-info"}>
                  {timeLeft < 300 ? "الوقت ينفد!" : "جاري الاختبار"}
                </Badge>
              </div>
            </div>
            <Progress value={((currentQuestion + 1) / questions.length) * 100} className="mt-4" />
          </CardHeader>
        </Card>

        <div className="grid lg:grid-cols-4 gap-6">
          {/* Question Content */}
          <div className="lg:col-span-3">
            <Card>
              <CardHeader>
                <CardTitle className="text-right text-lg">
                  {questions[currentQuestion]?.question}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <RadioGroup 
                  value={answers[currentQuestion]?.toString() || ""} 
                  onValueChange={handleAnswerChange}
                  className="space-y-4"
                >
                  {questions[currentQuestion]?.options.map((option, index) => (
                    <div key={index} className="flex items-center space-x-reverse space-x-2 p-3 rounded-lg border hover:bg-muted/50 transition-colors">
                      <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                      <Label htmlFor={`option-${index}`} className="flex-1 cursor-pointer">
                        {option}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
                
                <div className="flex justify-between mt-8">
                  <Button
                    variant="outline"
                    onClick={handlePrevious}
                    disabled={currentQuestion === 0}
                  >
                    <ArrowRight className="w-4 h-4 ml-2" />
                    السؤال السابق
                  </Button>
                  
                  {currentQuestion === questions.length - 1 ? (
                    <Button
                      className="btn-secondary"
                      onClick={handleSubmit}
                      disabled={getAnsweredCount() < questions.length}
                    >
                      <CheckCircle className="w-4 h-4 ml-2" />
                      إنهاء الاختبار
                    </Button>
                  ) : (
                    <Button
                      className="btn-hero"
                      onClick={handleNext}
                    >
                      <ArrowLeft className="w-4 h-4 mr-2" />
                      السؤال التالي
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Question Navigator */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="text-right text-sm">ملاحة الأسئلة</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-5 gap-2">
                  {questions.map((_, index) => (
                    <Button
                      key={index}
                      variant={currentQuestion === index ? "default" : "outline"}
                      size="sm"
                      onClick={() => setCurrentQuestion(index)}
                      className={`h-8 w-8 p-0 ${
                        answers[index] !== undefined 
                          ? currentQuestion === index 
                            ? "bg-primary" 
                            : "bg-green-100 border-green-300 text-green-700"
                          : ""
                      }`}
                    >
                      {index + 1}
                    </Button>
                  ))}
                </div>
                
                <div className="mt-4 space-y-2 text-sm">
                  <div className="flex items-center justify-between">
                    <span>مجاب عليها:</span>
                    <span className="font-semibold">{getAnsweredCount()}/{questions.length}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>باقي:</span>
                    <span className="font-semibold">{questions.length - getAnsweredCount()}</span>
                  </div>
                </div>

                {getAnsweredCount() < questions.length && (
                  <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-lg">
                    <div className="flex items-center text-amber-700">
                      <AlertCircle className="w-4 h-4 ml-2" />
                      <span className="text-xs">يجب الإجابة على جميع الأسئلة</span>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exam;