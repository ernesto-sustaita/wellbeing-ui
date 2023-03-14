import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meditation',
  templateUrl: './meditation.component.html',
  styleUrls: ['./meditation.component.css']
})
export class MeditationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  playBell() {
    const audio = new Audio('assets/sound/tibetan-bell-sound-8s.mp3');
    audio.play();
  }

}
