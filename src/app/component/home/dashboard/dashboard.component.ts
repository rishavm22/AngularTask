import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  currentY =(new Date().getFullYear());
  months = ['Jan','Feb', 'March', 'April', 'May', 'June', ' July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
  sessions:string[]= [];
  selectedSession= 'FY '+(this.currentY-1)+'-'+this.currentY;
  selectedMonth: string= this.months[(new Date().getMonth())];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getDetailDocument();
    let year = this.currentY-25;
    for(var i=0; i<50; i++){
      this.sessions.push('FY '+(year-1)+'-'+year);
      year++;
    }
  }

}
