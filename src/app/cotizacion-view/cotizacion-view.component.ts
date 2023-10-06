import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cotizacion-view',
  templateUrl: './cotizacion-view.component.html',
  styleUrls: ['./cotizacion-view.component.css']
})

export class CotizacionViewComponent  {
 @Input() usersName!: string;
}
