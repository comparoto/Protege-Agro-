import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-acompanhamento',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './acompanhamento.component.html',
  styleUrls: ['./acompanhamento.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AcompanhamentoComponent implements OnInit {


  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onGerarRelatorio(): void {

    this.authService.baixarRelatorio('relatorio-acompanhamento-de-eficacia.png');
  }

  onFazerUpload(): void {
    alert('Seu upload será adicionado em breve.');
  }

}