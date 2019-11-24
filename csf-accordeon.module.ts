import { NgModule } from '@angular/core';
import {
  CsfAccordeonComponent,
  CsfAccordeonDescricaoDirective,
  CsfAccordeonHeaderDirective
} from './csf-accordeon.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CsfAccordeonComponent,
    CsfAccordeonDescricaoDirective,
    CsfAccordeonHeaderDirective
  ],
  exports: [
    CsfAccordeonComponent,
    CsfAccordeonDescricaoDirective,
    CsfAccordeonHeaderDirective
  ]
})
export class CsfAccordeonModule { }
