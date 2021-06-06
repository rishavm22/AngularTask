import { Component, OnInit } from '@angular/core';
import { MetaData, Records } from 'src/app/model/detaildatas';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-tcs-doc',
  templateUrl: './tcs-doc.component.html',
  styleUrls: ['./tcs-doc.component.css']
})
export class TcsDocComponent implements OnInit {

  metaData!: MetaData;
  records: Records[] = [];
  Arr = Array;
  recordSize: number=0;
  colSize: number=5;
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.dataService.getDetailDocument().subscribe(
      data => {
        this.metaData = data._metaData;
        data.records.forEach(record => {
          if(record.category==='TCS') this.records.push(record);
        });
        this.recordSize = Math.ceil(this.records.length/5);  
      }
    );
  }

  

}
