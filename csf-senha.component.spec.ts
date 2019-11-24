import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CsfSenhaComponent } from './csf-senha.component';

describe('CsfSenhaComponent', () => {
  let component: CsfSenhaComponent;
  let fixture: ComponentFixture<CsfSenhaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CsfSenhaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsfSenhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
