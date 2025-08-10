import { Header } from '@/components/Header';
import { CourseCard } from '@/components/CourseCard';
import { Card, CardContent } from "@/components/ui/card";

const CoursesBasic = () => {
  const basicCourses = [
    {
      id: 'concrete-basics',
      title: 'أساسيات الخرسانة',
      description: 'تعلم أساسيات الخرسانة وخصائصها وطرق خلطها واختبارها',
      image: '/src/assets/concrete-2.jpg',
      duration: '4 أسابيع',
      level: 'مبتدئ',
      difficulty: 'مبتدئ' as const,
      topics: ['خصائص الخرسانة', 'خلط الخرسانة', 'اختبار الخرسانة', 'تطبيقات عملية']
    },
    {
      id: 'structural-basics',
      title: 'أساسيات التحليل الإنشائي',
      description: 'مقدمة في التحليل الإنشائي وحساب القوى والعزوم',
      image: '/src/assets/structural-2.jpg',
      duration: '5 أسابيع',
      level: 'مبتدئ',
      difficulty: 'مبتدئ' as const,
      topics: ['حساب القوى', 'العزوم', 'تحليل الهياكل', 'الأحمال']
    },
    {
      id: 'materials-basics',
      title: 'أساسيات هندسة المواد',
      description: 'دراسة خصائص المواد الإنشائية وتطبيقاتها',
      image: '/src/assets/materials-2.jpg',
      duration: '3 أسابيع',
      level: 'مبتدئ',
      difficulty: 'مبتدئ' as const,
      topics: ['الصلب', 'الخرسانة', 'الخشب', 'المواد الحديثة']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/80 to-accent/10">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
            الدورات الحالية (ترميز 1)
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            دورات تأسيسية مجانية لبناء قاعدة معرفية قوية في الهندسة المدنية
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {basicCourses.map((course) => (
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