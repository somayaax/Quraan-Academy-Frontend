import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCoursesComponent } from './components/list-courses/list-courses.component';
import { ListTeachersComponent } from './components/list-teachers/list-teachers.component';
import { ListSessionsComponent } from './components/list-sessions/list-sessions.component';

const routes: Routes = [
  { path: 'courses/list', component: ListCoursesComponent },
  { path: 'teachers/list', component: ListTeachersComponent },
  { path: 'sessions/list', component: ListSessionsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
