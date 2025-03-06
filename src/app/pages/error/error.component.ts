import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-error',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="error-page">
      <h2>Página não encontrada ):</h2>
      <a routerLink="/">Voltar para página principal</a>
    </div>
  `,
  styles: `
    .error-page {
      display: flex;
      flex-direction: column; 
      align-items: center;
      justify-content: center;
      gap: 2rem;
      min-height: 100vh;
      background-color: #3F3F3F;

      h2 {
        font-size: 2rem;
        color: #00AEEF;
      }

      a {
        background-color: #F04D23;
        color: #fff;
        padding: 1rem 1.5rem; 
        border-radius: 1rem;
      }
    }
  
  `
})
export class ErrorComponent {

}
