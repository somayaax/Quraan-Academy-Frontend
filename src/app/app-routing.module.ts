import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './shared/register/register.component';
import { AdminGuard } from './guard/adminAuth/admin.guard';
import { LoginComponent } from './shared/login/login.component';
import { NotfoundComponent } from './shared/notfound/notfound.component';
import { QuestionsComponent } from './shared/questions/questions.component';
import { RecordedCoursesComponent } from './shared/recorded-courses/recorded-courses.component';
import { CourseComponent } from './shared/course/course.component';
import { RecordedDeatailsComponent } from './shared/recorded-deatails/recorded-deatails.component';
import { SessionsComponent } from './shared/sessions/sessions.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'register', component: RegisterComponent },
  { path: 'login/:role', component: LoginComponent },
  { path: 'questions', component: QuestionsComponent },
  { path: 'recordedCourses', component: RecordedCoursesComponent },
  { path: 'recordedCourses/:id', component:RecordedDeatailsComponent },
  { path: 'courses', component: CourseComponent },
  { path: 'course/:id/sessions', component: SessionsComponent },
  

  {
    path: 'student',
    loadChildren: () =>
      import('./modules/student/student.module').then((m) => m.StudentModule),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./modules/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./modules/admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: 'teacher',
    loadChildren: () =>
      import('./modules/teacher/teacher.module').then((m) => m.TeacherModule),
  },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
