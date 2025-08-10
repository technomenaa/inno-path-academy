import { Header } from '@/components/Header';
import { CourseCard } from '@/components/CourseCard';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const CoursesAdvanced = () => {
  const advancedCourses = [
    {
      id: 'concrete-advanced',
      title: 'الخرسانة المتقدمة',
      description: 'تصميم وتحليل العناصر الخرسانية المعقدة وتقنيات الخرسانة الحديثة',
      image: '/src/assets/concrete-course.jpg',
      duration: '8 أسابيع',
      level: 'متقدم',
      difficulty: 'متقدم' as const,
      topics: ['تصميم الخرسانة المسلحة', 'الخرسانة عالية المقاومة', 'التقنيات الحديثة', 'التحليل اللاخطي']
    },
    {
      id: 'structural-advanced',
      title: 'التحليل الإنشائي المتقدم',
      description: 'تحليل المنشآت المعقدة باستخدام البرامج الحديثة ونظريات التحليل المتقدمة',
      image: '/src/assets/structural-analysis.jpg',
      duration: '10 أسابيع',
      level: 'متقدم',
      difficulty: 'متقدم' as const,
      topics: ['العناصر المحدودة', 'التحليل الديناميكي', 'المقاومة الزلزالية', 'برامج التحليل']
    },
    {
      id: 'materials-advanced',
      title: 'هندسة المواد المتقدمة',
      description: 'دراسة متقدمة للمواد المركبة والذكية وتطبيقاتها في البناء الحديث',
      image: '/src/assets/materials-engineering.jpg',
      duration: '6 أسابيع',
      level: 'متقدم',
      difficulty: 'متقدم' as const,
      topics: ['المواد المركبة', 'المواد الذكية', 'النانوتكنولوجي', 'الاستدامة']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/80 to-accent/10">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Badge variant="secondary" className="text-lg px-4 py-2">
              دورات متقدمة
            </Badge>
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
            الدورات المتقدمة
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            دورات متخصصة للمهندسين ذوي الخبرة لتطوير المهارات المتقدمة في الهندسة المدنية
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {advancedCourses.map((course) => (
            <CourseCard key={course.id} {...course} />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="bg-gradient-to-r from-accent/20 to-primary/10 border-accent/30">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-3">متطلبات التسجيل</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• إكمال الدورات الأساسية (ترميز 1)</li>
                <li>• خبرة عملية لا تقل عن سنة واحدة</li>
                <li>• شهادة في الهندسة المدنية أو ما يعادلها</li>
                <li>• اجتياز اختبار تحديد المستوى</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-secondary/10 to-accent/20 border-secondary/30">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-3">مميزات الدورات المتقدمة</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• شهادات معتمدة مهنياً</li>
                <li>• مشاريع عملية حقيقية</li>
                <li>• دعم مباشر من المختصين</li>
                <li>• ورش عمل تفاعلية</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-8 bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">جاهز للبدء؟</h2>
            <p className="text-muted-foreground mb-6">
              سجل الآن في إحدى الدورات المتقدمة وطور مهاراتك إلى المستوى التالي
            </p>
            <a 
              href="/register" 
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
            >
              سجل في دورة متقدمة
            </a>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default CoursesAdvanced;