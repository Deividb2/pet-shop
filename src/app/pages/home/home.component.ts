import { Component } from '@angular/core';

// Components
import { HeaderComponent } from "../../components/header/header.component";
import { BannerComponent } from "../../components/banner/banner.component";
import { RangeComponent } from "../../components/range/range.component";
import { CardsComponent } from "../../components/cards/cards.component";
import { AboutComponent } from "../../components/about/about.component";
import { ProductsComponent } from "../../components/products/products.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { ContactComponent } from "../../components/contact/contact.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    BannerComponent,
    RangeComponent,
    CardsComponent,
    AboutComponent,
    ProductsComponent,
    ContactComponent,
    FooterComponent
],
  template: `
    <app-header />
    <app-banner />
    <app-range />
    <app-cards />
    <app-about />
    <app-products />
    <app-contact />
    <app-footer />
  `
})

export class HomeComponent {}
