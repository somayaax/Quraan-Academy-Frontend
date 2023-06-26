import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CourseService } from '../../services/course.service';



@Component({
  selector: 'app-edit-course-modal',
  templateUrl: './edit-course-modal.component.html',
  styleUrls: ['./edit-course-modal.component.css']
})
export class EditCourseModalComponent implements OnInit{
  courseForm: FormGroup;
  courseId: string = '';

  
  constructor(
    private formBuilder: FormBuilder, 
    
    private course : CourseService,
  
    @Inject(MAT_DIALOG_DATA) public data: { courseId: string }) {

    this.courseForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      level: ['', [Validators.required, this.levelValidator]],
      description:['', [Validators.required, Validators.minLength(10)]],
      numberOfSessions: ['', [Validators.required]],
      price: ['', [Validators.required, this.greaterThanZeroValidator]],
      startDate: ['', [Validators.required]],
      endDate: ['', [Validators.required]],
      startTime: ['', [Validators.required]],
      endTime: ['', [Validators.required]],
      teacher: ['', [Validators.required]],
      daysOfWeek: [[], [Validators.required, this.daysOfWeekValidator]]
    });
    
    this.courseForm.get('startDate')?.valueChanges.subscribe(() => this.calculateSessions());
    this.courseForm.get('endDate')?.valueChanges.subscribe(() => this.calculateSessions());
    this.courseForm.get('daysOfWeek')?.valueChanges.subscribe(() => this.calculateSessions());
  }

  



  levelValidator(control: any) {
    const validLevels = ['beginner', 'intermediate', 'advanced'];
    return validLevels.includes(control.value) ? null : { invalidLevel: true };
  }

  daysOfWeekValidator(control: any) {
    const validDaysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const daysOfWeek = control.value;

    if (!daysOfWeek) {
      return { required: true };
    }

    for (const dayOfWeek of daysOfWeek) {
      if (!validDaysOfWeek.includes(dayOfWeek)) {
        return { invalidDayOfWeek: true };
      }
    }

    return null;
  }

  greaterThanZeroValidator(control: any) {
    return control.value > 0 ? null : { notGreaterThanZero: true };
  }

  calculateNumberOfSessions(startDate: Date, endDate: Date, daysOfWeek: string[]): number {
    let numSessions = 0;
    const dayOfWeekMs = 24 * 60 * 60 * 1000;
    if(startDate){
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
          description:  data.description,
          level: data.level,
          startTime: data.startTime,
          endTime: data.endTime,
          startDate: data.startDate,
          endDate: data.endDate,
          teacher: data.teacher,
          price: data.price,
          daysOfWeek: data.daysOfWeek,
          numberOfSession: data.numberOfSession
        });
      },
      error: (error) => {
        let {error : {message}}  = error;
        if(!message) message = error.message;
        console.log(`MESSAGE : ${error.message}`,'Could not get course data');
      }
    })
   
  }
  onUpdate() {
    this.course.updateCourse(this.courseForm.value,this.courseId).subscribe({
      next : () =>{
        this.course.buttonClicked.emit();
        console.log(`Data Inserted successfully`,'Insert status');
      },
      error : (error) => {
        let {error : {message}}  = error;
        if(!message) message = error.message;
        console.log(`MESSAGE : ${message}`,'Could not add course data');
      }
    })
    
  }

 


}