import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CsfBarraDeProgressoComponent } from './csf-barra-de-progresso.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('CsfBarraDeProgressoComponent', () => {
  let component: CsfBarraDeProgressoComponent;
  let fixture: ComponentFixture<CsfBarraDeProgressoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ BrowserAnimationsModule ],
      declarations: [ CsfBarraDeProgressoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsfBarraDeProgressoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
