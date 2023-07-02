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
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { AskQuestionModalComponent } from './components/ask-question-modal/ask-question-modal.component';
import { ChapterComponent } from './components/chapter/chapter.component';
import { ChaptersComponent } from './components/chapters/chapters.component';
import { ProfileComponent } from './components/profile/profile.component';


@NgModule({
  declarations: [
    QuestionsComponent,
    QuestionComponent,
    EditQuestionModalComponent,
    RecourdedCourseComponent,
    RecourdedCoursesComponent,
    AskQuestionModalComponent,
    ChapterComponent,
    ChaptersComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
  ]
})
export class StudentModule { }
