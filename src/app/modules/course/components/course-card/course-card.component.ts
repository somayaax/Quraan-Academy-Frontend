import { Component } from '@angular/core';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent {
  level: string = 'all';
  name: string = 'Recitation';
  teacher : string = 'Hayah';
  description: string = 'whe can have you any description';
  price : number = 230;
  numSessions: number = 4;
  startDate : string = '2015-01-01';
  endDate : string = '2015-01-01';
  daysOfWeek: string = 'Monday';
}
