import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionsComponent } from './components/questions/questions.component';
import { RecourdedCoursesComponent } from './components/recourded-courses/recourded-courses.component';
import { MyCoursesComponent } from './components/my-courses/my-courses.component';
import { ChaptersComponent } from "./components/chapters/chapters.component";
import { ProfileComponent } from "./components/profile/profile.component";
import { CourseDetailsComponent } from './components/course-details/course-details.component';
import { SessionDetailsComponent } from './components/session-details/session-details.component';

const routes: Routes = [
  { path: 'questions', component: QuestionsComponent },
  { path: 'recordedCourses', component: RecourdedCoursesComponent },
  { path: "chapters/:recordedCourseId", component: ChaptersComponent },
  { path: 'courses', component: MyCoursesComponent },
  { path: 'profile', component: ProfileComponent},
  { path: 'course/:id', component: CourseDetailsComponent},
  { path: 'session/:id', component: SessionDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentRoutingModule { }
