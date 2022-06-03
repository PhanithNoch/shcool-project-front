import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuardService } from 'src/app/shared/services/auth-guard.service';
import { TokenService } from 'src/app/shared/services/token.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(
    private guard:AuthGuardService,
    private tokenService:TokenService,
    private router:Router
  ) { }

  ngOnInit(): void {
  }

  signOut(){
    this.tokenService.remove()
    this.guard.changeAuthStatus(false)
    //signout 
    this.router.navigateByUrl('/login')
    
  }

}
