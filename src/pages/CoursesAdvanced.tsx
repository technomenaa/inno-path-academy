import { Header } from '@/components/Header';
import { CourseCard } from '@/components/CourseCard';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import concrete2Image from "@/assets/concrete-2.jpg";
import structural2Image from "@/assets/structural-2.jpg";
import materials2Image from "@/assets/materials-2.jpg";

const CoursesAdvanced = () => {
  const coursesLevel2 = [
    {
      id: "concrete-2",
      title: "خرسانة مسلحة 2",
      description: "تصميم المنشآت الخرسانية المتقدمة والتحليل الديناميكي للمباني الحديثة",
      level: "المستوى الثاني",
      image: concrete2Image,
      learningOutcomes: [
        "🏗️ تصميم الأبراج والمباني عالية الارتفاع باستخدام المعايير الدولية",
        "🌍 فهم وتطبيق التحليل الزلزالي والديناميكي للمنشآت",
        "🔧 تصميم أنظمة الحماية الزلزالية المتقدمة (العوازل والمخمدات)",
        "⚡ تطبيق تقنيات الخرسانة مسبقة الصب والإجهاد",
        "💻 إتقان استخدام برامج التصميم المتقدمة (SAP2000, ETABS)",
        "🏗️ تصميم الأساسات العميقة والخاصة للمشاريع الكبيرة"
      ],
      topics: [
        "تصميم المنشآت عالية الارتفاع",
        "التحليل الديناميكي والزلزالي",
        "الخرسانة مسبقة الصب",
        "أنظمة الحماية الزلزالية",
        "تصميم الأساسات المتقدمة",
        "التصميم باستخدام الحاسوب"
      ],
      duration: "12 أسبوع",
      difficulty: "متقدم" as const,
      prerequisites: "يتطلب اجتياز خرسانة مسلحة 1 بنسبة 70% أو أكثر"
    },
    {
      id: "structural-2",
      title: "تحليل إنشائي 2",
      description: "التحليل المتقدم للمنشآت باستخدام الطرق الحاسوبية والنظريات الحديثة",
      level: "المستوى الثاني", 
      image: structural2Image,
      learningOutcomes: [
        "🔬 إتقان طريقة العناصر المحدودة وتطبيقها في التحليل الإنشائي",
        "📊 تحليل السلوك اللاخطي للمواد والمنشآت تحت الأحمال المختلفة",
        "🌊 فهم ديناميكا المنشآت وتحليل الاستجابة الزمنية",
        "⚖️ تحليل الاستقرار الإنشائي ومنع الانبعاج",
        "🏗️ تطبيق التحليل الزلزالي المتقدم والتصميم المقاوم للزلازل",
        "💼 استخدام برامج التحليل المهنية في المشاريع الحقيقية"
      ],
      topics: [
        "طريقة العناصر المحدودة",
        "التحليل اللاخطي للمنشآت",
        "ديناميكا المنشآت",
        "تحليل الاستقرار",
        "التحليل الزلزالي المتقدم",
        "استخدام برامج التحليل الإنشائي"
      ],
      duration: "14 أسبوع",
      difficulty: "متقدم" as const,
      prerequisites: "يتطلب اجتياز تحليل إنشائي 1 بنسبة 70% أو أكثر"
    },
    {
      id: "materials-2",
      title: "هندسة المواد 2",
      description: "استكشاف المواد المتقدمة والتقنيات الذكية في صناعة البناء المستقبلية",
      level: "المستوى الثاني",
      image: materials2Image,
      learningOutcomes: [
        "🔬 فهم خصائص وتطبيقات المواد المركبة والنانوية في البناء",
        "⚡ تصميم وإنتاج الخرسانة عالية الأداء والخرسانة الذاتية التماسك",
        "🤖 تطبيق المواد الذكية وأنظمة المراقبة الذاتية في المباني",
        "♻️ تطوير حلول مستدامة باستخدام تقنيات إعادة التدوير",
        "🏠 اختيار وتطبيق مواد العزل المتقدمة للكفاءة الطاقية",
        "🧠 استخدام الذكاء الاصطناعي في اختبار وتطوير المواد الجديدة"
      ],
      topics: [
        "المواد المركبة والنانوية",
        "الخرسانة عالية الأداء",
        "المواد الذكية في البناء",
        "تقنيات إعادة التدوير",
        "مواد العزل المتقدمة",
        "تطبيقات الذكاء الاصطناعي في المواد"
      ],
      duration: "10 أسابيع",
      difficulty: "متقدم" as const,
      prerequisites: "يتطلب اجتياز هندسة المواد 1 بنسبة 70% أو أكثر"
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
          {coursesLevel2.map((course) => (
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