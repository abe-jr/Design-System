import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CsfIconeComponent } from './csf-icone.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

describe('CsfIconeComponent', () => {
  let component: CsfIconeComponent;
  let fixture: ComponentFixture<CsfIconeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ CsfIconeComponent ],
      providers: [HttpClient]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsfIconeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
