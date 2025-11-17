import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-acompanhamento',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './acompanhamento.component.html',
  styleUrls: ['./acompanhamento.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AcompanhamentoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onGerarRelatorio(): void {
    alert('Um relatório será gerado em breve.');
  }

  onFazerUpload(): void {
    alert('A funcionalidade de upload será implementada em breve.');
  }

}