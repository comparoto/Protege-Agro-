import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-sms',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './sms.component.html',
  styleUrls: ['./sms.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SmsComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onGerarRelatorio(): void {
   
    this.authService.baixarRelatorio('relatorio-ultimos-sms.png');
  }

}