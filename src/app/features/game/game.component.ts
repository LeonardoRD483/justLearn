import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
// @ts-ignore
import dataPreguntas from '../../../../game-preguntas.json';
// @ts-ignore
import dataRespuestas from '../../../../game-respuestas.json';
import {UsersService} from "../../shared/services/users.service";

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  estado: number = 0;
  interval: any;
  timeLeft: number = 60;
  estado_data_materia: string;
  estado_data_nivel: string;

  nivel: string;
  preguntas = [];
  respuesta = [];
  pregunta_actual: any;
  arr_res = [];
  puntos = 0;
  item_res: any;
  data_pts: any;

  constructor(private router: ActivatedRoute, private userService: UsersService) {
  }


  ngOnInit(): void {
    this.cargarMateria();
    this.startTimer();
    this.cargarLosdatos();
    this.cargarDatosUpdate(1, 1);
  }

  cargarMateria() {
    this.router.params.subscribe((response) => {
      this.estado_data_materia = response['materia']
      this.estado_data_nivel = response['niveles'];
    })
  }

  cargarLosdatos() {
    for (let materiaKey in dataPreguntas.materia) {
      if (materiaKey == this.estado_data_materia) {
        this.cargarPreguntasByNiveles(dataPreguntas.materia[materiaKey]['historia']['nivel'])
      }
    }

    for (let dataRespuestasKey in dataRespuestas.materia) {
      if (dataRespuestasKey == this.estado_data_materia) {
        this.arr_res = dataRespuestas.materia[dataRespuestasKey]['historia']['nivel'];
      }
    }
  }

  cargarPreguntasByNiveles(niveles
                             :
                             []
  ) {
    niveles.forEach(item => {
      if (item['nivel'] == this.estado_data_nivel) {
        this.preguntas = item['respuestas'];
      }
    })
  }

  startTimer() {
    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.timeLeft = 60;
      }
    }, 1000)
  }

  cargarRespuestasByNiveles(num: number, status: boolean) {
    this.harcodeLevel();
    this.estado = 1;
    let pts = 10;
    this.pregunta_actual = this.preguntas[num];
    this.arr_res.forEach(item => {
      if (item['nivel'] == this.estado_data_nivel) {
        if (item['pregunta'] == num) {
          this.respuesta = item['respuestas']
          if (status) {
            this.data_pts.puntos = this.item_res.correcto == 1 ? this.data_pts.puntos + pts : this.data_pts.puntos - pts;
            this.updatePts(this.data_pts);
            let obj_historial = {
              puntos: this.data_pts.puntos,
              date_actual: new Date(),
              nivel: 1,
              alumnos: {
                id: 1
              }
            }
            this.insertHistorial(obj_historial);
          }
        }
      }
    })
  }

  validarLevel(level: number) {
    if (this.data_pts.puntos == 100) {
      let level_actual = level + 1;
      this.userService.updateNivel().subscribe((response) => {

      })
    }
  }

  harcodeLevel() {
    switch (this.estado_data_nivel) {
      case 'basic':
        this.validarLevel(1);
        break;
      case 'intermedio':
        this.validarLevel(2);
        break;
      case 'experto':
        this.validarLevel(3);
        break;
    }
  }

  updatePts(data_pts: any) {
    this.userService.updatePuntos(data_pts).subscribe((response) => {
      this.data_pts = response;
    })
  }

  insertHistorial(obj: any) {
    this.userService.createHistorial(obj).subscribe(console.log)
  }

  // Carga de Datos para la actualizacion de los puntos
  cargarDatosUpdate(alumno_id: number, materia_id: number) {
    this.userService.listPuntosByalumnoAndMateria(alumno_id, materia_id).subscribe(
      (response) => {
        this.data_pts = response;
        // this.data_pts.puntos = 40;
      }
    )
  }

  validarRes(item: any) {
    this.item_res = item;
  }
}
