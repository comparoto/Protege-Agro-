import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-galeria',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GaleriaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}