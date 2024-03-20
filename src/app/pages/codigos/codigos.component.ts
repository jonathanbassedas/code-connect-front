import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodigoService } from '../../shared/services/codigo/codigo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-codigos',
  standalone: true,
  imports: [],
  templateUrl: './codigos.component.html',
  styleUrl: './codigos.component.scss'
})
export class CodigosComponent {

  codigos: any = [];

  constructor(private codigoService: CodigoService, private router: Router){

    /*codigoService.fetchAll().subscribe(responseData => {
      responseData.forEach((element: any) => {
        this.codigos.push(element);
      });
    })*/
  }

}
