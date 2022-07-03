import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'app-dashboard-alumno',
  templateUrl: './dashboard-alumno.component.html',
  styleUrls: ['./dashboard-alumno.component.scss']
})
export class DashboardAlumnoComponent implements OnInit {
  cardGame = [
    {
      materia: 'Historia',
      punto_actual: '100',
      punto_bajo: '100',
      punto_alto: '100',
      nivel: 'Basico',
      id: 1,
      img: 'https://images.vexels.com/media/users/3/177597/isolated/preview/49a54f12899c810e1bf467afa7dc6ffb-etiqueta-engomada-de-la-insignia-del-manual-del-libro-de-historia.png'
    },
    {
      materia: 'Lenguaje',
      punto_actual: '100',
      punto_bajo: '100',
      punto_alto: '100',
      nivel: 'Basico',
      id: 1,
      img: 'https://cdn.pixabay.com/photo/2013/07/12/15/20/author-149694_960_720.png'
    },
    {
      materia: 'Arte',
      punto_actual: '100',
      punto_bajo: '100',
      punto_alto: '100',
      nivel: 'Basico',
      id: 1,
      img: 'https://images.vexels.com/media/users/3/129058/isolated/preview/ed18aac2f2f388b7716efad02af8100f-dibujos-animados-de-artista-creativo-mujer.png'
    },
    {
      materia: 'Deporte',
      punto_actual: '100',
      punto_bajo: '100',
      punto_alto: '100',
      nivel: 'Basico',
      id: 1,
      img: 'https://palosfrontera.com/wp-content/uploads/2017/11/noticias-deporte.png'
    }
  ]
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    console.log(this.data.data)
  }

}
