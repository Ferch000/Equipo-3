import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  productos = [
    {
      nombre: 'Mesa de Roble',
      precio: 350.00,
      descripcion: 'Mesa sólida de roble, perfecta para el comedor.',
      imagen: 'assets/productos/mesa-roble.jpg',
    },
    {
      nombre: 'Silla de Pino',
      precio: 80.00,
      descripcion: 'Silla de madera de pino, cómoda y resistente.',
      imagen: 'assets/productos/silla-pino.jpg',
    },
    {
      nombre: 'Estantería de Cedro',
      precio: 120.00,
      descripcion: 'Estantería de cedro ideal para la oficina o el salón.',
      imagen: 'assets/productos/estanteria-cedro.jpg',
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
