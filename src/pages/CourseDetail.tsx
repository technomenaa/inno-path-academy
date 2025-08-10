import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  ArrowRight, 
  Play, 
  CheckCircle, 
  Clock, 
  BookOpen, 
  Award,
  Target,
  Users
} from "lucide-react";
import concreteImage from "@/assets/concrete-course.jpg";
import structuralImage from "@/assets/structural-analysis.jpg";
import materialsImage from "@/assets/materials-engineering.jpg";
import concrete2Image from "@/assets/concrete-2.jpg";
import structural2Image from "@/assets/structural-2.jpg";
import materials2Image from "@/assets/materials-2.jpg";

const courseData = {
  "concrete-1": {
    title: "خرسانة مسلحة 1",
    description: "تعلم أساسيات الخرسانة المسلحة والتصميم الإنشائي للعناصر الأساسية",
    image: concreteImage,
    duration: "8 أسابيع",
    difficulty: "متوسط",
    students: "850",
    rating: "4.8",
    topics: [
      {
        title: "خصائص الخرسانة والحديد",
        description: "دراسة الخصائص الميكانيكية والفيزيائية للمواد",
        duration: "أسبوع واحد"
      },
      {
        title: "نظريات التصميم الأساسية",
        description: "فهم نظريات الحالة الحدية والتصميم بالقوى المسموحة",
        duration: "أسبوعان"
      },
      {
        title: "تصميم الكمرات المسلحة",
        description: "تصميم الكمرات للعزوم والقوى القاطعة",
        duration: "أسبوعان"
      },
      {
        title: "تصميم الأعمدة المسلحة",
        description: "تصميم الأعمدة القصيرة والطويلة",
        duration: "أسبوعان"
      },
      {
        title: "تصميم البلاطات الخرسانية",
        description: "البلاطات أحادية ومتعددة الاتجاهات",
        duration: "أسبوع واحد"
      }
    ],
    nextCourse: "خرسانة مسلحة 2",
    prerequisites: "رياضيات هندسية، فيزياء عامة"
  },
  "structural-1": {
    title: "تحليل إنشائي 1", 
    description: "تعلم أساسيات التحليل الإنشائي وحساب القوى والتشوهات",
    image: structuralImage,
    duration: "10 أسابيع",
    difficulty: "متوسط",
    students: "920",
    rating: "4.7",
    topics: [
      {
        title: "مبادئ التوازن والاستاتيكا",
        description: "قوانين التوازن وتطبيقاتها في الهياكل",
        duration: "أسبوعان"
      },
      {
        title: "تحليل الكمرات البسيطة",
        description: "حساب ردود الأفعال والقوى الداخلية",
        duration: "أسبوعان"
      },
      {
        title: "رسم مخططات العزوم والقوى",
        description: "رسم مخططات SFD و BMD",
        duration: "أسبوعان"
      },
      {
        title: "حساب التشوهات والانحناءات",
        description: "طرق حساب الترخيم والدوران",
        duration: "أسبوعان"
      },
      {
        title: "تحليل الهياكل البسيطة",
        description: "الجمالونات والأطر البسيطة",
        duration: "أسبوعان"
      }
    ],
    nextCourse: "تحليل إنشائي 2",
    prerequisites: "رياضيات هندسية، ميكانيكا"
  },
  "materials-1": {
    title: "هندسة المواد 1",
    description: "دراسة خصائص ومعالجة مواد البناء الهندسية المختلفة",
    image: materialsImage, 
    duration: "6 أسابيع",
    difficulty: "متوسط",
    students: "750",
    rating: "4.9",
    topics: [
      {
        title: "مقدمة في علم المواد",
        description: "الخصائص الأساسية والتصنيفات",
        duration: "أسبوع واحد"
      },
      {
        title: "اختبارات المواد المختلفة",
        description: "اختبارات الشد والضغط والصلابة",
        duration: "أسبوع واحد"
      },
      {
        title: "الخرسانة وخصائصها",
        description: "تركيب وخلط واختبار الخرسانة",
        duration: "أسبوعان"
      },
      {
        title: "الحديد والصلب في البناء",
        description: "أنواع وخصائص حديد التسليح",
        duration: "أسبوع واحد"
      },
      {
        title: "مراقبة جودة المواد",
        description: "معايير الجودة والمواصفات القياسية",
        duration: "أسبوع واحد"
      }
    ],
    nextCourse: "هندسة المواد 2",
    prerequisites: "كيمياء عامة، فيزياء"
  },
  "concrete-2": {
    title: "خرسانة مسلحة 2",
    description: "تصميم المنشآت الخرسانية المتقدمة والتحليل الديناميكي للمباني الحديثة",
    image: concrete2Image,
    duration: "12 أسبوع",
    difficulty: "متقدم",
    students: "320",
    rating: "4.9",
    topics: [
      {
        title: "تصميم المنشآت عالية الارتفاع",
        description: "تصميم الأبراج والمباني الشاهقة وفقاً للمعايير الدولية",
        duration: "أسبوعان"
      },
      {
        title: "التحليل الديناميكي والزلزالي",
        description: "تحليل استجابة المنشآت للأحمال الديناميكية والزلازل",
        duration: "ثلاثة أسابيع"
      },
      {
        title: "الخرسانة مسبقة الصب والإجهاد",
        description: "تصميم وتنفيذ العناصر مسبقة الصب ومسبقة الإجهاد",
        duration: "أسبوعان"
      },
      {
        title: "أنظمة الحماية الزلزالية",
        description: "تصميم العوازل الزلزالية والمخمدات",
        duration: "أسبوعان"
      },
      {
        title: "تصميم الأساسات المتقدمة",
        description: "الأساسات العميقة والخاصة للمشاريع الكبيرة",
        duration: "أسبوعان"
      },
      {
        title: "التصميم باستخدام الحاسوب",
        description: "استخدام SAP2000 وETABS في التصميم",
        duration: "أسبوع واحد"
      }
    ],
    nextCourse: "تصميم المنشآت الخاصة",
    prerequisites: "اجتياز خرسانة مسلحة 1 بنسبة 70% أو أكثر"
  },
  "structural-2": {
    title: "تحليل إنشائي 2",
    description: "التحليل المتقدم للمنشآت باستخدام الطرق الحاسوبية والنظريات الحديثة",
    image: structural2Image,
    duration: "14 أسبوع",
    difficulty: "متقدم",
    students: "285",
    rating: "4.8",
    topics: [
      {
        title: "طريقة العناصر المحدودة",
        description: "الأسس النظرية والتطبيق العملي لطريقة FEM",
        duration: "ثلاثة أسابيع"
      },
      {
        title: "التحليل اللاخطي للمنشآت",
        description: "تحليل السلوك اللاخطي للمواد والهندسة",
        duration: "ثلاثة أسابيع"
      },
      {
        title: "ديناميكا المنشآت",
        description: "الاهتزازات الحرة والقسرية للمنشآت",
        duration: "أسبوعان"
      },
      {
        title: "تحليل الاستقرار",
        description: "تحليل الانبعاج والاستقرار الجانبي",
        duration: "أسبوعان"
      },
      {
        title: "التحليل الزلزالي المتقدم",
        description: "طرق التحليل الطيفي والزمني للزلازل",
        duration: "ثلاثة أسابيع"
      },
      {
        title: "برامج التحليل الإنشائي",
        description: "إتقان SAP2000، ETABS، وRAM",
        duration: "أسبوع واحد"
      }
    ],
    nextCourse: "تحليل المنشآت المتقدمة",
    prerequisites: "اجتياز تحليل إنشائي 1 بنسبة 70% أو أكثر"
  },
  "materials-2": {
    title: "هندسة المواد 2",
    description: "استكشاف المواد المتقدمة والتقنيات الذكية في صناعة البناء المستقبلية",
    image: materials2Image,
    duration: "10 أسابيع",
    difficulty: "متقدم",
    students: "195",
    rating: "4.9",
    topics: [
      {
        title: "المواد المركبة والنانوية",
        description: "خصائص وتطبيقات المواد المركبة في البناء",
        duration: "أسبوعان"
      },
      {
        title: "الخرسانة عالية الأداء",
        description: "تطوير وتطبيق الخرسانة عالية المقاومة",
        duration: "أسبوعان"
      },
      {
        title: "المواد الذكية في البناء",
        description: "أنظمة المراقبة الذاتية والمواد التكيفية",
        duration: "أسبوع واحد"
      },
      {
        title: "تقنيات إعادة التدوير",
        description: "استخدام المواد المعاد تدويرها في البناء",
        duration: "أسبوع واحد"
      },
      {
        title: "مواد العزل المتقدمة",
        description: "تقنيات العزل الحراري والصوتي المتطورة",
        duration: "أسبوعان"
      },
      {
        title: "الذكاء الاصطناعي في المواد",
        description: "تطبيق AI في تطوير واختبار المواد",
        duration: "أسبوعان"
      }
    ],
    nextCourse: "مواد البناء المستقبلية",
    prerequisites: "اجتياز هندسة المواد 1 بنسبة 70% أو أكثر"
  }
};

