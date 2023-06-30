import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherRoutingModule } from './teacher-routing.module';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { TeacherCardComponent } from './components/teacher-card/teacher-card.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ScheduleComponent, TeacherCardComponent],
  imports: [CommonModule, TeacherRoutingModule, FormsModule],
})
export class TeacherModule {}
