import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'protege-agro';
  
  constructor(private router: Router) {}
  
  ngOnInit() {
    setTimeout(() => {
      console.log('Rotas configuradas:', this.router.config);
    }, 1000);
  }
}
