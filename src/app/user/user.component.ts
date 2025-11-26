import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../auth.service';
import { RouterModule } from '@angular/router'; 

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule 
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css', 
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserComponent implements OnInit {
  userName: string = '';

  constructor(
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.userName = this.authService.getNomeUsuario();
  }

  onGerarRelatorio(): void {
  
    this.authService.baixarRelatorio('relatorio-geral.png');
  }
}