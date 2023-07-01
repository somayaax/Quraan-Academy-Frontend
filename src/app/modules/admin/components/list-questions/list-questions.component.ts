import { Component, OnInit } from '@angular/core';
import { QAService } from '../../services/qa.service';
import swalOptions from 'src/app/utils/swalOptions';
import swal from "sweetalert2";
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-list-questions',
  templateUrl: './list-questions.component.html',
  styleUrls: ['./list-questions.component.css']
})
export class ListQuestionsComponent implements OnInit {
  questions: any = [];
  categories: { name: string, _id: string }[] = [];
  pageInfo: any = {};
  limit = 6;
  categoryID = '';
  currentPage: number = 1;
  constructor(private _QAService: QAService, private toastr: ToastrService) { }

  ngOnInit() {
    this.getQuestions()
    // this._QAService.getCategories().subscribe({
    //   next: (res: any) => {
    //     if (res.message === 'success') {
    //       this.categories = res.data;
    //     }
    //   },
    //   error: (err) => {
    //     console.log(err);
    //   }
    // })
  }

  getQuestions(): void {
    this._QAService.getAllQuestions(this.currentPage, this.limit, this.categoryID).subscribe({
      next: (res: any) => {
        if (res.message === 'success') {
          this.questions = res.data.docs;
          this.pageInfo = res.data;
          this.questions.forEach((q: any, index: number) => [
            q.id = index + 1,
          ])
        }
      },
      error: (err) => {
        console.log(err);
      }
    });
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

  
  delQuestion(id: any) {
    swal.fire(swalOptions.deleteQuestionOptions).then((result) => {
        if (result.value) {
            this._QAService.deleteQuestion(id).subscribe({
                next: (data) => {
                    this.getQuestions();
                    this.toastr.success(
                        `Question deleted successfully`,
                        "Success"
                    );
                },
                error: (error: any) => {
                  console.log(error);
                  
                  let {
                        error: { message },
                    } = error;
                    if (!message) message = error.error.error;
                    console.log(message);
                    this.toastr.error(`${message}`, "Error");
                },
            });
        }
    });
}
  delAnswer(id: any) {
    swal.fire(swalOptions.deleteAnswerOptions).then((result) => {
        if (result.value) {
            this._QAService.deleteAnswer(id).subscribe({
                next: (data) => {
                    this.getQuestions();
                    this.toastr.success(
                        `Answer deleted successfully`,
                        "Success"
                    );
                },
                error: (error: any) => {
                  console.log(error);
                  
                  let {
                        error: { message },
                    } = error;
                    if (!message) message = error.error.error;
                    console.log(message);
                    this.toastr.error(`${message}`, "Error");
                },
            });
        }
    });
}
}
