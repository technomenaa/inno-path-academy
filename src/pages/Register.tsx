import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, User, FileText } from 'lucide-react';

const Register = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const courses = [
    { id: 'concrete-basics', name: 'أساسيات الخرسانة (ترميز 1)' },
    { id: 'structural-basics', name: 'أساسيات التحليل الإنشائي (ترميز 1)' },
    { id: 'materials-basics', name: 'أساسيات هندسة المواد (ترميز 1)' },
    { id: 'concrete-advanced', name: 'الخرسانة المتقدمة' },
    { id: 'structural-advanced', name: 'التحليل الإنشائي المتقدم' },
    { id: 'materials-advanced', name: 'هندسة المواد المتقدمة' }
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.phone || !formData.course) {
      toast({
        title: "خطأ",
        description: "يرجى ملء جميع الحقول المطلوبة",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // محاكاة إرسال البريد الإلكتروني
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "تم إرسال طلب التسجيل بنجاح",
        description: "سيتم التواصل معك قريباً عبر البريد الإلكتروني",
      });

      // إعادة تعيين النموذج
      setFormData({
        name: '',
        email: '',
        phone: '',
        course: '',
        message: ''
      });

      // التوجه للصفحة الرئيسية بعد 3 ثواني
      setTimeout(() => {
        navigate('/');
      }, 3000);

    } catch (error) {
      toast({
        title: "خطأ في الإرسال",
        description: "حدث خطأ أثناء إرسال طلب التسجيل، يرجى المحاولة مرة أخرى",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/80 to-accent/10">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <Card className="shadow-xl">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                طلب التسجيل في الدورة
              </CardTitle>
              <CardDescription className="text-lg">
                املأ النموذج أدناه وسيتم التواصل معك لإكمال عملية التسجيل
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    الاسم الكامل *
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="أدخل اسمك الكامل"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="text-right"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    البريد الإلكتروني *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="example@email.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="text-right"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    رقم الهاتف *
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="05xxxxxxxx"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="text-right"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="course" className="flex items-center gap-2">
                    <FileText className="w-4 h-4" />
                    الدورة المطلوبة *
                  </Label>
                  <Select value={formData.course} onValueChange={(value) => handleInputChange('course', value)}>
                    <SelectTrigger className="text-right">
                      <SelectValue placeholder="اختر الدورة التي تريد التسجيل فيها" />
                    </SelectTrigger>
                    <SelectContent>
                      {courses.map((course) => (
                        <SelectItem key={course.id} value={course.id}>
                          {course.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">
                    رسالة إضافية (اختياري)
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="أخبرنا عن خبرتك أو توقعاتك من الدورة..."
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    className="text-right min-h-[100px]"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full text-lg py-6" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'جاري الإرسال...' : 'إرسال طلب التسجيل'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Register;