import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-intervencoes',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './intervencoes.component.html',
  styleUrls: ['./intervencoes.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IntervencoesComponent implements OnInit {

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