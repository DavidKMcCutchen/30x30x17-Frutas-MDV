import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrutasListaComponent } from './frutas-lista.component';

describe('FrutasListaComponent', () => {
  let component: FrutasListaComponent;
  let fixture: ComponentFixture<FrutasListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrutasListaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrutasListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
