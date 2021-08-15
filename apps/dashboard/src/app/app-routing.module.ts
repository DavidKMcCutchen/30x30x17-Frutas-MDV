import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { FrutasComponent } from './frutas/frutas.component';
import { FrutasService } from "@frutas/core-data";
import { LoginComponent } from "@frutas/ui-login";

const routes: Route[]= [
  {path: '', component: LoginComponent},
  {path: 'frutas', component: FrutasComponent},
  {path: 'login', component: LoginComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RoutingModule {}
