import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ChapterService } from '../../services/chapters/chapter.service';
import { ToastrService } from 'ngx-toastr';
import { RecordedCourseService } from '../../services/recordedCourses/recorded-course.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';


@Component({
  selector: 'app-chapter',
  templateUrl: './chapter.component.html',
  styleUrls: ['./chapter.component.css']
})
export class ChapterComponent implements OnInit {

  @Input() selectedChapter: any;
  @Input() recordedCourseId: any;
  @Input() chapters: any[] = [];
  @Input() progress: any[] = [];
  @Output() selectedChapterChange = new EventEmitter<any>();
  safeMediaUrl: SafeResourceUrl = "";

  constructor(private sanitizer: DomSanitizer, private chapter: ChapterService, private toastr: ToastrService, private recordedCourse: RecordedCourseService, private router: Router) { }
  ngOnInit(): void { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['selectedChapter'] && changes['selectedChapter'].currentValue) {
      this.safeMediaUrl = this.sanitizer.bypassSecurityTrustResourceUrl(changes['selectedChapter'].currentValue.media);
    }
  }

  getNextChapter(): void {
    this.chapter.finishChapter(this.recordedCourseId, this.selectedChapter._id).subscribe({
      next: (data) => {
        this.recordedCourse.buttonClicked.emit();
      },
      error: (error: any) => {
        let {
          error: { message },
        } = error;
        if (!message) message = error.error.error;
        this.toastr.error(`${message}`, "Error");
      },
    });

    const currentIndex = this.chapters.indexOf(this.selectedChapter);
    const nextIndex = currentIndex + 1;
    if (nextIndex < this.chapters.length) {
      // Select the next chapter in the array
      const nextChapter = this.chapters[nextIndex];
      this.selectedChapter = nextChapter;
      this.selectedChapterChange.emit(nextChapter);
    } else {
      // Select the first chapter not in progress
      const allChaptersSeen = this.chapters.every(chapter => this.progress.includes(chapter._id));
      if (allChaptersSeen) {
        Swal.fire({
          icon: 'success',
          title: 'Congratulations!',
          text: 'You have successfully completed the course.',
          confirmButtonText: 'OK',
          confirmButtonColor: '#c3a668',
        }).then((result) => {
          if (result.isConfirmed) {
            this.router.navigate(['/student/recordedCourses']);
          }
        });
      }
      const firstChapterNotInProgess = this.chapters.find(chapter => !this.progress.includes(chapter._id));
      this.selectedChapter = firstChapterNotInProgess;
      this.selectedChapterChange.emit(firstChapterNotInProgess);
    }
  }

  isLastChapter(): boolean {
    const lastChapterIndex = this.chapters.length - 1;
    return this.selectedChapter && this.selectedChapter._id === this.chapters[lastChapterIndex]._id;
  }

}
