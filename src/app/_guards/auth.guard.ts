import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';
import { ToasterService } from '../_services/Toaster.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  /**
   *
   */
  /**
   *
   */
  constructor(
    private authService: AuthService,
    private router: Router,
    private noti: ToasterService
  ) {}

  canActivate(): boolean {
    if (this.authService.LoggendIn()) {
      return true;
    }
    this.noti.error('Permission Denied', 'You Need To login First');
    this.router.navigate(['/Login']);
    return false;
  }
}
