import { Component, OnInit } from '@angular/core';
import { Articulo } from "../../models/Articulo";
@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.scss']
})
export class ArticuloComponent implements OnInit {
  lista_articulos: Articulo[] = new Array();

  constructor() {
    let p1:Articulo = new Articulo(1, "The Last of US", "Sobrevive a los zombis y a la humanidad.", "Estándar", 1, 60.50);
    let p2:Articulo = new Articulo(2, "Spider Man", "Balancéate sobre Manhatan", "Coleccionista", 1, 80.00);
    let p3:Articulo = new Articulo(3, "WoW: Shadowlands", "El velo entre los vivos y los muertos ya no existe", "Estándar", 1, 35.50);
    this.lista_articulos.push(p1, p2, p3);
   }

  ngOnInit(): void {
  }

}
