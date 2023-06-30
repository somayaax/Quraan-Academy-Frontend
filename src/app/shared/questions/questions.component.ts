import { Component, OnInit } from '@angular/core';
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

  constructor(private _QAService: QAService) { }

  ngOnInit() {
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
