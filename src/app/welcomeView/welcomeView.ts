import {Component} from '@angular/core';

@Component({
  selector: 'welcomeView',
  templateUrl: './welcomeView.html',
  styleUrls: ['./welcomeView.css']
})

export class welcomeView{
      title = 'Bienvenido a la aplicaciones';

      user = ['Juan', 'Miguel', 'Erick', 'Oswaldo', 'Jose', 'Ignacio'];
}
