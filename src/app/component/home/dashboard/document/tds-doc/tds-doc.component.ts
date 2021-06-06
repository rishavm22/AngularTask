import { Component, OnInit } from '@angular/core';
import { MetaData, Records } from 'src/app/model/detaildatas';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-tds-doc',
  templateUrl: './tds-doc.component.html',
  styleUrls: ['./tds-doc.component.css']
})
export class TdsDocComponent implements OnInit {

  metaData!: MetaData;
  records: Records[] = [];
  Arr = Array;
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.dataService.getDetailDocument().subscribe(
      data => {
        this.metaData = data._metaData;
        data.records.forEach(record => {
          if(record.category==='TDS') this.records.push(record);
        })  
      }
    );
  }

}
