import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Fruta } from '@frutas/api-interfaces';

@Component({
  selector: 'frutas-frutas-lista',
  templateUrl: './frutas-lista.component.html',
  styleUrls: ['./frutas-lista.component.scss']
})
export class FrutasListaComponent {
  @Input() frutas: Fruta[] | null;
  @Input() readonly = false;
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
}
