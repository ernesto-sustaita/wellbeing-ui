import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { SnackBarDistractionComponent } from '../snack-bar-distraction/snack-bar-distraction.component';
import { MeditationSummaryComponent } from '../meditation-summary/meditation-summary.component';

@Component({
  selector: 'app-meditation',
  templateUrl: './meditation.component.html',
  styleUrls: ['./meditation.component.css']
})
export class MeditationComponent implements OnInit {

  constructor( private activatedroute: ActivatedRoute, 
    private router: Router, 
    private snackBar: MatSnackBar,
    private dialog: MatDialog ) {
    this.activatedroute.params.subscribe(data => {
      this.minutes = data.minutes;
    });

    if(this.minutes <= 0)
      this.router.navigate(['/set-meditation-time']);
  }
  

  @ViewChild('secondsLine') secondsLine!: ElementRef;

  distractions = 0;
  isDistractedButtonVisible = false;
  isRestartButtonVisible = false;
  isHomeButtonVisible = false;
  isNewMeditationButtonVisible = false;
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
    this.isDistractedButtonVisible = true;
    this.isStopWatchVisible = true;
    this.totalTime = this.minutes;
    this.minutesToSeconds = this.minutes * 60;
    this.degreesForSecond = 360 / this.minutesToSeconds;
    this.degreesAccumulator = this.degreesForSecond;
    this.minutes--;
    this.playBell();
    this.startMeditation();
  }

  playBell() {
    const audio = new Audio('assets/sound/tibetan-bell-sound-8s.mp3');
    audio.play();
  }

  startMeditation(){

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

      if(this.minutes == 0 && this.seconds == 0)
      {
          this.playBell();
          this.isDistractedButtonVisible = false;
          this.isStopWatchVisible = false;
          this.isRestartButtonVisible = true;
          this.isHomeButtonVisible = true;
          this.isNewMeditationButtonVisible = true;

          clearTimeout(timeoutId);

          this.openDialog();

          return;
      }

      this.startMeditation();
    }, 1000);
  }

  addDistraction(){
    this.distractions += 1;
    this.openDistractionSnackBar();
  }

  openDistractionSnackBar() {
    this.snackBar.openFromComponent(SnackBarDistractionComponent, {
      duration: 8 * 1000,
    });
  }

  openDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
      minutes: this.totalTime,
      distractions: this.distractions
    };

    this.dialog.open(MeditationSummaryComponent, dialogConfig);
  }

  restartMeditation(){
    this.isRestartButtonVisible = false;
    this.isHomeButtonVisible = false;
    this.isNewMeditationButtonVisible = false;
    this.seconds = 60;
    this.distractions = 0;
    this.minutes = this.totalTime;
    this.ngOnInit();
  }

}
