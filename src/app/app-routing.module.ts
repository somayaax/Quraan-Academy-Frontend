import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './shared/register/register.component';
import { AdminGuard } from './guard/auth/admin.guard';
import { LoginComponent } from './shared/login/login.component';
import { NotfoundComponent } from './shared/notfound/notfound.component';
import { QuestionsComponent } from './shared/questions/questions.component';
import { RecordedCoursesComponent } from './shared/recorded-courses/recorded-courses.component';
import { CourseComponent } from './shared/course/course.component';
import { RecordedDeatailsComponent } from './shared/recorded-deatails/recorded-deatails.component';
import { TeacherGuard } from './guard/auth/teacher.guard';
import { StudentGuard } from './guard/auth/student.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'register', component: RegisterComponent },
  { path: 'login/:role', component: LoginComponent },
  { path: 'questions', component: QuestionsComponent },
  { path: 'recordedCourses', component: RecordedCoursesComponent },
  { path: 'recordedCourses/:id', component:RecordedDeatailsComponent },
  { path: 'courses', component: CourseComponent },

  {
    path: 'student',
    loadChildren: () =>
      import('./modules/student/student.module').then((m) => m.StudentModule),
      canActivate: [StudentGuard]
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
      canActivate: [AdminGuard]
  },
  {
    path: 'teacher',
    loadChildren: () =>
      import('./modules/teacher/teacher.module').then((m) => m.TeacherModule),
      canActivate: [TeacherGuard]
  },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
