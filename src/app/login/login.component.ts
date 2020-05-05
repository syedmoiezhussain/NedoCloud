import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';
import { ToasterService } from '../_services/Toaster.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  model: any = {};

  constructor(
    private router: Router,
    private authService: AuthService,
    private noti: ToasterService
  ) {}

  ngOnInit(): void {
  }

  login() {
    this.authService.login(this.model).subscribe(
      (next) => {
        this.noti.success('Login Success', 'Successfully Login');
      },
      (error) => {
        this.noti.error('Login Failed', 'User Not Found');
      },
      () => {
        this.router.navigate(['/Home']);
      }
    );
  }
}
