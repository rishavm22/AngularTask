import { Component, OnInit } from '@angular/core';
import { MetaData, Records } from 'src/app/model/detaildatas';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-esi-pf-doc',
  templateUrl: './esi-pf-doc.component.html',
  styleUrls: ['./esi-pf-doc.component.css']
})
export class EsiPfDocComponent implements OnInit {

  metaData!: MetaData;
  records: Records[] = [];
  Arr = Array;
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
          if(record.category=='ESI_PF') this.records.push(record);
        });
        this.recordSize = Math.ceil(this.records.length/5);
      }
    );
  }

}

/*
ADVANCE_TAX
ESI_PF
TCS
TDS
GST
 */