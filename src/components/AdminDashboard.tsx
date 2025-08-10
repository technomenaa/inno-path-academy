import { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Header } from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Users, 
  BookOpen, 
  Award, 
  TrendingUp, 
  Settings,
  UserPlus,
  Eye,
  Edit,
  Trash2,
  BarChart3,
  Calendar,
  Download,
  Filter
} from 'lucide-react';

const AdminDashboard = () => {
  const { user } = useAuth();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  // Mock admin data
  const adminStats = {
    totalStudents: 2547,
    activeCourses: 6,
    completedExams: 1823,
    averageScore: 76,
    monthlyGrowth: 12,
    certificatesIssued: 945
  };

  const students = [
    {
      id: '1',
      name: 'أحمد محمد علي',
      email: 'ahmed@example.com',
      enrolledCourses: 3,
      completedCourses: 2,
      averageScore: 85,
      lastActive: '2024-08-10',
      status: 'نشط'
    },
    {
      id: '2',
      name: 'فاطمة أحمد',
      email: 'fatima@example.com',
      enrolledCourses: 4,
      completedCourses: 4,
      averageScore: 92,
      lastActive: '2024-08-09',
      status: 'نشط'
    },
    {
      id: '3',
      name: 'محمد حسن',
      email: 'mohamed@example.com',
      enrolledCourses: 2,
      completedCourses: 1,
      averageScore: 78,
      lastActive: '2024-08-07',
      status: 'غير نشط'
    },
    {
      id: '4',
      name: 'نور الدين',
      email: 'nour@example.com',
      enrolledCourses: 5,
      completedCourses: 3,
      averageScore: 88,
      lastActive: '2024-08-10',
      status: 'نشط'
    }
  ];

  const courseStats = [
    {
      id: 'concrete-1',
      title: 'خرسانة مسلحة 1',
      enrolledStudents: 450,
      completionRate: 78,
      averageScore: 76,
      passRate: 85
    },
    {
      id: 'structural-1',
      title: 'تحليل إنشائي 1',
      enrolledStudents: 520,
      completionRate: 82,
      averageScore: 79,
      passRate: 88
    },
    {
      id: 'materials-1',
      title: 'هندسة المواد 1',
      enrolledStudents: 380,
      completionRate: 75,
      averageScore: 74,
      passRate: 82
    },
    {
      id: 'concrete-2',
      title: 'خرسانة مسلحة 2',
      enrolledStudents: 180,
      completionRate: 65,
      averageScore: 81,
      passRate: 90
    },
    {
      id: 'structural-2',
      title: 'تحليل إنشائي 2',
      enrolledStudents: 165,
      completionRate: 68,
      averageScore: 83,
      passRate: 92
    },
    {
      id: 'materials-2',
      title: 'هندسة المواد 2',
      enrolledStudents: 120,
      completionRate: 62,
      averageScore: 79,
      passRate: 87
    }
  ];

  const recentActivity = [
    {
      type: 'enrollment',
      student: 'سارة أحمد',
      course: 'خرسانة مسلحة 1',
      date: '2024-08-10',
      time: '14:30'
    },
    {
      type: 'completion',
      student: 'علي محمد',
      course: 'تحليل إنشائي 1',
      score: 88,
      date: '2024-08-10',
      time: '12:15'
    },
    {
      type: 'exam',
      student: 'مريم حسن',
      course: 'هندسة المواد 1',
      score: 92,
      date: '2024-08-10',
      time: '10:45'
    }
  ];

  const filteredStudents = students.filter(student => {
    const matchesSearch = student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         student.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = selectedFilter === 'all' || student.status === selectedFilter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <div className="flex items-center space-x-reverse space-x-4 mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-purple-600 rounded-full flex items-center justify-center text-white text-2xl">
              {user?.avatar || '👩‍🏫'}
            </div>
            <div>
              <h1 className="heading-lg">مرحباً، {user?.name}</h1>
              <p className="text-muted-foreground">لوحة تحكم الإدارة - منصة INNOLEARN</p>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          <Card className="text-center p-4">
            <CardContent className="p-0">
              <Users className="w-8 h-8 mx-auto mb-2 text-primary" />
              <div className="text-2xl font-bold">{adminStats.totalStudents.toLocaleString()}</div>
              <div className="text-xs text-muted-foreground">إجمالي الطلاب</div>
            </CardContent>
          </Card>
          
          <Card className="text-center p-4">
            <CardContent className="p-0">
              <BookOpen className="w-8 h-8 mx-auto mb-2 text-secondary" />
              <div className="text-2xl font-bold">{adminStats.activeCourses}</div>
              <div className="text-xs text-muted-foreground">دورات نشطة</div>
            </CardContent>
          </Card>
          
          <Card className="text-center p-4">
            <CardContent className="p-0">
              <BarChart3 className="w-8 h-8 mx-auto mb-2 text-orange-500" />
              <div className="text-2xl font-bold">{adminStats.completedExams.toLocaleString()}</div>
              <div className="text-xs text-muted-foreground">اختبارات مكتملة</div>
            </CardContent>
          </Card>
          
          <Card className="text-center p-4">
            <CardContent className="p-0">
              <TrendingUp className="w-8 h-8 mx-auto mb-2 text-green-500" />
              <div className="text-2xl font-bold">{adminStats.averageScore}%</div>
              <div className="text-xs text-muted-foreground">متوسط الدرجات</div>
            </CardContent>
          </Card>
          
          <Card className="text-center p-4">
            <CardContent className="p-0">
              <Award className="w-8 h-8 mx-auto mb-2 text-yellow-500" />
              <div className="text-2xl font-bold">{adminStats.certificatesIssued}</div>
              <div className="text-xs text-muted-foreground">شهادات صادرة</div>
            </CardContent>
          </Card>
          
          <Card className="text-center p-4">
            <CardContent className="p-0">
              <Calendar className="w-8 h-8 mx-auto mb-2 text-purple-500" />
              <div className="text-2xl font-bold">+{adminStats.monthlyGrowth}%</div>
              <div className="text-xs text-muted-foreground">نمو شهري</div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="students" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="students">إدارة الطلاب</TabsTrigger>
            <TabsTrigger value="courses">إحصائيات الدورات</TabsTrigger>
            <TabsTrigger value="activity">النشاط الأخير</TabsTrigger>
            <TabsTrigger value="settings">الإعدادات</TabsTrigger>
          </TabsList>

          <TabsContent value="students" className="space-y-6">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="flex-1">
                <Label htmlFor="search">البحث عن طالب</Label>
                <Input
                  id="search"
                  placeholder="البحث بالاسم أو البريد الإلكتروني..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="text-right"
                />
              </div>
              <div className="md:w-48">
                <Label htmlFor="filter">تصفية حسب الحالة</Label>
                <Select value={selectedFilter} onValueChange={setSelectedFilter}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">جميع الطلاب</SelectItem>
                    <SelectItem value="نشط">الطلاب النشطين</SelectItem>
                    <SelectItem value="غير نشط">الطلاب غير النشطين</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-end space-x-reverse space-x-2">
                <Button className="btn-hero">
                  <UserPlus className="w-4 h-4 ml-2" />
                  إضافة طالب جديد
                </Button>
                <Button variant="outline">
                  <Download className="w-4 h-4 ml-2" />
                  تصدير
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              {filteredStudents.map((student) => (
                <Card key={student.id}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-reverse space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
                          {student.name.charAt(0)}
                        </div>
                        <div>
                          <h4 className="font-semibold text-lg">{student.name}</h4>
                          <p className="text-sm text-muted-foreground">{student.email}</p>
                          <div className="flex items-center space-x-reverse space-x-2 mt-1">
                            <Badge className={student.status === 'نشط' ? 'status-success' : 'status-warning'}>
                              {student.status}
                            </Badge>
                            <span className="text-xs text-muted-foreground">
                              آخر نشاط: {student.lastActive}
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div>
                          <div className="text-lg font-bold text-primary">{student.enrolledCourses}</div>
                          <div className="text-xs text-muted-foreground">دورات مسجلة</div>
                        </div>
                        <div>
                          <div className="text-lg font-bold text-secondary">{student.completedCourses}</div>
                          <div className="text-xs text-muted-foreground">دورات مكتملة</div>
                        </div>
                        <div>
                          <div className="text-lg font-bold text-orange-500">{student.averageScore}%</div>
                          <div className="text-xs text-muted-foreground">المعدل</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-reverse space-x-2">
                        <Button variant="outline" size="sm">
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="courses" className="space-y-6">
            <h3 className="heading-sm mb-4">إحصائيات الدورات التدريبية</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {courseStats.map((course) => (
                <Card key={course.id} className="card-elevated">
                  <CardHeader>
                    <CardTitle className="text-right">{course.title}</CardTitle>
                    <CardDescription className="text-right">
                      {course.enrolledStudents} طالب مسجل
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary">{course.completionRate}%</div>
                        <div className="text-xs text-muted-foreground">معدل الإنجاز</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-secondary">{course.averageScore}%</div>
                        <div className="text-xs text-muted-foreground">متوسط الدرجات</div>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl font-bold text-green-500">{course.passRate}%</div>
                      <div className="text-xs text-muted-foreground">معدل النجاح</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="activity" className="space-y-6">
            <h3 className="heading-sm mb-4">النشاط الأخير</h3>
            {recentActivity.map((activity, index) => (
              <Card key={index}>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-reverse space-x-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        {activity.type === 'enrollment' && <UserPlus className="w-5 h-5 text-primary" />}
                        {activity.type === 'completion' && <Award className="w-5 h-5 text-green-500" />}
                        {activity.type === 'exam' && <BookOpen className="w-5 h-5 text-orange-500" />}
                      </div>
                      <div>
                        <div className="font-medium">
                          {activity.type === 'enrollment' && `${activity.student} تسجل في ${activity.course}`}
                          {activity.type === 'completion' && `${activity.student} أكمل ${activity.course}`}
                          {activity.type === 'exam' && `${activity.student} أكمل اختبار ${activity.course}`}
                        </div>
                        {activity.score && (
                          <div className="text-sm text-muted-foreground">
                            النتيجة: {activity.score}%
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {activity.date} - {activity.time}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="settings" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-right">إعدادات النظام</CardTitle>
                <CardDescription className="text-right">
                  إدارة إعدادات المنصة العامة
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center py-8">
                  <Settings className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
                  <p className="text-muted-foreground">لوحة الإعدادات قيد التطوير</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminDashboard;