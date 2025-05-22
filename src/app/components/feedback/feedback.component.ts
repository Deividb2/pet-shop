import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { matStar } from '@ng-icons/material-icons/baseline';

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [CommonModule, NgIcon],
  providers: [provideIcons({ matStar })],
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.scss'
})
export class FeedbackComponent {
  feedbacks: ReadonlyArray<{ name: string, text: string, lengthStars: number }> = [
    {
      name: "Lula",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam corporis at esse harum, labore voluptatum.",
      lengthStars: 5
    },
    {
      name: "Bolsonaro",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam corporis at esse harum, labore voluptatum.",
      lengthStars: 4
    },
    {
      name: "Chaves",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam corporis at esse harum, labore voluptatum.",
      lengthStars: 5
    },
    {
      name: "Nego Ney",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam corporis at esse harum, labore voluptatum.",
      lengthStars: 4
    },
    {
      name: "The king the power",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam corporis at esse harum, labore voluptatum.",
      lengthStars: 5
    },
  ]
}
