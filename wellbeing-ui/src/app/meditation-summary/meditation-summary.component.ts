import { Component, Inject, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-meditation-summary',
  templateUrl: './meditation-summary.component.html',
  styleUrls: ['./meditation-summary.component.css']
})
export class MeditationSummaryComponent implements OnInit {

  minutes: number = 0;
  distractions: number = 0;
  timeUnit = 'minutes';

  constructor(private dialogRef: MatDialogRef<MeditationSummaryComponent>,
    @Inject(MAT_DIALOG_DATA) data : any) { 
      this.minutes = data.minutes;
      this.distractions = data.distractions;

      if(this.minutes == 1)
        this.timeUnit = 'minute ';
      else
        this.timeUnit = 'minutes';
    }

  ngOnInit(): void {
  }

  closeSummary(){
    this.dialogRef.close();
  }

}
