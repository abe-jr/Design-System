import { NgModule } from '@angular/core';

import {
  CsfCardComponent,
  CsfCardBotaoAcaoDirective,
  CsfCardAcoesDirective,
  CsfCardConteudoDirective,
  CsfCardHeaderComponent,
  CsfCardTituloComponent
} from './csf-card.component';
import { CsfTipografiaModule } from '../csf-tipografia/csf-tipografia.module';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    CsfTipografiaModule
  ],
  declarations: [
    CsfCardComponent,
    CsfCardBotaoAcaoDirective,
    CsfCardAcoesDirective,
    CsfCardConteudoDirective,
    CsfCardHeaderComponent,
    CsfCardTituloComponent
  ],
  exports: [
    CsfCardComponent,
    CsfCardBotaoAcaoDirective,
    CsfCardAcoesDirective,
    CsfCardConteudoDirective,
    CsfCardHeaderComponent,
    CsfCardTituloComponent
  ]
})
export class CsfCardModule {}
