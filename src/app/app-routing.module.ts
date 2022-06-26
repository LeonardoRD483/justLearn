import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainLayoutComponent} from "./core/layout/main-layout/main-layout.component";

const routes: Routes = [
  {
    path: 'layout',
    component: MainLayoutComponent,
    children: [
      {path: 'addMaestro', loadChildren: () => import('./features/maestro/maestro.module').then(m => m.MaestroModule)},
      {path: 'card-game', loadChildren: () => import('./features/card-game/card-game.module').then(m => m.CardGameModule)},
      {path: 'game', loadChildren: () => import('./features/game/game.module').then(m => m.GameModule)},
    ]
  },
  {path: '', redirectTo: 'auth/login', pathMatch: 'full'},
  {path: 'auth/login', loadChildren: () => import('./features/login/login.module').then(m => m.LoginModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
