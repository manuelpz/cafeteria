import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DesayunosComponent } from './desayunos/desayunos.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch:'full' },
  {path: 'home', component: HomeComponent },
  {path: 'desayunos', component: DesayunosComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
