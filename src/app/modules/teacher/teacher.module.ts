import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TeacherRoutingModule } from './teacher-routing.module';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { TeacherCardComponent } from './components/teacher-card/teacher-card.component';

import { QuestionsComponent } from './components/questions/questions.component';
import { QuestionComponent } from './components/question/question.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { EditAnswerModalComponent } from './components/edit-answer-modal/edit-answer-modal.component';
import { MyCoursesComponent } from './components/my-courses/my-courses.component';
import { ProfileComponent } from './components/profile/profile.component';
@NgModule({
  declarations: [ScheduleComponent, TeacherCardComponent, QuestionsComponent, QuestionComponent, EditAnswerModalComponent, MyCoursesComponent,ProfileComponent],
  imports: [CommonModule,  FormsModule,TeacherRoutingModule, MatIconModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,

  ],
})
export class TeacherModule { }
