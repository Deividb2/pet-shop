import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { matArrowRightAlt } from '@ng-icons/material-icons/baseline';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [NgIcon],
  providers: [provideIcons({ matArrowRightAlt })],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {

  products: ReadonlyArray<IProducts> = [
    {
      name: "Comida para gatos 50g",
      oldPrice: "69,90",
      price: "59,90",
      imgSrc: "../../../assets/images/produtos/cat-food.jpg"
    },
    {
      name: "Transportador de pets",
      oldPrice: "120,00",
      price: "98,90",
      imgSrc: "../../../assets/images/produtos/pet-carrier.jpg"
    },
    {
      name: "Caminha para cachorros",
      oldPrice: "150,00",
      price: "90,00",
      imgSrc: "../../../assets/images/produtos/dog-bed.jpg"
    },
    {
      name: "Brinquedos para seus pets",
      oldPrice: "49,90",
      price: "39,90",
      imgSrc: "../../../assets/images/produtos/animal-toys.jpg"
    }
  ]
  
}

interface IProducts {
  name: string
  oldPrice: string
  price: string
  imgSrc: string
}
