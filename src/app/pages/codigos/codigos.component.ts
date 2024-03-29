import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodigoService } from '../../shared/services/codigo/codigo.service';
import { Router } from '@angular/router';
import { ButtonModule } from "primeng/button";
import { DialogModule } from "primeng/dialog";
import { DataViewModule } from 'primeng/dataview';
import { CardModule } from 'primeng/card';
import { ThemeSelectorComponent } from "../../components/theme-selector/theme-selector.component";

@Component({
  selector: 'app-codigos',
  standalone: true,
  imports: [
    ButtonModule,
    DialogModule,
    DataViewModule,
    CardModule,
    ThemeSelectorComponent,
    CommonModule
  ],
  templateUrl: './codigos.component.html',
  styleUrl: './codigos.component.scss'
})
export class CodigosComponent {
  codigos: any = []
  visible: boolean = false; // variable para el dialog, prueba de primeNg

  constructor(private codigoService: CodigoService, private router: Router) {

    this.codigos = [{
      "id": 1,
      "name": "Algernon",
      "description": "Restriction of Left Upper Extremity Lymphatic, Open Approach",
      "image": "http://dummyimage.com/202x100.png/5fa2dd/ffffff",
      "date": "9/15/2023"
    }, {
      "id": 2,
      "name": "Eva",
      "description": "Restriction of Esophagus with Intraluminal Device, Percutaneous Approach",
      "image": "http://dummyimage.com/162x100.png/ff4444/ffffff",
      "date": "3/27/2024"
    }, {
      "id": 3,
      "name": "Krishnah",
      "description": "Removal of External Fixation Device from Right Metacarpal, Percutaneous Approach",
      "image": "http://dummyimage.com/109x100.png/dddddd/000000",
      "date": "1/7/2024"
    }, {
      "id": 4,
      "name": "Kort",
      "description": "Restriction of Left Lower Extremity Lymphatic with Extraluminal Device, Percutaneous Approach",
      "image": "http://dummyimage.com/136x100.png/ff4444/ffffff",
      "date": "3/25/2024"
    }, {
      "id": 5,
      "name": "Deeann",
      "description": "Drainage of Middle Esophagus, Via Natural or Artificial Opening",
      "image": "http://dummyimage.com/123x100.png/dddddd/000000",
      "date": "12/4/2023"
    }, {
      "id": 6,
      "name": "Alyda",
      "description": "Supplement Left Lower Extremity with Nonautologous Tissue Substitute, Percutaneous Endoscopic Approach",
      "image": "http://dummyimage.com/170x100.png/cc0000/ffffff",
      "date": "2/18/2024"
    }, {
      "id": 7,
      "name": "Jon",
      "description": "Repair Right Little Finger, Percutaneous Endoscopic Approach",
      "image": "http://dummyimage.com/214x100.png/cc0000/ffffff",
      "date": "3/25/2024"
    }, {
      "id": 8,
      "name": "Maddy",
      "description": "Dilation of Right External Carotid Artery with Three Drug-eluting Intraluminal Devices, Percutaneous Approach",
      "image": "http://dummyimage.com/200x100.png/cc0000/ffffff",
      "date": "7/14/2023"
    }, {
      "id": 9,
      "name": "Sascha",
      "description": "Restriction of Left Basilic Vein with Intraluminal Device, Percutaneous Approach",
      "image": "http://dummyimage.com/238x100.png/5fa2dd/ffffff",
      "date": "7/27/2023"
    }, {
      "id": 10,
      "name": "Roseline",
      "description": "Dilation of Left Hand Artery with Four or More Drug-eluting Intraluminal Devices, Percutaneous Endoscopic Approach",
      "image": "http://dummyimage.com/117x100.png/ff4444/ffffff",
      "date": "7/13/2023"
    }]

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
