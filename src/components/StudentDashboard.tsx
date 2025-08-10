import { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Header } from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  BookOpen, 
  Award, 
  Clock, 
  TrendingUp, 
  User,
  Calendar,
  Target,
  CheckCircle,
  AlertCircle,
  BarChart3
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const StudentDashboard = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  // Mock student data
  const studentStats = {
    completedCourses: 2,
    totalCourses: 6,
    currentStreak: 7,
    totalStudyHours: 45,
    averageScore: 78,
    certificates: 1
  };

  const enrolledCourses = [
    {
      id: 'concrete-1',
      title: 'خرسانة مسلحة 1',
      progress: 85,
      lastScore: 78,
      status: 'مكتمل',
      nextExam: null
    },
    {
      id: 'structural-1', 
      title: 'تحليل إنشائي 1',
      progress: 92,
      lastScore: 85,
      status: 'مكتمل',
      nextExam: null
    },
    {
      id: 'materials-1',
      title: 'هندسة المواد 1',
      progress: 60,
      lastScore: 65,
      status: 'قيد التقدم',
      nextExam: 'متاح الآن'
    }
  ];

  const availableCourses = [
    {
      id: 'concrete-2',
      title: 'خرسانة مسلحة 2',
      level: 'متقدم',
      unlocked: true,
      prerequisite: 'خرسانة مسلحة 1'
    },
    {
      id: 'structural-2',
      title: 'تحليل إنشائي 2', 
      level: 'متقدم',
      unlocked: true,
      prerequisite: 'تحليل إنشائي 1'
    },
    {
      id: 'materials-2',
      title: 'هندسة المواد 2',
      level: 'متقدم',
      unlocked: false,
      prerequisite: 'هندسة المواد 1'
    }
  ];

  const recentActivity = [
    {
      type: 'exam',
      title: 'اختبار تحليل إنشائي 1',
      score: 85,
      date: '2024-08-08',
      passed: true
    },
    {
      type: 'course',
      title: 'مراجعة خرسانة مسلحة 1',
      date: '2024-08-06'
    },
    {
      type: 'achievement',
      title: 'حصلت على شهادة خرسانة مسلحة 1',
      date: '2024-08-05'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <div className="flex items-center space-x-reverse space-x-4 mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-purple-600 rounded-full flex items-center justify-center text-white text-2xl">
              {user?.avatar || '👨‍🎓'}
            </div>
            <div>
              <h1 className="heading-lg">مرحباً، {user?.name}</h1>
              <p className="text-muted-foreground">استمر في رحلتك التعليمية واحقق أهدافك</p>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          <Card className="text-center p-4">
            <CardContent className="p-0">
              <BookOpen className="w-8 h-8 mx-auto mb-2 text-primary" />
              <div className="text-2xl font-bold">{studentStats.completedCourses}</div>
              <div className="text-xs text-muted-foreground">دورات مكتملة</div>
            </CardContent>
          </Card>
          
          <Card className="text-center p-4">
            <CardContent className="p-0">
              <Target className="w-8 h-8 mx-auto mb-2 text-secondary" />
              <div className="text-2xl font-bold">{studentStats.averageScore}%</div>
              <div className="text-xs text-muted-foreground">المعدل العام</div>
            </CardContent>
          </Card>
          
          <Card className="text-center p-4">
            <CardContent className="p-0">
              <Clock className="w-8 h-8 mx-auto mb-2 text-orange-500" />
              <div className="text-2xl font-bold">{studentStats.totalStudyHours}</div>
              <div className="text-xs text-muted-foreground">ساعات دراسة</div>
            </CardContent>
          </Card>
          
          <Card className="text-center p-4">
            <CardContent className="p-0">
              <TrendingUp className="w-8 h-8 mx-auto mb-2 text-green-500" />
              <div className="text-2xl font-bold">{studentStats.currentStreak}</div>
              <div className="text-xs text-muted-foreground">أيام متتالية</div>
            </CardContent>
          </Card>
          
          <Card className="text-center p-4">
            <CardContent className="p-0">
              <Award className="w-8 h-8 mx-auto mb-2 text-yellow-500" />
              <div className="text-2xl font-bold">{studentStats.certificates}</div>
              <div className="text-xs text-muted-foreground">شهادات</div>
            </CardContent>
          </Card>
          
          <Card className="text-center p-4">
            <CardContent className="p-0">
              <BarChart3 className="w-8 h-8 mx-auto mb-2 text-purple-500" />
              <div className="text-2xl font-bold">{Math.round(studentStats.completedCourses / studentStats.totalCourses * 100)}%</div>
              <div className="text-xs text-muted-foreground">الإنجاز</div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="courses" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="courses">دوراتي</TabsTrigger>
            <TabsTrigger value="available">دورات متاحة</TabsTrigger>
            <TabsTrigger value="activity">النشاط الأخير</TabsTrigger>
          </TabsList>

          <TabsContent value="courses" className="space-y-4">
            <h3 className="heading-sm mb-4">الدورات المسجل بها</h3>
            {enrolledCourses.map((course) => (
              <Card key={course.id} className="card-interactive">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h4 className="font-semibold text-lg">{course.title}</h4>
                      <div className="flex items-center space-x-reverse space-x-2 mt-1">
                        <Badge 
                          className={course.status === 'مكتمل' ? 'status-success' : 'status-warning'}
                        >
                          {course.status}
                        </Badge>
                        {course.lastScore && (
                          <span className="text-sm text-muted-foreground">
                            آخر نتيجة: {course.lastScore}%
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary">{course.progress}%</div>
                      <div className="text-xs text-muted-foreground">مكتمل</div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <Progress value={course.progress} className="h-2" />
                    
                    <div className="flex items-center justify-between">
                      {course.nextExam ? (
                        <Button 
                          className="btn-hero"
                          onClick={() => navigate(`/course/${course.id}`)}
                        >
                          بدء الاختبار
                        </Button>
                      ) : (
                        <Button 
                          variant="outline"
                          onClick={() => navigate(`/course/${course.id}`)}
                        >
                          مراجعة الدورة
                        </Button>
                      )}
                      
                      {course.nextExam && (
                        <Badge className="status-info">
                          {course.nextExam}
                        </Badge>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="available" className="space-y-4">
            <h3 className="heading-sm mb-4">الدورات المتاحة للتسجيل</h3>
            {availableCourses.map((course) => (
              <Card key={course.id} className={course.unlocked ? 'card-interactive' : 'opacity-60'}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-lg">{course.title}</h4>
                      <div className="flex items-center space-x-reverse space-x-2 mt-1">
                        <Badge className="status-warning">{course.level}</Badge>
                        <span className="text-sm text-muted-foreground">
                          يتطلب: {course.prerequisite}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-reverse space-x-3">
                      {course.unlocked ? (
                        <CheckCircle className="w-6 h-6 text-green-500" />
                      ) : (
                        <AlertCircle className="w-6 h-6 text-orange-500" />
                      )}
                      <Button 
                        className={course.unlocked ? 'btn-secondary' : ''}
                        disabled={!course.unlocked}
                        onClick={() => course.unlocked && navigate(`/course/${course.id}`)}
                      >
                        {course.unlocked ? 'ابدأ الدورة' : 'غير متاح'}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="activity" className="space-y-4">
            <h3 className="heading-sm mb-4">النشاط الأخير</h3>
            {recentActivity.map((activity, index) => (
              <Card key={index}>
                <CardContent className="p-4">
                  <div className="flex items-center space-x-reverse space-x-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      {activity.type === 'exam' && <Award className="w-5 h-5 text-primary" />}
                      {activity.type === 'course' && <BookOpen className="w-5 h-5 text-secondary" />}
                      {activity.type === 'achievement' && <Target className="w-5 h-5 text-yellow-500" />}
                    </div>
                    <div className="flex-1">
                      <div className="font-medium">{activity.title}</div>
                      {activity.score && (
                        <div className="text-sm text-muted-foreground">
                          النتيجة: {activity.score}% 
                          {activity.passed && <span className="text-green-600 mr-2">✓ نجح</span>}
                        </div>
                      )}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {activity.date}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default StudentDashboard;