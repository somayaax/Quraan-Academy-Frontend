import { Component } from '@angular/core';

@Component({
  selector: 'app-session-table',
  templateUrl: './session-table.component.html',
  styleUrls: ['./session-table.component.css']
})
export class SessionTableComponent {
  Date : string = '2015-01-01';
  Day : string = 'Monday';
  startTime : number = 1;
  endTime : number = 4;
  courseID : number = 3;
  progressComment : string = '3 Sessions Finished';
}
