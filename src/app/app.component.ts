import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'getADog';

  navegar(seccion: String){
    document.querySelectorAll(".nav-link").forEach(elemento => {
      elemento.classList.remove("actual");
    });
    document.querySelector("#"+seccion)?.classList.add("actual");
  }

}
