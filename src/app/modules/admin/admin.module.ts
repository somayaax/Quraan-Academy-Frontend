import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatNativeDateModule } from '@angular/material/core';

import { AdminRoutingModule } from './admin-routing.module';
import { AddCourseModalComponent } from './components/add-course-modal/add-course-modal.component';
import { AdminSidebarComponent } from './components/admin-sidebar/admin-sidebar.component';
import { ListCoursesComponent } from './components/list-courses/list-courses.component';
import { ListTeachersComponent } from './components/list-teachers/list-teachers.component';
import { EditCourseModalComponent } from './components/edit-course-modal/edit-course-modal.component';
import { AddTeacherModalComponent } from './components/add-teacher-modal/add-teacher-modal.component';
import { AddRecordedCourseComponent } from './components/add-recorded-course/add-recorded-course.component';
import { ListRecordedCourseComponent } from './components/list-recorded-course/list-recorded-course.component';
import { AddChaptersModalComponent } from './components/add-chapters-modal/add-chapters-modal.component';
import { EditRecordedCourseModalComponent } from './components/edit-recorded-course-modal/edit-recorded-course-modal.component';
import { EditTeacherModalComponent } from './components/edit-teacher-modal/edit-teacher-modal.component';
import { ListSessionsComponent } from './components/list-sessions/list-sessions.component';
import { ListChaptersComponent } from './components/list-chapters/list-chapters.component';
import { EditChapterMOdalComponent } from './components/edit-chapter-modal/edit-chapter-modal.component';
import { ListStudentsComponent } from './components/list-students/list-students.component';


@NgModule({
  declarations: [
    AddCourseModalComponent,
    AdminSidebarComponent,
    ListCoursesComponent,
    ListTeachersComponent,
    EditCourseModalComponent,
    AddTeacherModalComponent,
    AddRecordedCourseComponent,
    ListRecordedCourseComponent,
    AddChaptersModalComponent,
    EditRecordedCourseModalComponent,
    EditTeacherModalComponent,
    ListSessionsComponent,
    ListChaptersComponent,
    EditChapterMOdalComponent,
    ListStudentsComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    NgxPaginationModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatSelectModule,
    MatIconModule,
    MatNativeDateModule,
  ]
})
export class AdminModule { }
