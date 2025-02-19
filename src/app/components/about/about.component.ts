import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { matArrowRightAlt } from '@ng-icons/material-icons/baseline';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NgIcon],
  providers: [provideIcons({ matArrowRightAlt })],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

}
