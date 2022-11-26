import { Component, OnInit } from '@angular/core';
import { homeImg } from './homeImg';
@Component({
  selector: 'gad-home',
  templateUrl: './gad-home.component.html',
  styleUrls: ['./gad-home.component.css']
})
export class HomeComponent implements OnInit {

  imagenes: homeImg[] = [
    {
      url: "../../../assets/img/dog4.jpg",
      titulo: "TEXTO IMG4",
      descripcion: "Descripcion IMG4"
    },
    {
      url: "../../../assets/img/dog3.jpg",
      titulo: "TEXTO IMG3",
      descripcion: "Descripcion IMG3"
    },
    {
      url: "../../../assets/img/dog2.jpg",
      titulo: "TEXTO IMG2",
      descripcion: "Descripcion IMG2"
    },
    {
      url: "../../../assets/img/dog.jpg",
      titulo: "TEXTO IMG1",
      descripcion: "Descripcion IMG1"
    }
  ]

  

  constructor() { }

  ngOnInit(): void {
  }

}
