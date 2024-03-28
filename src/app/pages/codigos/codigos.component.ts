import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodigoService } from '../../shared/services/codigo/codigo.service';
import { Router } from '@angular/router';
import {ButtonModule} from "primeng/button";
import {DialogModule} from "primeng/dialog";
import {ThemeSelectorComponent} from "../../components/theme-selector/theme-selector.component";

@Component({
  selector: 'app-codigos',
  standalone: true,
    imports: [
        ButtonModule,
        DialogModule,
        ThemeSelectorComponent
    ],
  templateUrl: './codigos.component.html',
  styleUrl: './codigos.component.scss'
})
export class CodigosComponent {
  codigos: any = [];
  visible: boolean = false; // variable para el dialog, prueba de primeNg

  constructor(private codigoService: CodigoService, private router: Router){

    /*codigoService.fetchAll().subscribe(responseData => {
      responseData.forEach((element: any) => {
        this.codigos.push(element);
      });
    })*/
  }

  showDialog() {
    this.visible = true;
  }

}
