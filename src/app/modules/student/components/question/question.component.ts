import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  @Input() question: any;
  @Output() deleteQuestionEvent = new EventEmitter<number>();
  @Output() editQuestionEvent = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {

  }
  deleteQuestion(): void {
    this.deleteQuestionEvent.emit(this.question._id);
  }
  editQuestion(): void {
    this.editQuestionEvent.emit(this.question._id);
  }


}