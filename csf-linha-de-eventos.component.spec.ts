import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CsfLinhaDeEventosComponent } from './csf-linha-de-eventos.component';

describe('CsfTimelineComponent', () => {
  let component: CsfLinhaDeEventosComponent;
  let fixture: ComponentFixture<CsfLinhaDeEventosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CsfLinhaDeEventosComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsfLinhaDeEventosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
