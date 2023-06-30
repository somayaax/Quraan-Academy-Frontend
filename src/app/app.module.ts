import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './shared/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { LoginComponent } from './shared/login/login.component';
import { NotfoundComponent } from './shared/notfound/notfound.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { ToastrModule } from 'ngx-toastr';
import { QuestionsComponent } from './shared/questions/questions.component';
import { QuestionComponent } from './shared/question/question.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    NotfoundComponent,
    SpinnerComponent,
    QuestionsComponent,
    QuestionComponent,

  ],
  imports: [
    BrowserAnimationsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
