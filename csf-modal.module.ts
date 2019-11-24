import { NgModule } from '@angular/core';
import { CsfModalComponent, CsfModalTituloComponent, CsfModalConteudoComponent, CsfModalAcoesComponent } from './csf-modal.component';
import { CsfTipografiaModule } from '../csf-tipografia/csf-tipografia.module';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    CsfTipografiaModule
  ],
  declarations: [
    CsfModalComponent,
    CsfModalTituloComponent,
    CsfModalConteudoComponent,
    CsfModalAcoesComponent,
  ],
  exports: [
    CsfModalComponent,
    CsfModalTituloComponent,
    CsfModalConteudoComponent,
    CsfModalAcoesComponent
  ]
})
export class CsfModalModule {}
