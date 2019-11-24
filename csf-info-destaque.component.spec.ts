import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CsfInfoDestaqueComponent } from './csf-info-destaque.component';
import { CsfIconeModule } from '../csf-icone/csf-icone.module';

describe('CsfInfoDestaqueComponent', () => {
  let component: CsfInfoDestaqueComponent;
  let fixture: ComponentFixture<CsfInfoDestaqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CsfIconeModule],
      declarations: [ CsfInfoDestaqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsfInfoDestaqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
