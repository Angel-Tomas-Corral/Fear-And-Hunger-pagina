import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EnemigosComponent } from './enemigos/enemigos.component';
import { GuiaComponent } from './guia/guia.component';
import { DescargasComponent } from './descargas/descargas.component';
import { FondosComponent } from './fondos/fondos.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'home', component: HomeComponent},
  {path:'enemigos', component: EnemigosComponent},
  {path:'guia', component: GuiaComponent},
  {path:'descargas', component: DescargasComponent},
  {path:'fondos', component: FondosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
