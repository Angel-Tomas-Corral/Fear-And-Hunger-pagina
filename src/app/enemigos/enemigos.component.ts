import { Component } from '@angular/core';
import { Enemigo } from '../interfaces/enemigos.interface';

@Component({
  selector: 'app-enemigos',
  templateUrl: './enemigos.component.html',
  styleUrls: ['./enemigos.component.css']
})
export class EnemigosComponent {

  enemigos:Enemigo[] = [

    {
      apariencia : "../../assets/fearAdnHungry-characters/300px-Guard.webp",
      nombre : "Guardian",
      tecnica_y_ataques : "Aparece en los primeros niveles, brazo con machete y luego aguijon por ultimo el brazo izquierdo atacar."
    },
    {
      apariencia : "../../assets/fearAdnHungry-characters/300px-Guard_(Elite).webp",
      nombre : "Guardian Elite",
      tecnica_y_ataques : "Se encuentran en toda la mazmorra , evitar a toda costa , mas chanse si es un equipo grande intentar sacarle los brazos."
    },


    {
      apariencia : "../../assets/fearAdnHungry-characters/Hound.webp",
      nombre : "Perro",
      tecnica_y_ataques : "Evitar a toda costa en la primera apricion , atacar en la cabeza. si son mas personejes que uno puede ser facil."
    },

  

    {
      apariencia : "../../assets/fearAdnHungry-characters/Ghoul_(Enemy).webp",
      nombre : "Ghoul",
      tecnica_y_ataques : "Evitar , atacar a las piernas para que caiga , se puede usar nigromancia y sera tu aliado."
    },
    
    {
      apariencia : "../../assets/fearAdnHungry-characters/Maneba.webp",
      nombre : "Maneba",
      tecnica_y_ataques : "Evitar, atacar a la cabeza, se encuentran en las primeras zonas de la mazmorra."
    },

    {
      apariencia : "../../assets/fearAdnHungry-characters/Black_Witch.webp",
      nombre : "Bruja Negra",
      tecnica_y_ataques : "Se encuentra en una trampa que hay en la primera zona , se puede evitar si solo sigues de largo , si la enfrentas que sean ataques a el torzo"
    },

    {
      apariencia : "../../assets/fearAdnHungry-characters/300px-Human_Hydra.webp",
      nombre : "Masa De Carne",
      tecnica_y_ataques : "Esta en una habitacion de la primera parte del juego , te pide que el des a la niña si se la das no te da nada a cambio, si le atacas no tiene forma de defenderse."
    },

    {
      apariencia : "../../assets/fearAdnHungry-characters/Cavegnome.webp",
      nombre : "Cavegnome",
      tecnica_y_ataques : "Evitar no te da nada por matarlos , si te quedas quito no te atacan, mueren de un golpe pero si fallas llama a mas aliados."
    },

    {
      apariencia : "../../assets/fearAdnHungry-characters/300px-Guard_(Moonless).webp",
      nombre : "Guardian Moonless",
      tecnica_y_ataques : "Rara vez aparece en las profundiades de la masmorra , evitar a toca costa , atacar a brazo y piernas."
    },
    
    {
      apariencia : "../../assets/fearAdnHungry-characters/Miner_Spectre.webp",
      nombre : "Miner Spectre",
      tecnica_y_ataques : "Evitar a toda costa es imune a ataques fisicos solo a magicos , apertar hablidad y selecionar correr si no te queda de otra hacerlo hasta que puedas correr."
    },

    {
      apariencia : "../../assets/fearAdnHungry-characters/Moonless_(Enemy).webp",
      nombre : "Moonless",
      tecnica_y_ataques : "Darle 2 pedazos de carne podriada y sera tu aliado , tiene ataque lacerante."
    },

    {
      apariencia : "../../assets/fearAdnHungry-characters/300px-Lizardman.webp",
      nombre : "Lizerman",
      tecnica_y_ataques : "Evitar a toda costa enemigo muy fuerte , atacar a el brazo y piernas luego cabeza, talvez suelte sus armas."
    },

    {
      apariencia : "../../assets/fearAdnHungry-characters/Priest.webp",
      nombre : "Priest",
      tecnica_y_ataques : "Atacar al torzo siempre moriran muy rapido y sueltan muchos objetos."
    },

    {
      apariencia : "../../assets/fearAdnHungry-characters/Yellow_mage.webp",
      nombre : "Mago amarillo",
      tecnica_y_ataques : "No evitar correr hasta matarlo , atacar a la pierna para que no pueda bailar y no hacer daño."
    },

    {
      apariencia : "../../assets/fearAdnHungry-characters/300px-Iron_Shakespeare.webp",
      nombre : "Iron Shakespeare",
      tecnica_y_ataques : "esta en los primeros niveles no atacar correr direcatamente es muy fuerte."
    },

    {
      apariencia : "../../assets/fearAdnHungry-characters/Crow_Mauler.webp",
      nombre : "Crow Mauler",
      tecnica_y_ataques : "Evitar, No dormir si te salta un mensaje sospechoso cuando le das a domir a una cama , como que sientes una presencia, y correr si ya esta en tu nivel, atacar al brazo y cabeza(creo)."
    },

    {
      apariencia : "../../assets/fearAdnHungry-characters/Cavedweller.webp",
      nombre : "Cavedweller",
      tecnica_y_ataques : "Enemigo debil , atacar al brazo de la pierna y luego torzo con la otra variante igual."
    },

    {
      apariencia : "../../assets/fearAdnHungry-characters/Lord_of_flies.webp",
      nombre : "El señor de las moscas",
      tecnica_y_ataques : "Esta en mahabre , intentar evitarlo , no se como se deba matar."
    },

    {
      apariencia : "../../assets/fearAdnHungry-characters/Old_Knight.webp",
      nombre : "Antiguo Caballero",
      tecnica_y_ataques : "Esta en los niveles 7 de mineria , torzo diracamente , evitar y la otra variante espirituo evitar tambien."
    },

    {
      apariencia : "../../assets/fearAdnHungry-characters/Night_Lurch_(Infected).webp",
      nombre : "Night Lur",
      tecnica_y_ataques : "Es ciego , podes pasar de el solo que no te toque , piernas y brazos."
    },

    {
      apariencia : "../../assets/fearAdnHungry-characters/Molded2.webp",
      nombre : "Molded",
      tecnica_y_ataques : "Esta en el pasado de mahabre en el final del juego, torzo , o evitar son lentos."
    },

    {
      apariencia : "../../assets/fearAdnHungry-characters/White_Angel.webp",
      nombre : "Angel Blanco",
      tecnica_y_ataques : "Esta en mahabre evitar si se puede , no se cual sea su deblidad."
    },
    {
      apariencia : "../../assets/fearAdnHungry-characters/300px-Harvestman.webp",
      nombre : "Hervestman",
      tecnica_y_ataques : "esta en mahabre no ataca al jugador aveces si , no se si tiene deblidad pero no es muy fuerte."
    },
    {
      apariencia : "../../assets/fearAdnHungry-characters/Mumbler.webp",
      nombre : "Mumbler",
      tecnica_y_ataques : "Esta en mahabre evitar si se puede , no se cual sea su deblidad."
    },

    {
      apariencia : "../../assets/fearAdnHungry-characters/300px-Skin_Granny2.webp",
      nombre : "JEFE  Skin Granny",
      tecnica_y_ataques : "Jefe en pasado de mahabre , tiene un ataque que te saca la cara y se la pone , no tengo idea como se pelea contra eso."
    },

    {
      apariencia : "../../assets/fearAdnHungry-characters/Valteil.webp",
      nombre : "JEFE Valteil",
      tecnica_y_ataques : "Tiene una gran debilidad ,dale para hablar con el y te dira preguntas si le contestas todas lo matas y sacas mucho daño por eso."
    },


    {
      apariencia : "../../assets/fearAdnHungry-characters/Tormented_One.webp",
      nombre : "JEFE  Tormented One",
      tecnica_y_ataques : "tiene deblidad tienes que atacar a la rueda numero 2 y 3 en ese orden te dara turnos extra y pasara rapido a la otra forma , es fuerte."
    },


    {
      apariencia : "../../assets/fearAdnHungry-characters/300px-Traces_of_Gro-goroth.webp",
      nombre : "JEFE  Goroth",
      tecnica_y_ataques : "No se cual sea su debilidad"
    },


    {
      apariencia : "../../assets/fearAdnHungry-characters/300px-God_of_fear_and_hunger5.webp",
      nombre : "JEFE DiOS del miedo y el hambre",
      tecnica_y_ataques : "en el final que le la niña se transforma , no se cual sea su debilidad extremadamente fuerte."
    },

  ]
}
