import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseCardComponent } from './components/course-card/course-card.component';

const routes: Routes = [
  { path: 'details', data: { title: 'Courses' }, component: CourseCardComponent },
  
  {
    path: 'sessions',
    loadChildren: () => import('./session/session.module').then(m => m.SessionModule),
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseRoutingModule { }
