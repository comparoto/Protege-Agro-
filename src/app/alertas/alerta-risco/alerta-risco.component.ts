import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-alerta-risco',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule

  ],
  templateUrl: './alerta-risco.component.html',
  styleUrls: ['./alerta-risco.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlertaRiscoComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onGerarRelatorio(): void {
  
    this.authService.baixarRelatorio('relatorio-alertas-por-risco.png');
  }

  onDispensarAlerta(): void {
    alert('O alerta será dispensado.');
  }

}