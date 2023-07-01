import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { QAService } from '../../services/qa.service';
import { ToastrService } from 'ngx-toastr';
import swal from "sweetalert2";
import { AuthService } from 'src/app/services/auth.service';
import { EditAnswerModalComponent } from '../edit-answer-modal/edit-answer-modal.component';
import swalOptions from 'src/app/utils/swalOptions';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  questions: any = [];
  categories: { name: string, _id: string }[] = [];
  pageInfo: any = {};
  limit = 20;
  categoryID = '';
  teacherID = '';
  currentPage: number = 1;
  dialogConfig = new MatDialogConfig();

  constructor(private _QAService: QAService,
    private _authService: AuthService,
    private toastr: ToastrService,
    private dialog: MatDialog) {
    this._QAService.buttonClicked.subscribe(() => {
      this.getQuestions();
    });
  }

  ngOnInit() {
    this.teacherID = this._authService.getDecodedToken().id;
    this.getQuestions()
    this._QAService.getCategories().subscribe({
      next: (res: any) => {
        if (res.message === 'success') {
          this.categories = res.data;
        }
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  getQuestions(): void {
    this._QAService.getTeacherAnswers(this.currentPage, this.limit, this.categoryID, this.teacherID).subscribe({
      next: (res: any) => {
        if (res.message === 'success') {
          this.questions = res.data.docs;
          this.pageInfo = res.data;
        }
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
  changeCategory() {
    this.currentPage = 1;
    this.getQuestions()
  }

  nextPage() {
    if (this.pageInfo.hasNextPage) {
      this.currentPage++;
      this.getQuestions()
    }
  }
  prevPage() {
    if (this.pageInfo.hasPrevPage) {
      this.currentPage--;
      this.getQuestions()
    }
  }

  openEditAnswerModal(question: any) {
    this.dialogConfig.data = {
      answer: question.answer,
      questionID: question._id
    };
    this.dialog.open(EditAnswerModalComponent, this.dialogConfig);
  }

  deleteAnswer(id: any) {
    swal.fire(swalOptions.deleteAnswerOptions).then((result) => {
      if (result.value) {
        this._QAService.deleteAnswer(id).subscribe({
          next: (data) => {
            this.toastr.success(
              `answer deleted successfully`,
              "Success"
            );
            this.getQuestions()
          },
          error: (error: any) => {
            this.toastr.error("Error deleting answer");
          },
        });
      }
    });
  }
}
