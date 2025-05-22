import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { matStar, matMarkUnreadChatAlt } from '@ng-icons/material-icons/baseline';

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [CommonModule, NgIcon],
  providers: [provideIcons({ matStar, matMarkUnreadChatAlt })],
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.scss'
})
export class FeedbackComponent {
  feedbacks: ReadonlyArray<{ name: string, text: string, lengthStars: number }> = [
    {
      name: "Julia Oliveira",
      text: "Maravilhosos! Meu cachorro foi fazer uma tosa higiênica + tomar banho pela primeira vez fora de casa e voltou limpinho e cheiroso!",
      lengthStars: 5
    },
    {
      name: "Larissa Alonso",
      text: "Local ótimo, sempre levo meu cachorro lá. Super atenciosos e ainda buscam em casa. Obrigada a todos pelo carinho",
      lengthStars: 4
    },
    {
      name: "Mary Alves",
      text: "Excelente, cuidar bem do meu Dog , tosa deles é excelente Equipe maravilhosa , indico sempre !",
      lengthStars: 5
    },
    {
      name: "Valeria Moreira",
      text: "Como sempre eles se superam no quesito Profissionalismo. Super indico. Eu amei a atenção e o cuidado com meu Luke",
      lengthStars: 4
    }
  ]
}
