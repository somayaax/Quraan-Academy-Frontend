import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { QuestionsComponent } from "./components/questions/questions.component";
import { RecourdedCoursesComponent } from "./components/recourded-courses/recourded-courses.component";

const routes: Routes = [
    { path: "questions", component: QuestionsComponent },
    { path: "recordedCourses", component: RecourdedCoursesComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class StudentRoutingModule {}
