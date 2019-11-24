import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CsfCheckboxComponent } from './csf-checkbox.component';
import { SanitizeHtmlPipe } from '../../pipes/sanitizeHTML.pipe';

describe('CsfCheckboxComponent', () => {
  let component: CsfCheckboxComponent;
  let fixture: ComponentFixture<CsfCheckboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CsfCheckboxComponent, SanitizeHtmlPipe ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsfCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
