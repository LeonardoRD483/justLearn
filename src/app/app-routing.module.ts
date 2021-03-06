import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainLayoutComponent} from "./core/layout/main-layout-alumnos/main-layout.component";
import {MainLayoutMaestroComponent} from "./core/layout/main-layout-maestro/main-layout-maestro.component";

const routes: Routes = [
  {
    path: 'layout',
    component: MainLayoutComponent,
    children: [
      {path: 'addMaestro', loadChildren: () => import('./features/maestro/maestro.module').then(m => m.MaestroModule)},
    ]
  },
  {
    path: 'layout-alummno',
    component: MainLayoutMaestroComponent,
    children: [
      {path: 'card-game', loadChildren: () => import('./features/card-game/card-game.module').then(m => m.CardGameModule)},
      {path: 'game/:materia/:niveles', loadChildren: () => import('./features/game/game.module').then(m => m.GameModule)},
    ]
  }
  ,
  {path: '', redirectTo: 'auth/login', pathMatch: 'full'},
  {path: 'auth/login', loadChildren: () => import('./features/login/login.module').then(m => m.LoginModule)},
  {path:'alumno-login', loadChildren: () => import('./features/login-alumno/login-alumno.module').then(m => m.LoginAlumnoModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
