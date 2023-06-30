import { Component, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { QAService } from 'src/app/services/qa.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  @Input() question: any;

  loggedIn: boolean = false;
  role: string = '';
  answer: string = '';
  constructor(private _authService: AuthService,
    private _QAService: QAService,
    private toastr: ToastrService) { }
  ngOnInit() {
    this._authService.currentUser$.subscribe((res: any) => {
      if (!res) {
        this.loggedIn = false;
        this.role = ''
      }
      else {
        this.loggedIn = true;
        this.role = res.role;
      }

    })
  }

  answerSubmit() {
    this._QAService.answerQuestion(this.question._id, { answer: this.answer }).subscribe({
      next: (data) => {
        this._QAService.buttonClicked.emit();
      },
      error: (error: any) => {
        if (error.status === 422) {
          this.toastr.error(error.error.error)
        }
        else {
          this.toastr.error('cannot add answer!')
        }
      },
    })
  }

}
