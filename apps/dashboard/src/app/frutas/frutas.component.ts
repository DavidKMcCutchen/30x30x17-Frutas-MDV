import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Fruta, emptyFruta } from '@frutas/api-interfaces';
import { FrutasFacade } from '@frutas/core-state';
import { Observable } from 'rxjs';

@Component({
  selector: 'frutas-frutas',
  templateUrl: './frutas.component.html',
  styleUrls: ['./frutas.component.scss']
})
export class FrutasComponent implements OnInit {
  allFrutas$: Observable<Fruta[]> = this.frutasFacade.allFrutas$;
  selectedFruta$: Observable<Fruta> = this.frutasFacade.selectedFrutas$;

  form: FormGroup;


  constructor(
    private frutasFacade: FrutasFacade,
    private formBuilder: FormBuilder
    ) {
      this.frutasFacade.mutations$.subscribe((_) => this.resetFruta())
    }

  ngOnInit() {
    this.initForm();
    this.frutasFacade.loadFrutas();
    this.resetFruta();
  };

  selectFruta(fruta: Fruta) {
    this.frutasFacade.selectFruta(fruta.id)
    this.form.patchValue(fruta);
  }

  saveFruta(fruta: Fruta) {
    this.frutasFacade.saveFruta(fruta);
  }

  deleteFruta(fruta: Fruta) {
    this.frutasFacade.deleteFruta(fruta);
  }


  resetFruta() {
    this.form.reset();
    this.selectFruta(emptyFruta);
  }

  private initForm() {
    this.form = this.formBuilder.group({
      id: [null],
      name: [''],
      description: ['']
    })
  }

}
