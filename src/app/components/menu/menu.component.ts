import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';

class Item {
  label: string;
  routerLink: string;
  activated: boolean;
}

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule,
    AvatarModule,
    AvatarGroupModule
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})


export class MenuComponent {
  items: Item[] = [];

  login = false;

  constructor(private router: Router) {

    router.events.subscribe(event => {

      if (event instanceof NavigationEnd) {

        let url = event.urlAfterRedirects;

        if (!url.includes('login') && !url.includes('signup') && !url.includes('changePassword')) {
          this.login = true;
        }

        console.log(url)

        if (this.login == true) {
          this.items = [
            { label: 'Códigos', routerLink: '/codigos', activated: false },
            { label: 'Explorar', routerLink: '/explore', activated: false }
          ]
        } else {
          this.items = [
            { label: 'Iniciar Sesión', routerLink: '/login', activated: false },
            { label: 'Registrarse', routerLink: '/signup', activated: false }
          ]
        }

        this.items.forEach((item: Item) => {
          if(item.routerLink == url){
            item.activated = true;
          }
        });

        console.log(this.items)
      }

    })


  }

  navigate(link: string){
    this.router.navigate([link]);
  }
}
