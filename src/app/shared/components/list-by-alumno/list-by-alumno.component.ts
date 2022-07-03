import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatDialog} from "@angular/material/dialog";
import {AddUserAlumnoComponent} from "../add-user-alumno/add-user-alumno.component";
import {DashboardAlumnoComponent} from "../dashboard-alumno/dashboard-alumno.component";
import {UsersService} from "../../services/users.service";

export interface UserData {
  id: string;
  name: string;
  progress: string;
  fruit: string;
}


/**
 * @title Data table with sorting, pagination, and filtering.
 */

@Component({
  selector: 'app-list-by-alumno',
  templateUrl: './list-by-alumno.component.html',
  styleUrls: ['./list-by-alumno.component.scss']
})
export class ListByAlumnoComponent implements OnInit {


  displayedColumns: string[] = ['nombre', 'apellido', 'Actions'];
  dataSource: any;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public dialog: MatDialog, public userService: UsersService) {
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  listAlumno() {
    this.userService.listAlumno(1).subscribe((response) => {
        console.log(response)
        this.dataSource = response;
        console.log(this.dataSource);
      }, error => {
        console.log(error)
      }
    )
  }

  ngOnInit(): void {
    this.listAlumno();
  }

  openDialog() {
    const dialogRef = this.dialog.open(AddUserAlumnoComponent, {
      width: '875px',
      height: '550px',
      panelClass: 'custom-dialog-container'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('hello fini');
      this.listAlumno();
    });
  }

  openDialog2(id: number) {
    const dialogRef = this.dialog.open(DashboardAlumnoComponent, {
      width: '975px',
      height: '850px',
      panelClass: 'custom-dialog-container',
      data: { data: id }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('hello fini');
    });
  }

  updateDialog(doctor_id: any) {

  }

  delete(doctor_id: any) {

  }

  openHistorial(id: number) {

  }

}
