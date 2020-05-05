import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { routes } from './routes';
import { DefaultModule } from './layouts/default/default.module';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { AuthService } from './_services/auth.service';
import { ErrorInterceptor } from './_services/error.interceptor';
import { ToasterService } from './_services/Toaster.service';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes),
    DefaultModule
  ],
  providers: [
    AuthService,
    ErrorInterceptor,
    ToasterService

  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
