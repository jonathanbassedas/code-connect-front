import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodigoService } from '../../shared/services/codigo/codigo.service';
import { Router } from '@angular/router';
import {ButtonModule} from "primeng/button";
import {DialogModule} from "primeng/dialog";
import {ThemeSelectorComponent} from "../../components/theme-selector/theme-selector.component";
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-codigos',
  standalone: true,
    imports: [
        ButtonModule,
        DialogModule,
        ThemeSelectorComponent,
        CardModule
    ],
  templateUrl: './codigos.component.html',
  styleUrl: './codigos.component.scss'
})
export class CodigosComponent {
  codigos: any = [

    {palabraClave: 'CENA', descripcion: 'Juego Memory San Valentin', lenguajes: 'HTML, CSS y JavaScript', fecha: '12/02/2024', rutaImagen: 'https://i.postimg.cc/prRK2r8d/Cena.png'},
    {palabraClave: 'PLANES', descripcion: 'Elige un corazón para escoger plan', lenguajes: 'HTML, CSS', fecha: '10/02/2024', rutaImagen: 'https://i.postimg.cc/nr2BMxYG/letras.png'},
    {palabraClave: 'LETRAS', descripcion: 'Juego del ahorcado con palabras relacionadas con el regalo', lenguajes: 'HTML, CSS y JavaScript', fecha: '09/02/2024', rutaImagen: 'https://i.postimg.cc/1Rrpv0hV/planes.png'},
    {palabraClave: 'LETRAS', descripcion: 'Juego del ahorcado con palabras relacionadas con el regalo', lenguajes: 'HTML, CSS y JavaScript', fecha: '09/02/2024', rutaImagen: 'https://i.postimg.cc/1Rrpv0hV/planes.png'},
    {palabraClave: 'LETRAS', descripcion: 'Juego del ahorcado con palabras relacionadas con el regalo', lenguajes: 'HTML, CSS y JavaScript', fecha: '09/02/2024', rutaImagen: 'https://i.postimg.cc/1Rrpv0hV/planes.png'},
    {palabraClave: 'LETRAS', descripcion: 'Juego del ahorcado con palabras relacionadas con el regalo fdasf ', lenguajes: 'HTML, CSS y JavaScript', fecha: '09/02/2024', rutaImagen: 'https://i.postimg.cc/1Rrpv0hV/planes.png'},
    {palabraClave: 'LETRAS', descripcion: 'Juego del ahorcado con palabras relacionadas con el regalo', lenguajes: 'HTML, CSS y JavaScript', fecha: '09/02/2024', rutaImagen: 'https://i.postimg.cc/1Rrpv0hV/planes.png'}

  ];
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
