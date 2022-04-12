import { Component } from '@angular/core';
import{ReciboCompraPage } from 'src/app/recibo-compra/recibo-compra.page'
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  arte: string;
  labelDescripcion:string;
  ocultarUno: boolean     = false;
  valor:number;
  descripcion:string="";
  nombre:string="";
  item={
    id:0,
    numeracion:1,
    nombre:"" ,
    descripcion:"",
    valor:0,
    src:"",
    estado:"",
  }
  listaVestimentaArtezanal=[
    {
      id:1,
      numeracion:1,
      nombre:"Mochilas",
      descripcion:"Las Mochilas son bolsos tejidos por las mujeres de la comunidad Wayuu que vive en La Guajira, la península más oriental de América Latina. Estas coloridas y únicas confecciones hechas a mano requieren casi 25 días de tejido",
      valor:35000,
      src:"../../assets/Img/imagenesArtezanales_1.jpg",
      estado:'vestimenta'
    },
    {
      id:4,
      numeracion:2,
      nombre:"El sombrero",
      descripcion:"Uno de los símbolos artesanales más conocidos de Colombia, es elaborado por la comunidad Zenú. Mediante un complejo proceso tradicional se extraen y transforman las fibras naturales de la palmera «caña flecha» en patrones blancos y negros que representan los elementos totémicos de la comunidad zenú",
      valor:25000,
      src:"../../assets/Img/imagenesArtezanales_4.jpg",
      estado:'vestimenta'
    },
    {
      id:6,
      numeracion:3,
      nombre:"Ponchos",
      descripcion:"El poncho es una prenda típica latinoamericana con un diseño sencillo en forma de rectángulo y un agujero en la cabeza, sin mangas para facilitar el movimiento.",
      valor:40000,
      src:"../../assets/Img/imagenesArtezanales_6.jpg",
      estado:'vestimenta'
    },
    
    {
      id:7,
      numeracion:4,
      nombre:"Alpargatas",
      descripcion:"Las alpargatas son zapatos de lona ligeros con suela de cuerda. Cómoda e ideal para el clima cálido.",
      valor:28000,
      src:"../../assets/Img/imagenesArtezanales_7.jpg",
      estado:'vestimenta'
    },
    {
      id:8,
      numeracion:5,
      nombre:"Arhuacas",
      descripcion:"Es un producto artesanal de la etnia arhuaca y uno de los más representativos de Colombia. Elaboradas por las mujeres de la comunidad, las Gwati, desde muy jóvenes, las mochilas se presentan en diferentes formas: tejido de lana natural, algodón, fique o lana industrial.",
      valor:30000,
      src:"../../assets/Img/imagenesArtezanales_8.jpg",
      estado:'vestimenta'
    }
  ]
  listaTiendaArtezanal=[
    
    {
      id:2,
      numeracion:1,
      nombre:"Molas Gunas ",
      descripcion:"Las Molas son diseños coloridos sobre fondo negro tejidos por las mujeres de la comunidad Guna. Estas piezas artesanales están hechas a mano para congelar su cultura en el tiempo",
      valor:23000,
      src:"../../assets/Img/imagenesArtezanales_2.jpg",
      estado:'vestimenta'
    },
    {
      id:3,
      numeracion:2,
      nombre:"Cerámica ",
      descripcion:"La arcilla es la unión del agua, la tierra, el aire y el fuego. También es un material utilizado por los pueblos precolombinos para almacenar agua, maíz y sal.",
      valor:23000,
      src:"../../assets/Img/imagenesArtezanales_3.jpg",
      estado:'reliquia'
    },
    
    {
      id:5,
      numeracion:3,
      nombre:"Barniz",
      descripcion:"La técnica de extracción de la resina del árbol «Mopa-Mopa» fue desarrollada por los indígenas que viven en Nariño. Formada en finas hojas y teñida con tintes vegetales, la resina se coloca en objetos de madera de uso cotidiano (cuenco, jarrón)",
      valor:80000,
      src:"../../assets/Img/imagenesArtezanales_5.jpg",
      estado:'reliquia'
    },
  
  ]
  constructor(private navCtrl:NavController) { this.arte = 'reliquia';}
  public seleccionarOtroSegment(): void {
    this.arte = 'reliquia';
  }

  accionUno(item: { nombre: string; descripcion: string; valor: number; }) {
    this.ocultarUno = true;
    this.item.nombre=item.nombre;
    this.item.descripcion=item.descripcion;
    this.item.valor=item.valor;
  }
  accionDos(item: { nombre: string; descripcion: string; valor: number; }) {
    this.ocultarUno = true;
    this.item.nombre=item.nombre;
    this.item.descripcion=item.descripcion;
    this.item.valor=item.valor;
  }
 goToPagina(item: { nombre: string; descripcion: string; valor: number; }){
   this.navCtrl.navigateForward('/recibo-compra/'+this.item.nombre+'/'+this.item.valor)
 }
}
