import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-praticas',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './praticas.component.html',
  styleUrls: ['./praticas.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PraticasComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onGerarRelatorio(): void {
   
    this.authService.baixarRelatorio('relatorio-boas-praticas.png');
  }

  onFazerUpload(): void {
    alert('Seu upload será adicionado em breve.');
  }

}