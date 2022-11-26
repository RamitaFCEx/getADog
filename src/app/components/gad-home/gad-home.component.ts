import { Component, OnInit } from '@angular/core';
import { homeImg } from './homeImg';
@Component({
  selector: 'gad-home',
  templateUrl: './gad-home.component.html',
  styleUrls: ['./gad-home.component.css']
})
export class HomeComponent implements OnInit {
  urlStackblitz : String = "https://stackblitz.com/files/angular-ivy-wvdecs/github/RamitaFCEx/getADog/main/src/assets/img/";
  
  imagenes: homeImg[] = [
    {
      url: this.urlStackblitz + "dog4.jpg",
      titulo: "TEXTO IMG4",
      descripcion: "Descripcion IMG4"
    },
    {
      url: this.urlStackblitz + "dog3.jpg",
      titulo: "TEXTO IMG3",
      descripcion: "Descripcion IMG3"
    },
    {
      url: this.urlStackblitz + "dog2.jpg",
      titulo: "TEXTO IMG2",
      descripcion: "Descripcion IMG2"
    },
    {
      url: this.urlStackblitz + "dog.jpg",
      titulo: "TEXTO IMG1",
      descripcion: "Descripcion IMG1"
    }
  ]

  

  constructor() { }

  ngOnInit(): void {
  }

}
