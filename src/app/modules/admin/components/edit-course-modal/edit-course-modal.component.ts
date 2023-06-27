import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CourseService } from '../../services/course.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-edit-course-modal',
  templateUrl: './edit-course-modal.component.html',
  styleUrls: ['./edit-course-modal.component.css']
})
export class EditCourseModalComponent implements OnInit {
  courseForm: FormGroup;
  courseId: string = '';
  courseInstance: any;

  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private course: CourseService,
    private dialogRef: MatDialogRef<EditCourseModalComponent>,

    @Inject(MAT_DIALOG_DATA) public data: { courseId: string }) {
    this.course.getCourse(this.courseId).subscribe(
      {
    
        next: (data) => {
          
          this.courseInstance=data}}
    );
    this.courseForm = this.formBuilder.group({
      name: [''],
      level: ['', [this.levelValidator]],
      description: ['', [Validators.minLength(10)]],
      numberOfSessions: [''],
      price: ['', [this.greaterThanZeroValidator]],
      startDate: [''],
      endDate: [''],
      startTime: [''],
      endTime: [''],
      teacher: [''],
      daysOfWeek: [[], [this.daysOfWeekValidator]]
    });

    this.courseForm.get('startDate')?.valueChanges.subscribe(() => this.calculateSessions());
    this.courseForm.get('endDate')?.valueChanges.subscribe(() => this.calculateSessions());
    this.courseForm.get('daysOfWeek')?.valueChanges.subscribe(() => this.calculateSessions());
  }





  levelValidator(control: any) {
    const validLevels = ['beginner', 'intermediate', 'advanced'];
 
  }

  daysOfWeekValidator(control: any) {
    const validDaysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const daysOfWeek = control.value;

    if (!daysOfWeek) {
      return null;
    }

    for (const dayOfWeek of daysOfWeek) {
      if (!validDaysOfWeek.includes(dayOfWeek)) {
        return { invalidDayOfWeek: true };
      }
    }

    return null;
  }

  greaterThanZeroValidator(control: any) {
  
  }

  calculateNumberOfSessions(startDate: Date | null | undefined, endDate: Date | null | undefined, daysOfWeek: string[]): number {
    let numSessions = 0;
    const dayOfWeekMs = 24 * 60 * 60 * 1000;
    if (startDate instanceof Date && endDate instanceof Date) {
      let currDate = new Date(startDate.getTime());
      while (currDate <= endDate) {
        if (daysOfWeek.includes(currDate.toLocaleDateString('en-US', { weekday: 'long' }))) {
          numSessions++;
        }
        currDate = new Date(currDate?.getTime() + dayOfWeekMs);
      }
    }
    return numSessions;
  }

  calculateSessions() {
    const startDate = this.courseForm.get('startDate')?.value as Date;
    const endDate = this.courseForm.get('endDate')?.value as Date;
    const daysOfWeek = this.courseForm.get('daysOfWeek')?.value as string[];

    const numSessions = this.calculateNumberOfSessions(startDate, endDate, daysOfWeek);

    this.courseForm.patchValue({ numberOfSessions: numSessions });
  }

  ngOnInit(): void {
    this.courseId = this.data.courseId;
    this.course.getCourse(this.courseId).subscribe({
      next: (data) => {
        console.log(data);
  
        this.courseForm.patchValue({
      name: data.name,
  description: data.description,
  level: data.level,
  startTime: data.startTime,
  endTime: data.endTime,
  startDate: data.startDate,
  endDate: data.endDate,
  teacher: data.teacher,
  price: data.price,
  daysOfWeek: data.daysOfWeek,
  numberOfSessions: data.numberOfSessions ?? null
        });
      },
      error: (error) => {
        let { error: { message } } = error;
        if (!message) message = error.message;
        console.log(`MESSAGE : ${error.message}`, 'Could not get course data');
      }
    });
  }
  onUpdate() {
    this.course.updateCourse(this.courseId, this.courseForm.value).subscribe({
      next: () => {
        this.course.buttonClicked.emit();
        this.toastr.success(`Course updated successfully`,'Success');
        this.dialogRef.close();
      },
      error: (error) => {
        let { error: { message } } = error;
        if (!message) message = error.message;
  
        if (error.status === 400  ) {
          this.toastr.error('Can not update course is already started','Error');
        } else {
          console.log(`MESSAGE : ${message}`, 'Could not update course data');
        }
      }
    });
  }

  }




