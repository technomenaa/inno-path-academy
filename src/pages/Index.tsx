import { Header } from "@/components/Header";
import { CourseCard } from "@/components/CourseCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Users, Award, BookOpen } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";
import concreteImage from "@/assets/concrete-course.jpg";
import structuralImage from "@/assets/structural-analysis.jpg";
import materialsImage from "@/assets/materials-engineering.jpg";

const courses = [
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

const stats = [
  { icon: Users, label: "الطلاب المسجلين", value: "2,500+" },
  { icon: BookOpen, label: "الدورات المتاحة", value: "6" },
  { icon: Award, label: "معدل النجاح", value: "85%" },
  { icon: TrendingUp, label: "مستوى الرضا", value: "95%" }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBackground})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-secondary/80" />
        
        <div className="relative container mx-auto px-4 text-center text-white">
          <Badge className="mb-6 bg-white/20 text-white border-white/30">
            منصة التقييم الهندسي المتقدمة
          </Badge>
          
          <h1 className="heading-xl mb-6 max-w-4xl mx-auto">
            اكتشف مستواك في الهندسة الإنشائية
            <br />
            مع <span className="text-secondary">INNOLEARN</span>
          </h1>
          
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            قيّم معرفتك في المواد الهندسية الأساسية واحصل على شهادات متقدمة للانتقال إلى المستوى التالي
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="btn-secondary">
              ابدأ التقييم الآن
              <TrendingUp className="w-5 h-5 mr-2" />
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
              تصفح الدورات
              <BookOpen className="w-5 h-5 mr-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center p-6">
                <CardContent className="p-0">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg text-white mb-4">
                    <stat.icon className="w-6 h-6" />
                  </div>
                  <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 status-info">
              المواد الدراسية المتاحة
            </Badge>
            <h2 className="heading-lg mb-4">ابدأ رحلتك التعليمية</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              اختبر معرفتك في المواد الأساسية وانتقل إلى المستوى المتقدم عند تحقيق 70% أو أكثر
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <CourseCard key={course.id} {...course} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="heading-lg mb-4">جاهز لبدء التقييم؟</h2>
          <p className="text-lg mb-8 opacity-90">
            ابدأ رحلتك نحو الاحتراف في الهندسة الإنشائية
          </p>
          <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
            ابدأ الآن
            <Award className="w-5 h-5 mr-2" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;