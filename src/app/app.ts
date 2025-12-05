import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TarjetaProductoComponent } from './tarjeta-producto/tarjeta-producto.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TarjetaProductoComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-producto');

  productoDemo1 = {
    titulo: 'Laptop HP',
    descripcion: 'Laptop ligera con Ryzen 5 y 16GB RAM.',
    precio: 18999,
    imagenUrl: 'https://tse2.mm.bing.net/th/id/OIP.UBBgvsSPq6sjmoIIYPBqpwHaFc?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3'
  };

  productoDemo2 = {
    titulo: 'Pantalla Smart TV',
    descripcion: 'Pntalla 65" 4K UHD con HDR.',
    precio: 24999,
    imagenUrl: 'https://m.media-amazon.com/images/I/71wk93yQvkL._AC_.jpg'
  };

  productoDemo3 = {
    titulo: 'Consola ´PlayStation 5´',
    descripcion: 'Consola de última generación con juegos exclusivos.',
    precio: 14999,
    imagenUrl: 'https://i5.walmartimages.com/asr/8c4722af-f1c3-446e-8692-71f7151c5a61.3929f25755047fecc24e9b5eb2797534.jpeg'
  };
}
