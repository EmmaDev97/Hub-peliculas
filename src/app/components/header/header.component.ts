import { Component } from '@angular/core';
import { LoginService } from '../../pages/login/service/login.service';
import { BrowseComponent } from "../../pages/browse/browse.component";



@Component({
  selector: 'app-header',
  standalone: true,
  imports: [BrowseComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
      
  

  constructor(private loginService: LoginService) { }

  onLogout() {
    this.loginService.logout();
  }
}
