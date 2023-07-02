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
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from "@angular/material/core";


import { MyCoursesComponent } from './components/my-courses/my-courses.component';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { SessionDetailsComponent } from './components/session-details/session-details.component';
import { CourseDetailsComponent } from './components/course-details/course-details.component';
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
    ProfileComponent,
    MyCoursesComponent,
    MyCoursesComponent,
    SessionDetailsComponent,
    CourseDetailsComponent,
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
    MatTableModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule 
    

  ],
})
export class StudentModule {}
