import { Component, OnInit } from '@angular/core';
import { MetaData, Records } from 'src/app/model/detaildatas';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css']
})
export class DocumentComponent implements OnInit {

  metaData!: MetaData;
  records: Records[] = [];
  recordSize: number=0;
  colSize: number = 5;
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.dataService.getDetailDocument().subscribe(
      data => {
        this.metaData = data._metaData;
        data.records.forEach(record => {          
          if(record.category=='TDS') this.records.push(record);
        });
        this.recordSize = Math.ceil(this.records.length/5); 
      }
    );
  }

}
