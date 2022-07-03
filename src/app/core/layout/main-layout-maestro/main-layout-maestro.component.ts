import { Component, OnInit } from '@angular/core';
import {map, Observable, shareReplay} from "rxjs";
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";

@Component({
  selector: 'app-main-layout-maestro',
  templateUrl: './main-layout-maestro.component.html',
  styleUrls: ['./main-layout-maestro.component.scss']
})
export class MainLayoutMaestroComponent implements OnInit {

  navBarTitle = '';
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  constructor(private breakpointObserver: BreakpointObserver,) { }

  ngOnInit(): void {
  }
  logout():void {
    console.log('Sesión cerrada con éxito');

  }
  async getTitleNavBar(title: string) {
    this.navBarTitle = title;

  }
}
