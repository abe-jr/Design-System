import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  CsfListaComponent,
  CsfListaItemComponent,
  CsfListaItemDescricaoDirective,
  CsfListaItemIconeDireitaDirective,
  CsfListaItemIconeEsquerdaDirective,
  CsfListaItemSubtituloDirective,
  CsfListaItemTextoDirective,
  CsfListaItemTituloDirective,
  CsfListaLinkComponent
} from './csf-lista.component';
import { CsfIconeModule } from '../csf-icone/csf-icone.module';

@NgModule({
  declarations: [
    CsfListaComponent,
    CsfListaItemComponent,
    CsfListaItemDescricaoDirective,
    CsfListaItemIconeDireitaDirective,
    CsfListaItemIconeEsquerdaDirective,
    CsfListaItemSubtituloDirective,
    CsfListaItemTextoDirective,
    CsfListaItemTituloDirective,
    CsfListaLinkComponent,
  ],
  imports: [
    CsfIconeModule,
    CommonModule
  ],
  exports: [
    CsfListaComponent,
    CsfListaItemComponent,
    CsfListaItemDescricaoDirective,
    CsfListaItemIconeDireitaDirective,
    CsfListaItemIconeEsquerdaDirective,
    CsfListaItemSubtituloDirective,
    CsfListaItemTextoDirective,
    CsfListaItemTituloDirective,
    CsfListaLinkComponent
  ]
})
export class CsfListaModule { }
