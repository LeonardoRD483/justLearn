import {Component, OnInit} from '@angular/core';
import {UsersService} from "../../shared/services/users.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-card-game',
  templateUrl: './card-game.component.html',
  styleUrls: ['./card-game.component.scss']
})
export class CardGameComponent implements OnInit {
  private materia: string;
  private nivel: string;

  constructor(private userService: UsersService, private router: Router) {
  }

  cardGame: any = []

  ngOnInit(): void {
    this.initData();
  }

  initData() {
    this.userService.byMateria(localStorage.getItem('alumno_id')).subscribe((response: any) => {
      for (let i = 0; i < response.length; i++) {
        this.cardGame.push(response[i])
        console.log(response)
      }
    })
  }

  harcodeMateria(estado_data_nivel: any) {
    switch (estado_data_nivel.toString()) {
      case '0':
        this.nivel = 'basic';
        break;
      case '1':
        this.nivel = 'intermedio';
        break;
      case '2':
        this.nivel = 'experto';
        break;
    }
  }

  harcodeNivel(estado_data_materia: any) {
    switch (estado_data_materia.toString()) {
      case 'historia':
        this.materia = '0';
        break;
      case 'literatura':
        this.materia = '1';
        break;
      case 'arte':
        this.materia = '2';
        break;
    }
  }

  openGame(item: any) {
    console.log(item[3])
    this.harcodeMateria(item[3])
    this.harcodeNivel(item[2])
    console.log(this.materia)
    this.router.navigate([`layout-alummno/game/${this.materia}/${this.nivel}`]);

  }
}
