import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { HomeComponent } from 'src/app/Home/Home.component';
import { User_ManageComponent } from 'src/app/User_Manage/User_Manage.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { NavbarComponent } from 'src/app/shared/navbar/navbar.component';



@NgModule({
  declarations: [
    DefaultComponent,
    HomeComponent,
    User_ManageComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ]
})
export class DefaultModule { }
