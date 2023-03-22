import { Component } from '@angular/core';

@Component({
  selector: 'app-set-meditation-time',
  templateUrl: './set-meditation-time.component.html',
  styleUrls: ['./set-meditation-time.component.css']
})
export class SetMeditationTimeComponent {
  minutes = 0;
  isStartButtonVisible = false;

  updateTime(value: number, operation: string){
    switch(operation){
      case '+':
        this.minutes += value;
        break;
      case '-':
        if(this.minutes-value >= 0)
          this.minutes -= value;
        break;
      default:
        this.minutes = value;
    }

    if(this.minutes > 0)
      this.isStartButtonVisible = true;
  }
}
