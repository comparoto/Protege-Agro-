import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

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

  constructor() { }

  ngOnInit(): void {
  }

  onGerarRelatorio(): void {
    alert('Um relatório será gerado em breve.');
  }

}