import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cultivos',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './cultivos.component.html', 
  styleUrls: ['./cultivos.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CultivosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onGerarRelatorio(): void {
    alert('Um relatório será gerado em breve.');
  }

  onFazerUpload(): void {
    alert('Seu upload será adicionado em breve.');
  }

}