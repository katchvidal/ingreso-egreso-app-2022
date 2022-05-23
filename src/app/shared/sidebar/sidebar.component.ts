import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
    `
      a {
        cursor: pointer;
      }
    `
  ]
})
export class SidebarComponent implements OnInit {

  constructor( 
    private authService : AuthService 
    ) { }

  ngOnInit(): void {
  }

  logout(){
    this.authService.SignOut()
  }

}
