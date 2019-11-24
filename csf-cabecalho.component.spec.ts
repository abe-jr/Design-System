import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CsfCabecalhoComponent } from './csf-cabecalho.component';
import { CsfIconeModule } from '../csf-icone/csf-icone.module';

describe('CsfCabecalhoComponent', () => {
  let component: CsfCabecalhoComponent;
  let fixture: ComponentFixture<CsfCabecalhoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ CsfIconeModule ],
      declarations: [ CsfCabecalhoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsfCabecalhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
