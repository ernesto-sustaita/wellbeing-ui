import { Component, OnInit } from "@angular/core";
import { Activity } from './models/activity';
import { CalendarDay } from "./dto/calendarDay.out";
import { ActivityService } from './services/activity.service';

@Component({
    templateUrl: './start.component.html',
    styleUrls: ['./start.component.css']
})

export class StartComponent implements OnInit {

    constructor (private activityService: ActivityService ){
      this.meditationData = [];
    }

    ngOnInit(): void {
      // Months start in 0 = January
      this.month = this.dateObject.getMonth();
      this.year = this.dateObject.getFullYear();
      this.currentMonth = this.monthNames[this.month];
      this.daysInMonth = this.getDaysInMonth(this.year,this.month);

      // Sunday = 0, Monday = 1...
      this.monthStartsWith = this.getDayMonthStartsWith(this.year,this.month);
      this.calendarRows = Math.ceil((this.daysInMonth+this.monthStartsWith)/7);


      let formattedMonth = (this.month + 1) < 10 ? '0' + (this.month + 1) : this.month + 1;
      let firstDayOfMonth = this.year + '-' + formattedMonth + '-01';
      let lastDayOfMonth =  this.year + '-' + formattedMonth + '-' + this.daysInMonth;

      this.activityService.getActivitiesByDate(firstDayOfMonth, lastDayOfMonth)
          .subscribe(data => {
            console.log(data);
            this.meditationData = data;
            this.calendarArray = this.createCalendarArray();
          });
    }

    monthNames = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    year: number = 0;
    month: number = 0;
    dateObject = new Date();
    currentMonth: string = '';
    daysInMonth: number = 0;
    monthStartsWith: number = 0;
    calendarRows: number = 0;
    calendarArray: any;
    meditationData: Activity[];

    getDaysInMonth (year: number, month: number) {
        return new Date(year, month+1, 0).getDate();
    }

    getDayMonthStartsWith(year: number, month: number){
        return new Date(year, month, 1).getDay();
    }

    createCalendarArray() {
      let totalCount = 0;
      let daysLeft = this.daysInMonth;
      let currentDay = 0;
      let calendarArray = [];

      for(let week = 0; week < this.calendarRows; week++) {
        let weekArray = [];
        for(let i=0; i<7; i++) {
          if(totalCount >= this.monthStartsWith && daysLeft > 0) {

            let ola = new CalendarDay();
            let dayNumber = ++currentDay;
            let formattedDayNumber = dayNumber < 10 ? '0' + dayNumber : dayNumber;
            let formattedMonthNumber = (this.month+1) < 10 ? '0' + (this.month+1) : this.month+1;
            let olo = this.meditationData.find(item => item.createdDate.includes(this.year + '-' + formattedMonthNumber + '-' + formattedDayNumber));

            if(olo !== undefined) {
              ola.dayNumber = dayNumber.toString();
              ola.meditationSession = true;
            } else {
              ola.dayNumber = dayNumber.toString();
              ola.meditationSession = false;
            }

            weekArray.push(ola);
            daysLeft--;
          } else {
            weekArray.push({"dayNumber":null,"meditationSession":null});
          }
          totalCount++;
        }
        calendarArray.push(weekArray);
      }
      console.log(calendarArray);
      return calendarArray;
    }
}
