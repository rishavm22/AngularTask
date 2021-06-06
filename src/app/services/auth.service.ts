import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

export interface AuthResponseData {
  token: string;
  email: string;
  role: [
    _id: string,
    modules: string[],
  ];
  _id: string;
}

const httpOptions = {
  headers: new HttpHeaders({
    // 'Connection': 'keep-alive',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': 'http://localhost:4200'
    // 'Content-Length': (1*51).toString(),
    // 'Origin': 'http://hma.kilobytetech.com',
    // 'Referer': 'http://hma.kilobytetech.com/',
  }),
  withCredentials: true
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) { }

  login(email: string, password: string) {
    let body = {
      "email": email,
      "password": password,
    }
    return this.http
    .post<AuthResponseData>(
      `http://hmaapi.kilobytetech.com/auth/login`,
      body,
      httpOptions
      
    ).subscribe(
      res => {
        console.log(res);
        
      },
      error => {
        console.log(error);
        
      }
    );
    // .pipe(
      
    //   catchError(this.handleError),
    //   tap(resData => {
    //     this.handleAuthentication(
    //       resData.email,
    //       resData.token,
    //       resData.role,
    //       resData._id,
    //     );
    //   })
    // );
  }

  private handleAuthentication(
    email: string,
    token: string,
    role: [
      _id: string,
      modules: string[]
    ],
    _id: string
  ) {
    console.log(`Email ${email} Id ${_id}`);
    console.log(`role ${role}`);
    
    // const user = new User(email, userId, token, expirationDate);
    // this.user.next(user);
    // this.autoLogout(expiresIn * 1000);
    // localStorage.setItem('userData', JSON.stringify(user));
  }

  private handleError(errorRes: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred!';
    if (!errorRes.error || !errorRes.error.error) {
      console.log(errorMessage);
      
      return throwError(errorMessage);
    }
    switch (errorRes.error.error.message) {
      case 'EMAIL_EXISTS':
        errorMessage = 'This email exists already';
        break;
      case 'EMAIL_NOT_FOUND':
        errorMessage = 'This email does not exist.';
        break;
      case 'INVALID_PASSWORD':
        errorMessage = 'This password is not correct.';
        break;
    }
    console.log(errorMessage);
    
    return throwError(errorMessage);
  }
}
