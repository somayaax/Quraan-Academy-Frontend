import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { AddCourseModalComponent } from './components/add-course-modal/add-course-modal.component';
import { AdminSidebarComponent } from './components/admin-sidebar/admin-sidebar.component';
import { ListCoursesComponent } from './components/list-courses/list-courses.component';
import { ListTeachersComponent } from './components/list-teachers/list-teachers.component';


@NgModule({
  declarations: [
    AddCourseModalComponent,
    AdminSidebarComponent,
    ListCoursesComponent,
    ListTeachersComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    NgxPaginationModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class AdminModule { }
