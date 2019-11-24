import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CsfListaComponent } from './csf-lista.component';

describe('CsfListaComponent', () => {
  let component: CsfListaComponent;
  let fixture: ComponentFixture<CsfListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CsfListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsfListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
