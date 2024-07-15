import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  login(email: string, password: string) {
    // Simula la autenticación y obtención de token desde el servidor
    const token = 'token_de_prueba';
    
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('token', token);
    }
  }

  get isLoggedIn() {
    if (isPlatformBrowser(this.platformId)) {
      return !!localStorage.getItem('token');
    }
    return false;
  }

}
