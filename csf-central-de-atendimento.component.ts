import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'csf-central-de-atendimento',
  templateUrl: './csf-central-de-atendimento.component.html',
  styleUrls: ['./csf-central-de-atendimento.component.scss']
})
export class CsfCentralDeAtendimentoComponent {
  @Input() classes = '';
}
