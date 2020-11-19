export class Articulo {
    id: number;
    nombre: string;
    descripcion: string;
    modelo: string;
    cantidad: number;
    precioOriginal: number;
    //precioRebajado: number;

    constructor(id, nombre, descripcion, modelo, cantidad = 1, precioOriginal){
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.modelo = modelo;
        this.cantidad = cantidad;
        this.precioOriginal = precioOriginal;
    }
}

