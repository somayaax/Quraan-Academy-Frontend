import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { QAService } from 'src/app/services/qa.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  questions = [];
  categories: { name: string, _id: string }[] = [];
  pageInfo: any = {};
  limit = 20;
  categoryID = '';
  teacherID = '';
  currentPage: number = 1;

  constructor(private _QAService: QAService , private toastr: ToastrService) {
    this._QAService.buttonClicked.subscribe(() => {
      this.getQuestions();
    });
  }

  ngOnInit() {
    this.getQuestions()
    this.getCategories();
  }
  getCategories(): void {
    let params = {
      type: 'question'
    }
    this._QAService.getCategoriesNotPaginated(params).subscribe({
      next: (data) => {
        this.categories = data;
      },
      error: (error: any) => {
        let {
          error: { message },
        } = error;
        if (!message) message = error.error.error;
        console.log(message);
        this.toastr.error(`${message}`, "Error");
      },
    });
  }

  getQuestions(): void {
    this._QAService.getAllQuestions(this.currentPage, this.limit, this.categoryID, this.teacherID).subscribe({
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
}
