import { Component, OnInit } from "@angular/core";

@Component({
    templateUrl: './start.component.html'
})

export class StartComponent implements OnInit {

    ngOnInit(): void {
      // Months start in 0 = January
      let month = this.dateObject.getMonth();
      let year = this.dateObject.getFullYear();
      this.currentMonth = this.monthNames[month];
      this.daysInMonth = this.getDaysInMonth(year,month);
      // Sunday = 0, Monday = 1...
      this.monthStartsWith = this.getDayMonthStartsWith(year,month);
      this.calendarRows = Math.ceil((this.daysInMonth+this.monthStartsWith)/7);
      this.calendarArray = this.createCalendarArray();
    }

    monthNames = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    dateObject = new Date();
    currentMonth: string = '';
    daysInMonth: number = 0;
    monthStartsWith: number = 0;
    calendarRows: number = 0;
    calendarArray: any;

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
            weekArray.push(++currentDay);
            daysLeft--;
          } else {
            weekArray.push(-1);
          }
          totalCount++;
        }
        calendarArray.push(weekArray);
      }
      return calendarArray;
    }
}
