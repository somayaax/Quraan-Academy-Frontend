import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-course-modal',
  templateUrl: './add-course-modal.component.html',
  styleUrls: ['./add-course-modal.component.css']
})
export class AddCourseModalComponent implements OnInit {

  courseForm: FormGroup ;

  constructor(private fb: FormBuilder) {
    this.courseForm = this.fb.group({
      name: ['', [Validators.required]],
      level: ['', [Validators.required, this.levelValidator]],
      description:['', [Validators.required, Validators.minLength(10)]],
      numberOfSessions: ['', [Validators.required]],
      price: ['', [Validators.required]],
      startDate: ['', [Validators.required]],
      endDate: ['', [Validators.required]],
      startTime: ['', [Validators.required]],
      endTime: ['', [Validators.required]],
      teacher: ['', [Validators.required]],
      daysOfWeek: ['', [Validators.required, this.daysOfWeekValidator]]
    });
  }

  levelValidator(control: any) {
    const validLevels = ['beginner', 'intermediate', 'advanced'];
    return validLevels.includes(control.value) ? null : { invalidLevel: true };
  }
  daysOfWeekValidator(control: any) {
    const validDaysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    return validDaysOfWeek.includes(control.value) ? null : { invalidDayOfWeek: true };
  }

  onSubmit() {

  }
  ngOnInit(): void {}

}
