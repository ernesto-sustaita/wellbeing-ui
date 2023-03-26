import { Component, OnInit } from "@angular/core";

@Component({
    templateUrl: './start.component.html'
})

export class StartComponent implements OnInit {
    
    ngOnInit(): void {
        let month = 4;//this.dateObject.getMonth();
        let year = this.dateObject.getFullYear();
        this.currentMonth = this.monthNames[month];
        this.daysInMonth = this.getDaysInMonth(year,month);
        this.monthStartsWith = this.getDayMonthStartsWith(year,month);
    }
    
    monthNames = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    dateObject = new Date();
    currentMonth: string = '';
    daysInMonth: number = 0;
    monthStartsWith: number = 0;

    getDaysInMonth (year: number, month: number) {
        return new Date(year, month+1, 0).getDate();
    }

    getDayMonthStartsWith(year: number, month: number){
        return new Date(year, month, 1).getDay();
    }
}