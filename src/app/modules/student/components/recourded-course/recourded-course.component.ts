import { Component, Input } from "@angular/core";

@Component({
  selector: "app-recourded-course",
  templateUrl: "./recourded-course.component.html",
  styleUrls: ["./recourded-course.component.css"],
})
export class RecourdedCourseComponent {
  @Input() course: any;

  getProgressPercentage(): number | string {
    const percentage = (this.course.progress.length / this.course.courseID.numberOfChapters) * 100;
    return isNaN(percentage) ? 0 : Math.round(percentage);
  }
  getProgressColor(): string {
    if (this.getProgressPercentage() === 100) {
      return "green";
    } else {
      return "";
    }
  }
}
