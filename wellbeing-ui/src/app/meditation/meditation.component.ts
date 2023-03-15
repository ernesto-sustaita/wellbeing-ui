import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meditation',
  templateUrl: './meditation.component.html',
  styleUrls: ['./meditation.component.css']
})
export class MeditationComponent implements OnInit {

  constructor() { }

  distractions = 0;
  isDistractedButtonVisible = false;
  seconds = 60;
  minutes = 0;

  ngOnInit(): void {
  }

  playBell() {
    const audio = new Audio('assets/sound/tibetan-bell-sound-8s.mp3');
    audio.play();
    this.isDistractedButtonVisible = true;
  }

  updateTime(value: string){
    this.minutes = parseInt(value);
  }

}
