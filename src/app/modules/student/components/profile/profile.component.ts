import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../../../admin/services/student.service';
import {studentElement}   from '../../../admin/components/list-students/list-students.component';
import { ToastrService } from 'ngx-toastr';
@Component({ 
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
  studentData: any = {};

  constructor(private studentService: StudentService,private toastr: ToastrService) { }

  ngOnInit() {
    this.getStudentData();
  }

  getStudentData() {
    this.studentService.getStudentProfile().subscribe(
      data => {
        this.studentData = data;
      },
      error => {
        console.error(error);
      }
    );
  }

  updateStudent() {
    this.studentService.updateStudentProfile(this.studentData).subscribe(
      data => {
        this.studentData = data;
        this.toastr.success(`Data updated successfully`, 'Success');
      },
      error => {
        console.error(error);
      }
    );
  }
}