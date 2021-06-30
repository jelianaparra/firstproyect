import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clase-b',
  templateUrl: './clase-b.page.html',
  styleUrls: ['./clase-b.page.scss'],
})
export class ClaseBPage implements OnInit {

  peliculas: any=[{
    titulo: "BUMBLEBEE",
    clase: "Pelicula Clase B",
    descripcion: "Un papa novato y viudo les hace frente a las dudas, los miedos, el dolor y los pañales sucios al criar a su hija por su cuenta, inspirada en una historia real " ,
  genero: "Pelicula de ciencia ficción, acción y aventuras .",
  duracion: " 1h 54min",
  elenco:"Hailee Steinfeld, Jorge Lendeborg Jr, John Cena, entre otros. ",
  year: "2018",
  produccion: "Tencent Pictures, Di Bonaventura Pictures, Bay Films, Tom DeSanto/Don Murphy, Allspark Pictures.",
  },
  {
    titulo: "JUMANJI EN LA SELVA",
    clase:"Pelicula Clase B",
    descripcion:"Un videojuego absorbe a cuatro estudiantes, Una vez en la selva, deben embarcarse en una busqueda en sus avatares, que no coinciden para nada con la realidad",
    genero:"Pelicula basada en libros.",
    duracion:"1hr 59min",
    elenco:"Dwayne Jonhson, Kevin Hart, Jack Black, entre otros",
    year:"2017",
    produccion:"Seven Bucks Productions, Columbia Pictures, Radar Pictures, Matt Tolmach Productions.",
  },
  {
    titulo: "MIA Y EL LEÓN BLANCO",
    clase:"Pelicula Clase B",
    descripcion:" Durante años, su mujer amigo fue Charlie, un leoncito blanco. Ahora lo quieren vender y sera ella quien muestre las garras para defender su libertad ",
    genero:" De francia, acción y aventura ",
    duracion:"1hr 38min",
    elenco:"Daniah de Villiers, Melanie Laurent, Langley Kirkwood, entre otros.",
    year:"2019",
    produccion:"M6 Films, Galatée Films, StudioCanal, Outside Films",
  },
  {
    titulo: "SON COMO NIÑOS 2",
    clase:"Pelicula Clase B",
    descripcion:"Tras regresar a su ciudad natal, lenny feder y sus amigos de toda la vida aprenden que las cosas no son iguales en el lugar que los vio crecer.",
    genero:"comedia.",
    duracion:"1hr 41min ",
    elenco:"Adam Snadler, Kevin James, Chris Rock, entre otros.",
    year:"2013",
    produccion:"Happy Madison Productions",
  },
  {
    titulo: "NO MANCHES FRIDA",
    clase:"Pelicula Clase B",
    descripcion:"Apenas sale de prisión, un exconvicto toma un trabajo como maestro sustituto en una escuela, La misma escuela donde tiene escondido su gran botin.",
    genero:"COMEDIA",
    duracion:"1hr 54min",
    elenco:"Omar Chaparro, Martha Higareda, Monica Dionne, entre otros.",
    year:"2016",
    produccion:" Edward Allen, Martha Higareda, Mauricio Argüelles",
  },
  {
    titulo: "FUERZA TRUENO",
    clase:"Pelicula Clase B",
    descripcion:"Dos amigas de la infancia se convierten en las mas insolitas heroinas cuando una de ellas inventa una formula para desarrollar superpoderes.",
    genero:"acción, comedia y aventura.",
    duracion:"1hr 47min",
    elenco:" melissa Maccarthy, octavia spencer, jason bateman, entre otros.",
    year:"2021",
    produccion:"Netflix",
  },
  {
    titulo: "A TODOS LOS CHICOS PARA SIEMPRE",
    clase:"Pelicula Clase B",
    descripcion:"Es el ultimo año de la escuela, con todo lo que eso significa. tras su regreso de un viaje familiar a Corea, lara Jean analiza sus planes para el futuro, con peter y sin el. ",
    genero:" comedia romantica, basada en libros, para adolescentes. ",
    duracion:"1hr 55min.",
    elenco:"Lana Condor, Noah Centineo, Janel Parrish, entre otros.",
    year:"2021",
    produccion:"Netflix.",
  },
  {
    titulo: "AMOR Y MONSTRUOS",
    clase:"Pelicula Clase B",
    descripcion:"Siete años despues de sobrevivir al apocalipsis de mosntruos, el desafortunado pero adorable Joel deja atras su bunker subterraneo para reunirse con su ex.",
    genero:"Ciencia ficción, pelicula familiar, para adolescentes.",
    duracion:"1hr 49min.",
    elenco:"Dylan OBrien, Jessica Henwick, Michael Rooker, entre otros.",
    year:"2021",
    produccion:"Netflix.",
  },
  {
    titulo: "PATERNIDAD",
    clase:"Pelicula Clase B",
    descripcion:" Un papa novato y viudo les hace frente a las dudas, los miedos, el dolor y los pañales sucios al criar a su hija por su cuenta, inspirada en una historia real ",
    genero:"basada en la vida real, basada en libros, drama.",
    duracion:"1hr 50min.",
    elenco:"Kevin Hart, Alfre Woodard, Lil Rel Howery, entre otros.",
    year:"2021",
    produccion:"Netflix",
  },
  {
    titulo: "MILAGRO AZUL",
    clase:"Pelicula Clase B",
    descripcion:" Para ayudar a su orfanato de escasos recursos, un hombre y un grupo de jovenes se asocian al gruñon capitan de un barco para competir en un licrativo torneo de pesca ",
    genero:"basada en la vida real, infantil y familiar.",
    duracion:"1hr 36min.",
    elenco:"Jimmy Gonzalez, Dennis Quaid, Anthony Gonzalez, entre otros.",
    year:"2021",
    produccion:"Netflix.",
  },
];
  
  constructor() { }
 
  ngOnInit() {
  }

}
