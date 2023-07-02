import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionsComponent } from './components/questions/questions.component';
import { RecourdedCoursesComponent } from './components/recourded-courses/recourded-courses.component';
import { MyCoursesComponent } from './components/my-courses/my-courses.component';

const routes: Routes = [
  { path: 'questions', component: QuestionsComponent },
  { path: 'recordedCourses', component: RecourdedCoursesComponent },
  { path: 'courses', component: MyCoursesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentRoutingModule {}
