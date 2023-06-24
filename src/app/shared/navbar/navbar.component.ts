import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  loggedIn: boolean = false;
  role: string = '';
  constructor(private _authService: AuthService) {
    this._authService.currentUser.next(this._authService.getDecodedToken());
    this._authService.currentUser$.subscribe((res: any) => {
      if (!res) {
        this.loggedIn = false;
        this.role = ''
      }
      else {
        this.loggedIn = true;
        this.role = res.role;
      }

    })
  }
  logOut() {
    this._authService.logout();
  }
}
