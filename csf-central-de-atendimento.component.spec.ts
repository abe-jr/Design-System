import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CsfCentralDeAtendimentoComponent } from './csf-central-de-atendimento.component';

describe('CsfCentralDeAtendimentoComponent', () => {
  let component: CsfCentralDeAtendimentoComponent;
  let fixture: ComponentFixture<CsfCentralDeAtendimentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CsfCentralDeAtendimentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsfCentralDeAtendimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
