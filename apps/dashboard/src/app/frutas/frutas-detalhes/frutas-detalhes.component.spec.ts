import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrutasDetalhesComponent } from './frutas-detalhes.component';

describe('FrutasDetalhesComponent', () => {
  let component: FrutasDetalhesComponent;
  let fixture: ComponentFixture<FrutasDetalhesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrutasDetalhesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrutasDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
