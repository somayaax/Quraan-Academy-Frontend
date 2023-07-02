import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeacherService } from '../../services/teacher.service';

@Component({ 
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
  teacherData: any = {};

  constructor(private teacherService: TeacherService) { }

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
      },
      error => {
        console.error(error);
      }
    );
  }
}