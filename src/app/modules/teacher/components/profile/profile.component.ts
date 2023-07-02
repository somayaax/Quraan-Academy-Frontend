import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeacherService } from '../../services/teacher.service';
import { DatePipe } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({ 
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
  teacherData: any = {};

  constructor(private teacherService: TeacherService,private toastr: ToastrService) { }

  ngOnInit() {
    this.getTeacherData();
  }

  getTeacherData() {
    this.teacherService.getTeacherProfile().subscribe(
      data => {
        this.teacherData = data;
      },
      error => {
        console.error(error);
      }
    );
  }

  updateTeacher() {
    this.teacherService.updateTeacherProfile(this.teacherData).subscribe(
      data => {
        this.teacherData = data;
        this.toastr.success(`Data updated successfully`, 'Success');
      },
      error => {
        console.error(error);
      }
    );
  }
}