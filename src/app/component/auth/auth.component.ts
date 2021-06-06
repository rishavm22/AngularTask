import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthResponseData } from 'src/app/services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  ishide: boolean =true;
  showPassIcon: string ='fa-eye-slash';
  constructor(private router: Router ) { }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm) {
    if (!f.valid) {
      return;
    }
    let email = f.value.email; 
    let pass = f.value.pas; 

    this.router.navigate(['home']);
  }

  showPass() {
  
    this.ishide=!this.ishide;
  }

}
