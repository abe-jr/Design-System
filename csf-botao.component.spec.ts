import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CsfBotaoComponent } from './csf-botao.component';

describe('CsfBotaoComponent', () => {
  let component: CsfBotaoComponent;
  let fixture: ComponentFixture<CsfBotaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CsfBotaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsfBotaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
