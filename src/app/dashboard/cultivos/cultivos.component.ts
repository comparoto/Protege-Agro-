import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../auth.service';

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


  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onGerarRelatorio(): void {
    
    this.authService.baixarRelatorio('relatorio-indicadores-de-vulnerabilidade-por-cultivos.png');
  }

  onFazerUpload(): void {
    alert('Seu upload será adicionado em breve.');
  }

}