import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {UsersService} from "../../services/users.service";

@Component({
  selector: 'app-dashboard-alumno',
  templateUrl: './dashboard-alumno.component.html',
  styleUrls: ['./dashboard-alumno.component.scss']
})
export class DashboardAlumnoComponent implements OnInit {
  cardGame: any = []


  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private userService: UsersService) {
  }

  ngOnInit(): void {
    this.initData();
    console.log(this.data.data)
  }

  initData() {
    this.userService.dashBoard(1).subscribe((response:any) => {
      for (let i = 0; i < response.length; i++) {
        this.cardGame.push(response[i])
      }
    })
  }

}
