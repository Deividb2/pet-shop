import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core'
import { matClose, matMenu } from '@ng-icons/material-icons/baseline'


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgIcon],
  providers: [provideIcons({ matMenu, matClose })],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  iconName: string = 'matMenu'
  menu: boolean = false

  hendleMenu() {
    this.menu = !this.menu
    this.menu ? this.iconName = 'matClose' : this.iconName = 'matMenu'
  }
}
