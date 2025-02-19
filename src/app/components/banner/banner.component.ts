import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { matArrowRight, matArrowRightAlt } from '@ng-icons/material-icons/baseline';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [NgIcon],
  providers: [provideIcons({ matArrowRightAlt })],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss'
})
export class BannerComponent {

}
