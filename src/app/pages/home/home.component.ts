import { Component } from '@angular/core';

// Components
import { HeaderComponent } from "../../components/header/header.component";
import { BannerComponent } from "../../components/banner/banner.component";
import { RangeComponent } from "../../components/range/range.component";
import { CardsComponent } from "../../components/cards/cards.component";
import { AboutComponent } from "../../components/about/about.component";
import { ProductsComponent } from "../../components/products/products.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { FeedbackComponent } from "../../components/feedback/feedback.component";
import { ServicesComponent } from "../../components/services/services.component";
import { BenefitsComponent } from "../../components/benefits/benefits.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    BannerComponent,
    RangeComponent,
    CardsComponent,
    ServicesComponent,
    BenefitsComponent,
    AboutComponent,
    ProductsComponent,
    FeedbackComponent,
    FooterComponent
],
  template: `
    <app-header />
    <app-banner />
    <app-range />
    <app-cards id="services" />
    <app-services />
    <app-benefits />
    <app-about id="about" />
    <app-products id="products" />
    <app-feedback />
    <app-footer id="contact" />
  `
})

export class HomeComponent {}
