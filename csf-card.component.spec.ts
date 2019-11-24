import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CsfCardComponent } from './csf-card.component';

describe('CsfCardComponent', () => {
  let component: CsfCardComponent;
  let fixture: ComponentFixture<CsfCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CsfCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsfCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
