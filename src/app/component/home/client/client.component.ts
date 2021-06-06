import { Component, OnInit } from '@angular/core';
import { MetaData, ClientRecords } from 'src/app/model/detaildatas';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  metaData!: MetaData;
  records: ClientRecords[] = [];
  companyNames: string[] = [];
  Arr = Array;
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.dataService.getClients().subscribe(
      data => {
        this.metaData = data._metaData;
        this.records = data.records; 
        for(let record of this.records){
          this.dataService.getCompanyName(record.clientID);
        }
        this.companyNames =this.dataService.companyNames;        
      }
    );
  }

}
