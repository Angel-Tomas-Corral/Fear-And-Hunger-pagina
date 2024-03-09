import { Component } from '@angular/core';
import { Tecnologia } from '../interfaces/tecnologias.interface';

@Component({
  selector: 'app-saber-mas',
  templateUrl: './saber-mas.component.html',
  styleUrls: ['./saber-mas.component.css']
})
export class SaberMasComponent {



  tecnologias: Tecnologia[] = [
    {

      imagen: "../../assets/iconos/1.png",
      descripcion: "La estructura de la página se ha construido meticulosamente utilizando HTML5, la última versión del lenguaje de marcado estándar para la web. HTML5 proporciona una base sólida y moderna que garantiza una estructura bien definida y compatible con las últimas tecnologías web, lo que mejora la accesibilidad, la interoperabilidad y la experiencia del usuario.",

      
    },
    {

      imagen: "../../assets/iconos/2.png",
      descripcion: "Con CSS, estilicé y realicé mejoras en la página web, incluyendo diseño responsivo para adaptarse a distintos dispositivos, personalización de estilos para cada elemento, animaciones sutiles para una experiencia de usuario mejorada, fondos borrosos para ciertas secciones que añaden profundidad, y optimización de rendimiento para una carga más rápida. El resultado es una página web visualmente atractiva y funcional, con efectos que mejoran la experiencia del usuario.",

    },
    {

      imagen: "../../assets/iconos/3.png",
      descripcion: "Se ha empleado JavaScript para dotar a la página de funcionalidades interactivas y dinámicas. A través de la creación de condiciones y funciones, se han vinculado acciones específicas a los botones, permitiendo una experiencia de usuario más inmersiva y personalizada. Esta implementación de JavaScript añade un nivel de interactividad que enriquece la navegación y la usabilidad de la página web. ",
    
    },
    {

      imagen: "../../assets/iconos/5.png",
      descripcion: "Con Typescript, establecí condiciones y funciones que se activan mediante botones, permitiendo una experiencia interactiva en la página. Además, utilicé tipos de datos como strings y conexiones entre componentes para mejorar la funcionalidad. Por ejemplo, empleé la directiva *ngFor para crear una lista dinámica, mostrando fotos y otros elementos de manera eficiente y atractiva.",

    },
    {

      imagen: "../../assets/iconos/4.webp",
      descripcion: "Integré Bootstrap 5 para agilizar la creación de columnas de imágenes sin necesidad de extensos estilos CSS. Utilicé sus componentes para organizar de manera eficiente las imágenes, optimizando así el diseño de la página. Además, aproveché las características estéticas de Bootstrap para mejorar la apariencia visual de la página, garantizando una presentación atractiva y moderna.",
      width:"150",
      height:"150"
    },
    {

      imagen: "../../assets/iconos/6.png",
      descripcion: "Implementé Angular 15 como parte de mi proceso de aprendizaje y práctica. Creé componentes para estructurar la página de manera modular y reutilizable, aprovechando las ventajas del enlace de datos bidireccional y la inyección de dependencias. Además, utilicé routerLinks para la navegación entre diferentes vistas, lo que proporciona una experiencia de usuario fluida y coherente. También trabajé en la interpolación de datos para mostrar información dinámica en la página. En resumen, el uso de Angular 15 me permitió familiarizarme con los conceptos fundamentales del desarrollo web moderno y aplicarlos en un proyecto práctico.",
  
    }
  ]
}
