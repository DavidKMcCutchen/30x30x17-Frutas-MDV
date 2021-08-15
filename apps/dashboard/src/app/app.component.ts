import { Component } from '@angular/core';


@Component({
  selector: 'frutas-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title= 'Frutas';
  links= [
    {path: '', icon: 'home', title: 'Home'},
    {path: 'frutas', icon: 'view_list', title: 'Frutas'}
  ]
}
