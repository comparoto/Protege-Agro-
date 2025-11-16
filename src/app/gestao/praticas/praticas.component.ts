import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-praticas',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './praticas.component.html',
  styleUrls: ['./praticas.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PraticasComponent implements OnInit {

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