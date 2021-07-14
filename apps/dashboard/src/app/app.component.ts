import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '@frutas/api-interfaces';

@Component({
  selector: 'frutas-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  hello$ = this.http.get<Message>('/api/hello');
  constructor(private http: HttpClient) {}
}
