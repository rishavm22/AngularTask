import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ClientDataResponseData, DetailDataResponseData } from '../model/detaildatas';


const httpOptions = {
  headers: new HttpHeaders({
    'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjVmNGYxMzIxZWNmYzY0MTQ2Yjc5OGYiLCJkYXRlIjoiMjAyMS0wNS0wNFQwNzo1NDowNy43NTZaIiwiaWF0IjoxNjIwMTE0ODQ3fQ.7bH4ltgLBNmlKPbJ-WWwhbnaqHcAIPr6SDUlhY965D0',
    'Access-Control-Allow-Origin': 'http://localhost:4200'
  }),
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  companyNames:string[] = [];
  constructor(private http: HttpClient, private router: Router) { }

  
  getDetailDocument() {
    return this.http.get<DetailDataResponseData>(
      `http://hmaapi.kilobytetech.com/documents?clientId=5f60e62502392e786fa4ae95&financialYear=2020-2021`,
      httpOptions
    );
  }

  getClients() {
    return this.http
    .get<ClientDataResponseData>(
      `http://hmaapi.kilobytetech.com/users?pageNo=1&size=20`,
      httpOptions
    );
  }

  getCompanyName(clientID: string) {
    this.http.get<DetailDataResponseData>(
      `http://hmaapi.kilobytetech.com/documents?clientId=5f60e62502392e786fa4ae95&financialYear=2020-2021`,
      httpOptions
    ).subscribe(
      data => {
        for(let record of data.records){
          if(record.client.clientID.match(clientID)) {
            this.companyNames.push(record.client.companyName);
          }
        }
      }
    );
  }
}
