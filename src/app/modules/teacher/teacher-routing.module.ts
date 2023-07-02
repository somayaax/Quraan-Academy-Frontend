import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { MyCoursesComponent } from './components/my-courses/my-courses.component';
import { CourseDetailsComponent } from './components/course-details/course-details.component';
import { SessionDetailsComponent } from './components/session-details/session-details.component';

const routes: Routes = [
  { path: 'schedule', component: ScheduleComponent },
  { path: 'questions', component: QuestionsComponent },
  { path: 'courses', component: MyCoursesComponent },
  { path: 'course/:id', component: CourseDetailsComponent },
  { path: 'session/:id', component: SessionDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeacherRoutingModule {}
