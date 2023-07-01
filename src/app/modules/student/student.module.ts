import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { QuestionsComponent } from './components/questions/questions.component';
import { QuestionComponent } from './components/question/question.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { EditQuestionModalComponent } from './components/edit-question-modal/edit-question-modal.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RecourdedCourseComponent } from './components/recourded-course/recourded-course.component';
import { RecourdedCoursesComponent } from './components/recourded-courses/recourded-courses.component';


@NgModule({
  declarations: [
    QuestionsComponent,
    QuestionComponent,
    EditQuestionModalComponent,
    RecourdedCourseComponent,
    RecourdedCoursesComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule
  ]
})
export class StudentModule { }
