import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-alerta-risco',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './alerta-risco.component.html',
  styleUrls: ['./alerta-risco.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlertaRiscoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onGerarRelatorio(): void {
    alert('Um relatório será gerado em breve.');
  }

  onDispensarAlerta(): void {
    alert('O alerta será dispensado.');
  }

}