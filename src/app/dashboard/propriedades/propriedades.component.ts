import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-propriedades',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './propriedades.component.html',
  styleUrls: ['./propriedades.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PropriedadesComponent {

  constructor() { }

  onGerarRelatorio(): void {
    alert('Um relatório será gerado em breve.');
  }

  onFazerUpload(): void {
    alert('A função de upload será implementada em breve.');
  }

}