import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ListCoursesComponent } from "./components/list-courses/list-courses.component";
import { ListTeachersComponent } from "./components/list-teachers/list-teachers.component";
import { ListRecordedCourseComponent } from "./components/list-recorded-course/list-recorded-course.component";
import { ListSessionsComponent } from "./components/list-sessions/list-sessions.component";
import { ListChaptersComponent } from "./components/list-chapters/list-chapters.component";

const routes: Routes = [
    { path: "courses/list", component: ListCoursesComponent },
    { path: "teachers/list", component: ListTeachersComponent },
    { path: "recordedCourses/list", component: ListRecordedCourseComponent },
    { path: "sessions/list", component: ListSessionsComponent },
    { path: "chapters/list", component: ListChaptersComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AdminRoutingModule {}
