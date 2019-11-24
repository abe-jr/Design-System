import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CsfInfoTituloValorComponent } from './csf-info-titulo-valor.component';

describe('CsfInfoTituloValorComponent', () => {
  let component: CsfInfoTituloValorComponent;
  let fixture: ComponentFixture<CsfInfoTituloValorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CsfInfoTituloValorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsfInfoTituloValorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
