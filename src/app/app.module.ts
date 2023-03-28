import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './pages/outlet/app.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { CommentPrevviewComponent } from './components/comment-prevview/comment-prevview.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RouterModule } from '@angular/router';
import { ShowViewComponent } from './pages/show-view/show-view.component';
import { LoginViewComponent } from './pages/login-view/login-view.component';
import { HttpClientModule } from '@angular/common/http';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { RegisterViewComponent } from './pages/register-view/register-view.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginFormComponent,
    RegisterFormComponent,
    CommentPrevviewComponent,
    NotFoundComponent,
    ShowViewComponent,
    LoginViewComponent,
    RegisterViewComponent





  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  title = "Twitter"
}
