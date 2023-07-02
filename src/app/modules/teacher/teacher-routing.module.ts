import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { MyCoursesComponent } from './my-courses/my-courses.component';
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [
  { path: 'schedule', component: ScheduleComponent },
  { path: 'questions', component: QuestionsComponent },
  { path: 'courses', component: MyCoursesComponent },
  { path: 'profile', component: ProfileComponent },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeacherRoutingModule {}
