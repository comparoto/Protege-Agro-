import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from '../auth.service'; 

@Component({
  selector: 'app-template',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule 
  ],
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css'], 
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TemplateComponent implements OnInit {
  userName: string = '';
  isDashboardOpen: boolean = false; 
  isGestaoOpen: boolean = false; 
  isAlertaOpen: boolean = false; 

  constructor(
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.userName = this.authService.getNomeUsuario();
  }

  toggleDashboardSubmenu(event: MouseEvent): void {
    event.preventDefault(); 
    const newState = !this.isDashboardOpen; 
    this.isDashboardOpen = false; 
    this.isGestaoOpen = false; 
    this.isAlertaOpen = false;
    this.isDashboardOpen = newState; 
  }

  toggleGestaoSubmenu(event: MouseEvent): void {
    event.preventDefault(); 
    const newState = !this.isGestaoOpen; 
    this.isDashboardOpen = false; 
    this.isGestaoOpen = false; 
    this.isAlertaOpen = false; 
    this.isGestaoOpen = newState; 
  }

  toggleAlertaSubmenu(event: MouseEvent): void {
    event.preventDefault();
    const newState = !this.isAlertaOpen; 
    this.isDashboardOpen = false;
    this.isGestaoOpen = false;
    this.isAlertaOpen = newState;
  }
}