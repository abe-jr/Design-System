import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CsfAccordeonComponent } from './csf-accordeon.component';

describe('CsfAccordeonComponent', () => {
  let component: CsfAccordeonComponent;
  let fixture: ComponentFixture<CsfAccordeonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CsfAccordeonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsfAccordeonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