const CourseDetail = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const [expandedTopic, setExpandedTopic] = useState<number | null>(null);

  const course = courseData[courseId as keyof typeof courseData];

  if (!course) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="heading-lg mb-4">الدورة غير موجودة</h1>
          <Button onClick={() => navigate('/')}>
            العودة للرئيسية
          </Button>
        </div>
      </div>
    );
  }

  const handleStartExam = () => {
    navigate(`/exam/${courseId}`);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Course Header */}
      <section className="py-12 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/')}
            className="mb-6"
          >
            <ArrowRight className="w-4 h-4 ml-2" />
            العودة للدورات
          </Button>
          
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <Badge className={`mb-4 ${courseId?.includes('-2') ? 'status-warning' : 'status-info'}`}>
                {courseId?.includes('-2') ? 'المستوى الثاني' : 'المستوى الأول'}
              </Badge>
              <h1 className="heading-xl mb-4">{course.title}</h1>
              <p className="text-lg text-muted-foreground mb-6">
                {course.description}
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center">
                  <Clock className="w-5 h-5 ml-2 text-primary" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-5 h-5 ml-2 text-primary" />
                  <span>{course.students} طالب</span>
                </div>
                <div className="flex items-center">
                  <Target className="w-5 h-5 ml-2 text-primary" />
                  <span>مستوى {course.difficulty}</span>
                </div>
                <div className="flex items-center">
                  <Award className="w-5 h-5 ml-2 text-primary" />
                  <span>تقييم {course.rating}/5</span>
                </div>
              </div>
              
              <Button 
                size="lg" 
                className="btn-hero"
                onClick={handleStartExam}
              >
                <Play className="w-5 h-5 ml-2" />
                ابدأ الاختبار الآن
              </Button>
            </div>
            
            <div className="relative">
              <img 
                src={course.image} 
                alt={course.title}
                className="w-full rounded-xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Course Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="text-right">
                    <BookOpen className="w-6 h-6 ml-2 inline" />
                    المواضيع المشمولة
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {course.topics.map((topic, index) => (
                      <div key={index} className="border rounded-lg p-4 hover:bg-muted/50 transition-colors">
                        <div 
                          className="flex items-center justify-between cursor-pointer"
                          onClick={() => setExpandedTopic(expandedTopic === index ? null : index)}
                        >
                          <div className="flex items-center">
                            <div className="w-8 h-8 bg-primary/10 text-primary rounded-full flex items-center justify-center text-sm font-semibold ml-3">
                              {index + 1}
                            </div>
                            <div>
                              <h4 className="font-semibold">{topic.title}</h4>
                              <p className="text-sm text-muted-foreground">{topic.duration}</p>
                            </div>
                          </div>
                          <CheckCircle className="w-5 h-5 text-muted-foreground" />
                        </div>
                        
                        {expandedTopic === index && (
                          <div className="mt-4 pr-11 text-muted-foreground">
                            {topic.description}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-right">معلومات الدورة</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">المتطلبات الأساسية:</h4>
                    <p className="text-sm text-muted-foreground">{course.prerequisites}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">الدورة التالية:</h4>
                    <Badge className="status-success">{course.nextCourse}</Badge>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">معدل النجاح المطلوب:</h4>
                    <div className="flex items-center space-x-reverse space-x-2">
                      <Progress value={70} className="flex-1" />
                      <span className="text-sm font-semibold">70%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4 text-center">جاهز للاختبار؟</h3>
                  <p className="text-sm text-muted-foreground mb-4 text-center">
                    اختبر معرفتك في هذه المادة واحصل على شهادة انتقال للمستوى التالي
                  </p>
                  <Button 
                    className="w-full btn-secondary"
                    onClick={handleStartExam}
                  >
                    <Play className="w-4 h-4 ml-2" />
                    بدء الاختبار
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CourseDetail;