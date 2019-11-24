import { Component, Input, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'csf-icone',
  templateUrl: './csf-icone.component.html',
  styleUrls: ['./csf-icone.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class CsfIconeComponent {
  @Input() tamanho = '24px';
  @Input() cor: string | null = null;
  @Input() classes = '';
}
