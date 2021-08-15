import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormGroupDirective, NgForm } from '@angular/forms';
import { Fruta } from '@frutas/api-interfaces';

@Component({
  selector: 'frutas-frutas-detalhes',
  templateUrl: './frutas-detalhes.component.html',
  styleUrls: ['./frutas-detalhes.component.scss']
})
export class FrutasDetalhesComponent {
  currentFruta: Fruta;
  originalTitle: string;

  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();
  @Input() set fruta(value) {
    if (value) this.originalTitle = value.name;
    this.currentFruta = {...value}
  }

  @Input() form: FormGroup;

  save(formDirective: FormGroupDirective) {
    this.saved.emit(formDirective.value);
    formDirective.resetForm();
  }

  cancel() {
    this.cancelled.emit();
  }

}
