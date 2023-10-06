import { HtmlParser } from '@angular/compiler';
import {Component} from '@angular/core';

@Component({
  selector: 'welcomeView',
  templateUrl: './welcomeView.html',
  styleUrls: ['./welcomeView.css']
})

export class welcomeView{
      title: string = 'Bienvenido a la aplicaciones';

      userArray = ['Juan', 'Miguel', 'Erick', 'Jose', 'Ignacio'];

      saludoUser(datoNombre: HTMLInputElement){
      console.log(datoNombre.value);
        return false;
      }

      sumaNumber(dataNumber: HTMLInputElement) {
        alert(dataNumber.value);
      }
}
