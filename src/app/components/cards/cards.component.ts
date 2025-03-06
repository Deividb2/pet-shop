import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { matArrowRightAlt } from '@ng-icons/material-icons/baseline';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [CommonModule, NgIcon],
  providers: [provideIcons({ matArrowRightAlt })],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss'
})
export class CardsComponent {

  cards: ReadonlyArray<ICards> = [
    {
      imgSrc: "../../../assets/images/little-cat.jpg",
      title: "Gatos",
      subtitle: "Cheios de charme e de fofura, distribuem carinho por onde passam"
    },
    {
      imgSrc: "../../../assets/images/cat-dog2.jpg",
      title: "Filhotes",
      subtitle: "Sempre prontos para brincar e se aventurar com seu filho"
    },
    {
      imgSrc: "../../../assets/images/dog1.jpg",
      title: "Cachorros",
      subtitle: "Cães carinhos e amigos fiéis, perfeitos para famílias que adoram diversão"
    }
  ]

}

interface ICards {
  imgSrc: string
  title: string
  subtitle: string
}