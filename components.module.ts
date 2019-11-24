import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule, DatePipe, CurrencyPipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { IFormatadorService, FormatadorService } from 'csf-lib-formatador';
import {
  IClienteService,
  ClienteService
} from 'csf-canais-digitais-lib-cliente';
import { ICacheService, CacheService } from 'csf-canais-digitais-lib-cache';
import { NgxCurrencyModule } from 'ngx-currency';
import { DinheiroModule } from './components/dinheiro/dinheiro.module';
import { SpinnerButtonComponent } from './components/loader/spinner-button/spinner-button.component';
import { SpinnerGraphicComponent } from './components/loader/spinner-graphic/spinner-graphic.component';
import { LogotipoComponent } from './components/logotipo/logotipo.component';
import { ServicoIndisponivelComponent } from './components/servico-indisponivel/servico-indisponivel.component';
import { CsfBotaoComponent } from './components/csf-botao/csf-botao.component';
import {
  CsfCampoFormComponent,
  CsfInputDirective,
  CsfCampoFormAcaoComponent
} from './components/csf-input/csf-input.component';
import { CsfCheckboxComponent } from './components/csf-checkbox/csf-checkbox.component';
import { CsfCardModule } from './components/csf-card/csf-card.module';
import { CsfIconeModule } from './components/csf-icone/csf-icone.module';
import { CsfListaModule } from './components/csf-lista/csf-lista.module';
import { CsfTabsModule } from './components/csf-tabs/csf-tabs.module';
import { CsfBarraDeProgressoComponent } from './components/csf-barra-de-progresso/csf-barra-de-progresso.component';
import { CsfSenhaComponent } from './components/csf-senha/csf-senha.component';
import { CsfLinhaDeEventosModule } from './components/csf-linha-de-eventos/csf-linha-de-eventos.module';
import { CsfAccordeonModule } from './components/csf-accordeon/csf-accordeon.module';
import { CsfBoxInformacoesComponent } from './components/csf-box-informacoes/csf-box-informacoes.component';
import { CsfCentralDeAtendimentoComponent } from './components/csf-central-de-atendimento/csf-central-de-atendimento.component';
import { CsfInputDinheiroComponent } from './components/csf-input-dinheiro/csf-input-dinheiro.component';
import { DinheiroPipe } from './pipes/dinheiro.pipe';
import { CsfInfoDestaqueComponent } from './components/csf-info-destaque/csf-info-destaque.component';
import { CsfInfoTituloValorComponent } from './components/csf-info-titulo-valor/csf-info-titulo-valor.component';
import { CsfQuantidadeParcelasComponent } from './components/csf-quantidade-parcelas/csf-quantidade-parcelas.component';
import { CsfRadioModule } from './components/csf-radio/csf-radio.module';
import {
  CsfCarrosselComponent,
  CsfCarrosselItemComponent
} from './components/csf-carrossel/csf-carrossel.component';
import { CsfCabecalhoComponent } from './components/csf-cabecalho/csf-cabecalho.component';
import { CsfModalModule } from './components/csf-modal/csf-modal.module';
import { CsfTipografiaModule } from './components/csf-tipografia/csf-tipografia.module';
import { CsfMascaraTelefoneDirective } from './directives/MascaraTelefone.directive';
import { CsfMascaraCPFDirective } from './directives/MascaraCPF.directive';
import { CsfLoaderPaginaComponent } from './components/csf-loader-pagina/csf-loader-pagina.component';
import { CsfTransicaoRotaComponent } from './components/csf-transicao-rota/csf-transicao-rota.component';
import { CsfCabecalhoService } from './components/csf-cabecalho/csf-cabecalho.service';
import { SanitizeHtmlPipe } from './pipes/sanitizeHTML.pipe';
import { CsfSeguroDesempregoComponent } from './components/csf-seguro-desemprego/csf-seguro-desemprego.component';

@NgModule({
  declarations: [
    SpinnerButtonComponent,
    SpinnerGraphicComponent,
    LogotipoComponent,
    ServicoIndisponivelComponent,
    CsfBotaoComponent,
    CsfCampoFormComponent,
    CsfInputDirective,
    CsfCampoFormAcaoComponent,
    CsfCheckboxComponent,
    CsfBarraDeProgressoComponent,
    CsfSenhaComponent,
    CsfBoxInformacoesComponent,
    CsfCentralDeAtendimentoComponent,
    CsfInputDinheiroComponent,
    DinheiroPipe,
    SanitizeHtmlPipe,
    CsfInfoDestaqueComponent,
    CsfInfoTituloValorComponent,
    CsfQuantidadeParcelasComponent,
    CsfCarrosselComponent,
    CsfCarrosselItemComponent,
    CsfCabecalhoComponent,
    CsfMascaraTelefoneDirective,
    CsfMascaraCPFDirective,
    CsfLoaderPaginaComponent,
    CsfTransicaoRotaComponent,
    CsfSeguroDesempregoComponent
  ],
  imports: [
    CommonModule,
    CsfCardModule,
    CsfIconeModule,
    CsfListaModule,
    CsfTabsModule,
    CsfLinhaDeEventosModule,
    CsfAccordeonModule,
    DinheiroModule,
    FormsModule,
    NgxCurrencyModule,
    HttpClientModule,
    CsfRadioModule,
    CsfModalModule,
    CsfTipografiaModule
  ],
  providers: [
    { provide: IFormatadorService, useClass: FormatadorService },
    { provide: IClienteService, useClass: ClienteService },
    { provide: ICacheService, useClass: CacheService },
    DatePipe,
    CurrencyPipe,
    CsfCabecalhoService
  ],
  exports: [
    SpinnerButtonComponent,
    SpinnerGraphicComponent,
    LogotipoComponent,
    ServicoIndisponivelComponent,
    CsfBotaoComponent,
    CsfCampoFormComponent,
    CsfInputDirective,
    CsfCampoFormAcaoComponent,
    CsfCheckboxComponent,
    CsfCardModule,
    CsfIconeModule,
    CsfListaModule,
    CsfTabsModule,
    CsfBarraDeProgressoComponent,
    CsfSenhaComponent,
    CsfLinhaDeEventosModule,
    CsfAccordeonModule,
    CsfBoxInformacoesComponent,
    CsfCentralDeAtendimentoComponent,
    CsfInputDinheiroComponent,
    DinheiroModule,
    CsfInfoDestaqueComponent,
    CsfInfoTituloValorComponent,
    CsfQuantidadeParcelasComponent,
    CsfRadioModule,
    CsfCarrosselComponent,
    CsfCarrosselItemComponent,
    CsfCabecalhoComponent,
    CsfModalModule,
    CsfTipografiaModule,
    CsfMascaraTelefoneDirective,
    CsfMascaraCPFDirective,
    CsfLoaderPaginaComponent,
    CsfTransicaoRotaComponent,
    CsfSeguroDesempregoComponent
  ]
})
export class ComponentsModule {}
