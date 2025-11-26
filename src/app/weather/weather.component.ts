import { Component, Input, OnInit, ChangeDetectorRef } from '@angular/core'; // <--- 1. Importe aqui
import { CommonModule } from '@angular/common'; 
import { WeatherService } from '../weather'; 

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  @Input() cidade: string = 'São Paulo'; 
  dadosClima: any;

  // 2. Adicione o 'private cdr: ChangeDetectorRef' aqui dentro dos parênteses
  constructor(private weatherService: WeatherService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    if(!this.cidade) this.cidade = 'Sorriso';
    this.carregarClima(this.cidade);
  }

  carregarClima(cidade: string) {
    this.weatherService.buscarClima(cidade).subscribe({
      next: (dados) => {
        console.log("DADOS CHEGARAM:", dados);
        this.dadosClima = dados;
        
        // 3. O CUTUCÃO MÁGICO:
        this.cdr.detectChanges(); 
      },
      error: (e) => {
        console.error("ERRO:", e);
      }
    });
  }
}