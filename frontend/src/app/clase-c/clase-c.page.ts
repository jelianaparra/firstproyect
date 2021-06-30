import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clase-c',
  templateUrl: './clase-c.page.html',
  styleUrls: ['./clase-c.page.scss'],
})
export class ClaseCPage implements OnInit {
 
  peliculas: any=[{
    titulo: "LAVA PERROS",
    clase:"Pelicula Clase C",
    descripcion:" Cuando un narco en decadencia se niega a saldar su deuda con un advenedizo, solo una reserva oculta puede salvar a sus hombres. Justo la que acaba de hallar el jardinero.  ",
    duracion:"1hr 47min.",
    elenco:"Christian Tappan, Anderson Ballesteros, John Alex Toro, entre otros. ",
    year:"2021",
    produccion:"Netflix.",
  },
  {
    titulo: "LOCO POR ELLO",
    clase:"Pelicula Clase C",
    descripcion:"  Despues de pasar una alocada noche con Carla, Adri descubre que hay una sola manera de volver a verla: internarse en el centro psiquiatrico donde vive ella. ",
    genero:"comedia romantica, de españa, comedia.",
    duracion:"1hr 42min.",
    elenco:"Alvaro Cervantes, Susana Abaitua, Luis Zahera, entre otros. ",
    year:"2021",
    produccion:"Netflix.",
  },
  {
    titulo: "HASTA EL CIELO",
    clase:"Pelicula Clase C",
    descripcion:"Despues de enamorarse de estrella, angel, un mecanico madrileño, se adentra en el mundo de los atracos y se convierte en el objetivo de un implacable detective.",
    duracion:" 2hrs 1min.",
    elenco:"Miguel Herran, Luis Tosar, Carolina Yuste, entre otros.",
    year:"2021",
    produccion:"Netflix.",
  },
  {
    titulo: "ZONA DE RIESGO",
    clase:"Pelicula Clase C",
    descripcion:" En un futuro cercano, envian a un piloto de drones a una zona de guerra y lo asignan a un comandante androide ultrasecreto con la mision de impedir un ataque nuclear.  ",
    genero:"pelicula de ciencia ficción, accción y aventura.",
    duracion:"1hr 55min.",
    elenco:" Anthony Mackie, Damson Idris, Emily Beecham, entre otros.",
    year:"2021",
    produccion:"Netflix.",
  },
  {
    titulo: "AMOR DE CUENTO",
    clase:"Pelicula Clase C",
    descripcion:"Tras años de priorizar su carrera, una comediante conoce a un chico que parece perfecto: inteligente, simpatico, exitoso .... y quiza demasiado bueno para ser cierto. ",
    genero:"comedia romantica, comedia, pelicula romantica.",
    duracion:"1hr 34min.",
    elenco:"Iliza Shlesinger, Ryan Hansen, Margaret Cho, entre otros.",
    year:"2021",
    produccion:"Netflix.",
  },
  {
    titulo: "SEGURIDAD",
    clase:"Pelicula Clase C",
    descripcion:"Luego de que una joven sufre un violento ataque en su pueblo costero, un esperto en seguridad y su familia quedan atrapados en un mar de secretos y mentiras.  ",
    genero:"de italia, misterios, pelicula basada en libros.",
    duracion:"1hr 58min.",
    elenco:" Marco Damore, Maya Sansa, Silvio Muccino, entre otros.",
    year:"2021",
    produccion:"Netflix.",
  },
  {
    titulo: "CARNAVAL",
    clase:"Pelicula Clase C",
    descripcion:"Tras una ruptura, una influencer invita a sus amigas a un viaje gratis al vibrante carnaval de bahia, donde aprende que la vida se trata de algo mas que solo likes ",
    genero:"de brasil, comedia, musica , musical.",
    duracion:"1hr 35min.",
    elenco:"giovana cordeiro, gkay bruna inocencio, entre otros.",
    year:"2021",
    produccion:"Netflix.",
  },
  {
    titulo: "VIDAS DE PAPEL",
    clase:"Pelicula Clase C",
    descripcion:"En las calles de estambul, un manipulador de desechos enfermo le abre las puertas a un niño abandonado que lo hace enfrentar traumas de su propio pasado  ",
    genero:"de Turquía, drama, melodrama.",
    duracion:"1hr 37min.",
    elenco:"Cagatay Ulusoy, Emir Ali Dogrul, Ersin Arici, entre otros.",
    year:"2021",
    produccion:"Netflix.",
  },
  {
    titulo: "EL EJERCITO DE LOS MUERTOS",
    clase:"Pelicula Clase C",
    descripcion:" Tras la aparición de zombis en las vegas, un grupo de mercenarios lo arriesga todo y se aventura al area de cuarentena para llevar a cabo el mayor atraco de sus vidas ",
    genero:"acción, aventura, terror, terror de zombies. ",
    duracion:" 2HRS 28MIN.",
    elenco:"Dave Bautista, Ella Purnell, Omari Hardwick, entre otros.",
    year:"2021",
    produccion:"Netflix.",
  },
  {
    titulo: "LA CASA DE LAS FLORES",
    clase:"Pelicula Clase C",
    descripcion:"  Los hermanos de la Mora elaboran un ingenioso plan para irrumpir en su antigua casa familiar y recuperar un importante tesoro escondido.",
    genero:"de mexico comedio de tv. ",
    duracion:"1hr 27min.",
    elenco:" Cecilia Suarez, Aislinn Derbez, Dario Yazbek entre otros. ",
    year:"2021",
    produccion:"Netflix.",
  }
];
  constructor() { }

  ngOnInit() {
  }

}
