import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clase-a',
  templateUrl: './clase-a.page.html',
  styleUrls: ['./clase-a.page.scss'],
})
export class ClaseAPage implements OnInit {
 
  peliculas: any=[{
    titulo: "LINTERNA VERDE",
    clase: "Pelicula Clase A",
    descripcion: "Guerreros extraterrestres eligen a un talentoso piloto de prueba para representarlos en la tierra, quien usará sus nuevos poderos como linterna verde  " ,
      genero: "Peliculas de ciencia ficción, acción y aventuras",
      duracion: "1h 53min ",
      elenco:"Hailee Steinfeld, Jorge Lendeborg Jr, John Cena, entre otros. ",
      year: "2011",
      produccion: "DC Entertainment, Warner Premiere, Warner Bros. Animation",

  }, {
    titulo: "OHANA UN MAGNIFICO TESORO",
    clase: "Pelicula Clase A",
    descripcion: "Despues de descubrir una pasión transformada por el skate, una joven de la india rural debera sortear distintos desafios para alcanzar su sueño de competir  " ,
    genero: "infantil, familiar y de comedia.",
    duracion: "2hrs 3min",
    elenco:"Kea Peahu, Alex Aiono, Lindsay Watson, entre otras. ",
    year: "2021",
    produccion: "Netflix",
  }, {
    
  titulo: "CHICASKATER",
  clase: "Pelicula Clase A",
  descripcion: " Despues de descubrir una pasión transformada por el skate, una joven de la india rural debera sortear distintos desafios para alcanzar su sueño de competir " ,
      genero: "drama, de la india, social.",
      duracion: " 1hrs 49min",
      elenco:"Rachel Saanchita Gupta, Amy Maghera, Shafin  Patel, entre otros. ",
      year: "2021",
      produccion: "Netflix",
  }, 
{
  titulo: "BOB ESPONJA UN HEROE FUERA DEL AGUA",
  clase: "Pelicula Clase A",
  descripcion: " El apnico se apodera de fondo de nikini cuando un pirata roba la receta secreta de la cangreburguer, bob esponja y sus amigos emprenden una misión para recuperarla  " ,
  genero: "pelicula familiar, pelicula infantil y comedia.",
  duracion: "1h 35min.",
  elenco:"Tom Kenny, Antonio Banderas, Clancy Brown, entre otros.  ",
  year: "2021",
  produccion: "United Plankton Pictures, Disruption Entertainment",
},
{
  titulo: "SÚPERHEROICOS",
  clase:"Pelicula Clase A",
  descripcion:" Cuando los extraterrrestres capturan a los superheroes de la tierra, sus hijos deben aprender a trabajar juntos para salvar a sus padres y al planeta tierra.",
  genero:"Pelicula infantil, familiar y de comedia.",
  duracion:"1HR 40min",
  elenco:"Yaya Gosselin, Pedro Pascal, Priyanka Chopra Jonas, entre otros.",
  year:"2020",
  produccion:"Netflix",
},
{
  titulo: "TRAVIESO DE LA MANSIÓN A LA CALLE",
  clase:"Pelicula Clase A",
  descripcion:"La privilegiada vida del consentido travieso queda patas para arriba cuando el can se pierde y debe aprender a sobrevivir en las calles de la gran ciudad.",
  genero:" pelicula familiar, infantil con musica para niños.",
  duracion:"1hr 28min",
  elenco:"Big Sean, Pamela Adlon, Lucy Hale, entre otros.",
  year:"2021",
  produccion:"Netflix",
},
{
  titulo: "EL DRAGON DE LA TIERRA",
  clase:"Pelicula Clase A",
  descripcion:" El perseverante adolescente Din anhela recuperar a su mejor amiga de la infancia cuando conoce a un dragón de los deseos que le muestra la magia de lo posible.",
  genero:"pelicula china, infantil y familiar ",
  duracion:" 1rs 42 min",
  elenco:"Jimmy Wong, John Cho, Constance Wu, entre otros",
  year:"2021",
  produccion:"Netflix",
},
{
  titulo: "ANGRY BIRS LA PELICULA",
  clase:"Pelicula Clase A",
  descripcion:"Sentenciado a clases de control de ira, el gruñon red se convierte ne un heroe que entrena a sus compañeros para desatar su furia interna cuando los cerdos los invaden.",
  genero:"Pelicula familiar, infantil y comedia.",
  duracion:"1hr 37min.",
  elenco:"Jason Sudeikis, Josh Gad, Danny McBride, entre otros.",
  year:"2016",
  produccion:"Sony Pictures Animation.",
},
{
  titulo: "KARATE KID",
  clase:"Pelicula Clase A",
  descripcion:"Dre y su madre se mudan a pekin, donde buscara un maestro de artes marciales que le ayude a defenderse de un maton que la maltrata, nueva versión del clasico de los 80 ",
  genero:"artes marciales, familiar, infantil y familiar.",
  duracion:" 2hrs 20min.",
  elenco:"Jaden Smith, Jackie Chan, Taraji P. Henson, entre otras.",
  year:"2010",
  produccion:" Overbrook Entertainment, China Film Group Corp., Jerry Weintraub Productions.",
},
{
  titulo: "EMOGI LA PELICULA",
  clase:"Pelicula Clase A",
  descripcion:" En textopolis, donde se supone los emogis solo deben mostrar una emoción, las diversas expresiones de gene se vuelven un problema, su solución es volverse normal.",
  genero:"pelucula infantil y comedia.",
  duracion:"1hr 27min.",
  elenco:"t.j. Miller, James Corden , Anna Faris, entre otros.",
  year:"2017",
  produccion:"Sony Pictures Animation",
}];
  constructor() { }

  ngOnInit() {
  }

}
