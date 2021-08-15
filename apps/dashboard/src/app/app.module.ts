import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FrutasComponent } from './frutas/frutas.component';
import { FrutasListaComponent } from './frutas/frutas-lista/frutas-lista.component';
import { FrutasDetalhesComponent } from './frutas/frutas-detalhes/frutas-detalhes.component';
import { MaterialModule } from '@frutas/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreDataModule } from '@frutas/core-data';
import { CoreStateModule } from '@frutas/core-state';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [AppComponent, FrutasComponent, FrutasListaComponent, FrutasDetalhesComponent],
  imports: [
    BrowserModule, 
    HttpClientModule, 
    RoutingModule, 
    BrowserAnimationsModule,
    CoreDataModule,
    CoreStateModule,
    MaterialModule, 
    FormsModule, 
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
