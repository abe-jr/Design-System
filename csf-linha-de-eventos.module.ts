import { NgModule } from '@angular/core';
import { CsfLinhaDeEventosComponent } from './csf-linha-de-eventos.component';
import { CommonModule } from '@angular/common';
import { CsfIconeModule } from '../csf-icone/csf-icone.module';

@NgModule({
  imports: [
    CommonModule,
    CsfIconeModule
  ],
  declarations: [
    CsfLinhaDeEventosComponent,
  ],
  exports: [
    CsfLinhaDeEventosComponent,
  ]
})
export class CsfLinhaDeEventosModule { }
