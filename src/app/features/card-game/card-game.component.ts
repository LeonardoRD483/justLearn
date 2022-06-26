import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-card-game',
  templateUrl: './card-game.component.html',
  styleUrls: ['./card-game.component.scss']
})
export class CardGameComponent implements OnInit {

  constructor() {
  }

  cardGame = [
    {
      materia: 'Historia',
      puntos: '100',
      nivel: 'Basico',
      id: 1,
      img: 'https://images.vexels.com/media/users/3/177597/isolated/preview/49a54f12899c810e1bf467afa7dc6ffb-etiqueta-engomada-de-la-insignia-del-manual-del-libro-de-historia.png'
    },
    {
      materia: 'Lenguaje',
      puntos: '100',
      nivel: 'Basico',
      id: 1,
      img: 'https://cdn.pixabay.com/photo/2013/07/12/15/20/author-149694_960_720.png'
    },
    {
      materia: 'Arte',
      puntos: '100',
      nivel: 'Basico',
      id: 1,
      img: 'https://images.vexels.com/media/users/3/129058/isolated/preview/ed18aac2f2f388b7716efad02af8100f-dibujos-animados-de-artista-creativo-mujer.png'
    },
    {
      materia: 'Deporte',
      puntos: '100',
      nivel: 'Basico',
      id: 1,
      img: 'https://palosfrontera.com/wp-content/uploads/2017/11/noticias-deporte.png'
    }
  ]

  ngOnInit(): void {
  }

}
