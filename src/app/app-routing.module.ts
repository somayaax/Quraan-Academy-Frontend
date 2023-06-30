import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './shared/register/register.component';
import { AdminGuard } from './guard/adminAuth/admin.guard';
import { LoginComponent } from './shared/login/login.component';
import { NotfoundComponent } from './shared/notfound/notfound.component';
import { QuestionsComponent } from './shared/questions/questions.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'register', component: RegisterComponent },
  { path: 'login/:role', component: LoginComponent },
  {
    path: 'student',
    loadChildren: () =>
      import('./modules/course/course.module').then((m) => m.CourseModule),
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
  { path: 'questions', component: QuestionsComponent },
  {
    path: 'course',
    loadChildren: () =>
      import('./modules/course/course.module').then((m) => m.CourseModule),
  },
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
    // canActivate: [AdminGuard],
    loadChildren: () =>
      import('./modules/admin/admin.module').then((m) => m.AdminModule),
  },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
