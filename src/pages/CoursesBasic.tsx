import { Header } from '@/components/Header';
import { CourseCard } from '@/components/CourseCard';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import concreteImage from "@/assets/concrete-course.jpg";
import structuralImage from "@/assets/structural-analysis.jpg";
import materialsImage from "@/assets/materials-engineering.jpg";

const CoursesBasic = () => {
  const coursesLevel1 = [
    {
      id: "concrete-1",
      title: "خرسانة مسلحة 1",
      description: "أساسيات الخرسانة المسلحة والتصميم الإنشائي",
      level: "المستوى الأول",
      image: concreteImage,
      topics: [
        "خصائص الخرسانة والحديد",
        "نظريات التصميم",
        "تصميم العناصر الأساسية",
        "الكمرات والأعمدة",
        "البلاطات"
      ],
      duration: "8 أسابيع",
      difficulty: "متوسط" as const
    },
    {
      id: "structural-1", 
      title: "تحليل إنشائي 1",
      description: "أساسيات التحليل الإنشائي للمنشآت",
      level: "المستوى الأول",
      image: structuralImage,
      topics: [
        "توازن القوى",
        "تحليل الكمرات",
        "العزوم والقوى القاطعة",
        "التشوهات",
        "طرق التحليل"
      ],
      duration: "10 أسابيع",
      difficulty: "متوسط" as const
    },
    {
      id: "materials-1",
      title: "هندسة المواد 1", 
      description: "خصائص ومعالجة مواد البناء الهندسية",
      level: "المستوى الأول",
      image: materialsImage,
      topics: [
        "خصائص المواد",
        "اختبارات المواد",
        "الخرسانة والحديد",
        "مواد العزل",
        "مراقبة الجودة"
      ],
      duration: "6 أسابيع", 
      difficulty: "متوسط" as const
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/80 to-accent/10">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <Badge className="mb-4 status-info">
            المستوى الأول - المواد الأساسية
          </Badge>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
            الدورات الحالية (ترميز 1)
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            اختبر معرفتك في المواد الأساسية وانتقل إلى المستوى المتقدم عند تحقيق 70% أو أكثر
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {coursesLevel1.map((course) => (
            <CourseCard key={course.id} {...course} />
          ))}
        </div>

        <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">هل تريد المزيد؟</h2>
            <p className="text-muted-foreground mb-6">
              بعد إكمال الدورات الأساسية، يمكنك الانتقال إلى الدورات المتقدمة لتطوير مهاراتك أكثر
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/courses/advanced" 
                className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
              >
                استكشف الدورات المتقدمة
              </a>
              <a 
                href="/register" 
                className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
              >
                سجل الآن
              </a>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default CoursesBasic;