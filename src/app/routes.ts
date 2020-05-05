import { Routes } from '@angular/router';
import { HomeComponent } from './Home/Home.component';
import { User_ManageComponent } from './User_Manage/User_Manage.component';
import { Log_ManageComponent } from './Log_Manage/Log_Manage.component';
import { Device_ManageComponent } from './Device_Manage/Device_Manage.component';
import { Pass_ManageComponent } from './Pass_Manage/Pass_Manage.component';
import { RealTIme_LogViewComponent } from './RealTIme_LogView/RealTIme_LogView.component';
import { RealTime_Enroll_ViewComponent } from './Real-Time_Enroll_View/Real-Time_Enroll_View.component';
import { RealTime_Door_Status_ViewComponent } from './Real-Time_Door_Status_View/Real-Time_Door_Status_View.component';

import { ErrorComponent } from './error/error.component';
import { DefaultComponent } from './layouts/default/default.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './_guards/auth.guard';

export const routes: Routes = [
  { path: 'Login', component: LoginComponent },
  {
    path: '',
    component: DefaultComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'Home',
        component: HomeComponent,
      },
      {
        path: 'UserManage',
        component: User_ManageComponent,

      },
    ],
  },
  { path: '**', component: ErrorComponent },

  // { path: '', component: HomeComponent },
  // { path: 'Home', component: HomeComponent },
  // { path: 'UserManage', component: User_ManageComponent },
  // { path: 'error', component: ErrorComponent },
  // { path: '**', redirectTo: 'home', pathMatch: 'full' },
];
