import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChapterService } from '../../services/chapters/chapter.service';
import { RecordedCourseService } from '../../services/recordedCourses/recorded-course.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-chapters',
  templateUrl: './chapters.component.html',
  styleUrls: ['./chapters.component.css']
})
export class ChaptersComponent implements OnInit {
  recordedCourseId: string | any = '';

  chapters: any[] = [];
  progress: any[] = [];
  selectedChapter: any;
  isLoading: boolean = true;

  constructor(private route: ActivatedRoute, private toastr: ToastrService, private chapter: ChapterService, private recordedCourse: RecordedCourseService) { }

  ngOnInit(): void {
    if (!this.recordedCourseId) {
      this.route.params.subscribe(params => {
        this.recordedCourseId = params['recordedCourseId'];
        this.getChapters();
        this.getRecordedCourse();
      });
    } else {
      this.getChapters();
      this.getRecordedCourse();
    }

    this.recordedCourse.buttonClicked.subscribe(() => {
      this.getRecordedCourse();
    });
  }

  onSelectedChapterChange(chapter: any) {
    this.selectedChapter = chapter;
  }

  getChapters(): void {
    this.chapter.getRecordedCourseChapters(this.recordedCourseId).subscribe({
      next: (data) => {
        this.chapters = data;
        this.selectedChapter = this.chapters[0];
        this.isLoading = false;
      },
      error: (error: any) => {
        let {
          error: { message },
        } = error;
        if (!message) message = error.error.error;
        this.toastr.error(`${message}`, "Error");
        this.isLoading = false
      },
    })
  }

  getRecordedCourse(): void {
    this.recordedCourse.getStudentRecordedCourseById(this.recordedCourseId).subscribe({
      next: (data) => {
        this.progress = data.progress;
      },
      error: (error: any) => {
        let {
          error: { message },
        } = error;
        if (!message) message = error.error.error;
        this.toastr.error(`${message}`, "Error");
      },
    });
  }

  selectChapter(chapter: any): void {
    this.selectedChapter = chapter;
  }

  toggleMenu() {
    const sidebar = document.querySelector('.chapter-sidebar');
    if (sidebar?.classList.contains('active')) {
      sidebar?.classList.remove('active');
    } else {
      sidebar?.classList.add('active');
    }
    const sidebarList = document.querySelector('.chapter-sidebar-list');

    if (sidebarList) {
      if (sidebarList.classList.contains('active')) {
        sidebarList.classList.remove('active');
      } else {
        sidebarList.classList.add('active');
      }
    }
  }
}
