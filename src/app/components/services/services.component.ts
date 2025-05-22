import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { matWhatsapp } from '@ng-icons/material-icons/baseline';
import { matContentCutOutline, matPetsOutline, matForumOutline } from '@ng-icons/material-icons/outline';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, NgIcon],
  providers: [provideIcons({ matWhatsapp, matContentCutOutline, matPetsOutline, matForumOutline })],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  serviceDatas: ReadonlyArray<{ iconName: string, title: string, text: string }> = [
    {
      iconName: "matContentCutOutline",
      title: "Banho e Tosa",
      text: "Higiene completa com técnicas cuidadosas, atendimento sem estresse e hidratação especial para deixar seu pet limpo, cheiroso e confortável."
    },
    {
      iconName: "matPetsOutline",
      title: "Pet Shop",
      text: "Uma seleção especial de brinquedos, acessórios, petiscos naturais e itens essenciais para o dia a dia do seu pet, garantindo qualidade e diversão."
    },
    {
      iconName: "matForumOutline",
      title: "Veterinária",
      text: "Atendimento especializado com consultas, exames e procedimentos para cuidar da saúde do seu pet com dedicação e profissionalismo."
    }
  ]
}
