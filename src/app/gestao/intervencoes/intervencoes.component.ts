import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../auth.service';

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


  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onGerarRelatorio(): void {
   
    this.authService.baixarRelatorio('relatorio-intervencoes.png');
  }

  onFazerUpload(): void {
    alert('Seu upload será adicionado em breve.');
  }

}