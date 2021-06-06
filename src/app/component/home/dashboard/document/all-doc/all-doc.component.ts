import { Component, OnInit } from '@angular/core';
import { MetaData, Records } from 'src/app/model/detaildatas';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-all-doc',
  templateUrl: './all-doc.component.html',
  styleUrls: ['./all-doc.component.css']
})
export class AllDocComponent implements OnInit {

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
        this.records = data.records;    
      }
    );
  }

}
