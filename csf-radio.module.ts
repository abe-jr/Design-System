import { NgModule } from '@angular/core';
import { CsfRadioComponent, CsfRadioGrupoDirective } from './csf-radio.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CsfRadioGrupoDirective,
    CsfRadioComponent,
  ],
  exports: [
    CsfRadioGrupoDirective,
    CsfRadioComponent,
  ]
})
export class CsfRadioModule { }

