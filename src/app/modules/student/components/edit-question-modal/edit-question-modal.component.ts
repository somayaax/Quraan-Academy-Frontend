import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-question-modal',
  templateUrl: './edit-question-modal.component.html',
  styleUrls: ['./edit-question-modal.component.css']
})
export class EditQuestionModalComponent {
  questionForm = new FormGroup({
    question: new FormControl(null, [Validators.required]),
    categoryID: new FormControl(null, [Validators.required]),
  })
}
