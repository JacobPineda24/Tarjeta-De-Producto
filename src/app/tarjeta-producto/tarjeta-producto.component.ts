import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tarjeta-producto',
  standalone: true,
  templateUrl: './tarjeta-producto.component.html',
  styleUrls: ['./tarjeta-producto.component.scss']
})
export class TarjetaProductoComponent {
  @Input() producto: any;
}
