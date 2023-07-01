import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent {
  @Input() question: any;
  @Output() deleteAnswerEvent = new EventEmitter<number>();
  @Output() editAnswerEvent = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {

  }
  deleteAnswer(): void {
    this.deleteAnswerEvent.emit();
  }
  editAnswer(): void {
    this.editAnswerEvent.emit();
  }}
