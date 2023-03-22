import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-meditation',
  templateUrl: './meditation.component.html',
  styleUrls: ['./meditation.component.css']
})
export class MeditationComponent implements OnInit {

  constructor() { }

  @ViewChild('secondsLine') secondsLine!: ElementRef;

  distractions = 0;
  isStartButtonVisible = true;
  isDistractedButtonVisible = false;
  isSummaryPanelVisible = false;
  isStopWatchVisible = false;
  secondsDisplay = '';
  minutesDisplay = '';
  seconds = 60;
  minutes = 0;
  totalTime = 0;
  minutesToSeconds = 0;
  degreesForSecond = 0;
  degreesAccumulator = 0;

  ngOnInit(): void {
  }

  playBell() {
    const audio = new Audio('assets/sound/tibetan-bell-sound-8s.mp3');
    audio.play();
  }

  startMeditation(starting: boolean){

    if(starting) {
      this.isStartButtonVisible = false;
      this.isDistractedButtonVisible = true;
      this.isStopWatchVisible = true;
      this.totalTime = this.minutes;
      this.minutesToSeconds = this.minutes * 60;
      this.degreesForSecond = 360 / this.minutesToSeconds;
      this.degreesAccumulator = this.degreesForSecond;
      this.minutes--;
      this.playBell();
    }

    let timeoutId = setTimeout(() => {
      this.seconds--;

      if (this.seconds == -1) {
          this.minutes -= 1;
          this.seconds = 59;
      }
      if (this.seconds < 10) {
        this.secondsDisplay = '0' + this.seconds;
      } else {
        this.secondsDisplay = this.seconds.toString();
      }
      if (this.minutes < 10) {
        this.minutesDisplay = '0' + this.minutes;
      } else {
        this.minutesDisplay = this.minutes.toString();
      }

      this.secondsLine.nativeElement.style.transform = 'rotate(' + this.degreesAccumulator + 'deg)';
      this.degreesAccumulator += this.degreesForSecond;

      //bellPlay = 0;

      if(this.minutes == 0 && this.seconds == 0)
      {
          //pause();
          //document.getElementById('bell').play();
          //document.getElementById("totalTime").innerHTML = document.getElementById('setTime').value;
          //document.getElementById("totalDistractions").innerHTML = distractions;
          //document.getElementById("summaryPanel").style.display = 'block';

          this.playBell();
          this.isSummaryPanelVisible = true;
          this.isDistractedButtonVisible = false;
          this.isStopWatchVisible = false;
          this.isStartButtonVisible = true;
          
          //let intervalId = setInterval(playBell, 8000);

          //function playBell(){
          //    document.getElementById('bell').play();
          //    bellPlay++;
          //    if(bellPlay==2)
          //        clearInterval(intervalId);
          //}

          clearTimeout(timeoutId);

          return;
      }

      this.startMeditation(false);
    }, 1000);
  }

  addDistraction(){
    this.distractions += 1;
  }

}
