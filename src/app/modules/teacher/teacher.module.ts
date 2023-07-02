import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherRoutingModule } from './teacher-routing.module';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { TeacherCardComponent } from './components/teacher-card/teacher-card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QuestionsComponent } from './components/questions/questions.component';
import { QuestionComponent } from './components/question/question.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { EditAnswerModalComponent } from './components/edit-answer-modal/edit-answer-modal.component';
import { MyCoursesComponent } from './components/my-courses/my-courses.component';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { CourseDetailsComponent } from './components/course-details/course-details.component';
import { SessionDetailsComponent } from './components/session-details/session-details.component';
@NgModule({
  declarations: [
    ScheduleComponent,
    TeacherCardComponent,
    QuestionsComponent,
    QuestionComponent,
    EditAnswerModalComponent,
    MyCoursesComponent,
    CourseDetailsComponent,
    SessionDetailsComponent,
  ],
  imports: [
    CommonModule,
    TeacherRoutingModule,
    FormsModule,
    MatIconModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatTableModule,
    MatCardModule,
  ],
})
export class TeacherModule {}
