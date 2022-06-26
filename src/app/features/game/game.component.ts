import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  estado: number = 0;
  interval: any;
  timeLeft: number = 60;

  constructor() { }

  ngOnInit(): void {
    this.startTimer();
  }
  startTimer() {
    this.interval = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
        console.log(this.timeLeft)
      } else {
        this.timeLeft = 60;
      }
    },1000)
  }
  cambiarEstado(estado: number) {
    this.estado = estado;
  }
}
