import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { matHandshakeOutline, matContentCutOutline, matPersonPinOutline, matForumOutline } from '@ng-icons/material-icons/outline';

@Component({
  selector: 'app-benefits',
  standalone: true,
  imports: [CommonModule, NgIcon],
  providers: [provideIcons({ matHandshakeOutline, matContentCutOutline, matPersonPinOutline, matForumOutline })],
  templateUrl: './benefits.component.html',
  styleUrl: './benefits.component.scss'
})
export class BenefitsComponent {
  benefitsData: ReadonlyArray<{ iconName: string, title: string, text: string }> = [
    {
      iconName: "matHandshakeOutline",
      title: "21 Anos de Experiência",
      text: "Desde 2003, cuidando do bem-estar dos pets com carinho e profissionalismo."
    },
    {
      iconName: "matContentCutOutline",
      title: "Banho e Tosa Sem Estresse",
      text: "Técnicas que garantem um ambiente tranquilo e confortável para seu pet."
    },
    {
      iconName: "matPersonPinOutline",
      title: "Veterinários Especializados",
      text: "Atendimento de alta qualidade, com consultas, exames e cirurgias."
    },
    {
      iconName: "matForumOutline",
      title: "Atendimento Personalizado",
      text: "Cada pet é único, e nosso serviço é pensado para atender suas necessidades."
    }
  ]
}
