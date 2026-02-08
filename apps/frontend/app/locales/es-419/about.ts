import type { AboutUsProps } from "~/locales/en/about";

export function AboutUs(props: AboutUsProps) {
     return `
# Sobre nosotros

Te damos la bienvenida a **CRMM** (**Cosmic Reach Mod Manager**).
Somos un equipo apasionado dedicado a hacer fácilmente accesible compartir y encontrar contenido descargable para *Cosmic Reach*.
Ya seas un desarrollador de mods, creador de mundos, o solo alguien que le gusta personalizar su experiencia, CRMM es el lugar para tu creatividad.

---
Última actualización: 29/03/25, 13:27


### Desde el principio (presunción)

CRMM comenzó su forma de vida más temprana como una humilde molécula de H<sub>2</sub>O navegando en la sopa primordial, ocupada en sus quehaceres de molécula. Luego, por razones que nadie entiende del todo (aunque tal vez los canguros), terminó en Australia, donde provocó accidentalmente una pequeña distorsión en la realidad. De ese caos surgió un único pensamiento que cambiaría el mundo: «¿Qué tal si los mods estuvieran… centralizados?». Y así, Eatham tuvo la chispa que lo inició todo. A partir de ahí, las cosas se volvieron sorprendentemente sencillas (salvo unos cuantos servidores incendiados y, por supuesto, algún que otro momento de dolores de cabeza).

---

CRMM fue *realmente* creado el **10<sup>de</sup> marzo de 2024**, nacido de la idea de crear un lugar central para compartir todo lo hecho para Cosmic Reach. Inspirados por plataformas como [Modrinth](https://modrinth.com/), nos propusimos construir algo más limpio, más rápido y adaptado a nuestra pequeña comunidad. Y aunque todavía tenemos un largo viaje por recorrer, y algunos obstáculos en el camino, estamos muy orgullosos de lo lejos que ya hemos llegado.

### Nuestra misión
Nuestro objetivo es simple:
permitir a los creadores compartir su contenido de una forma fácil y cómoda. Desde mods y mapas hasta paquetes de texturas y shaders, brindamos a los creadores una forma de compartir lo que hacen, y a los usuarios una manera de disfrutarlo sin problemas.

### Conoce al equipo
Aunque CRMM es un proyecto impulsado por la comunidad, estas son algunas de las personas fundamentales detrás de él:

* **Abhinav** – *El que hace la magia técnica*. Hizo tanto el backend como el frontend del sitio web. Si algo necesita crearse o arreglarse, él es el encargado.
* **Eatham** – *El de las ideas*. Ayudó a poner en marcha CRMM y estuvo ahí desde el principio.
* **Spicylemon** – *El gerente, diseñador del logo y corrector gramatical (cuando se acuerda)*. Supervisa el proyecto y se asegura de que todo funcione sin problemas.
* **CaptainDynamite** – Ayuda con la financiación del proyecto, presente desde el inicio.
* **Dounford & Arlojay** – Dieron una mano con todo en los primeros días de CRMM.
* **Puzzle** – Nuestro proyecto "padre", el punto de partida y una pieza clave de nuestros orígenes.

Aunque muchas personas colaboran de vez en cuando (sobre todo a través de Discord), el trabajo diario lo llevan principalmente Spicylemon y Abhinav, con algo de ayuda de Eatham.

Y, por supuesto, muchísimas gracias a FinalForEach, el creador de Cosmic Reach, por construir un juego tan único y darnos esta increíble comunidad sobre la cual crecer.

### Cómo funciona todo
Tenemos alojado CRMM en nuestros propios servidores y usamos herramientas de código abierto, pensadas para la comunidad:

**Alojado por nosotros:**
* **PostgreSQL** (base de datos SQL)
* **Meilisearch** (motor de búsqueda de texto)
* **Valkey** (caché en memoria)
* **ClickHouse DB** para analítica rápida y eficiente
* **Uptime Kuma** para monitoreo

**Terceros:**

* **Cloudflare** (proxy para el backend)
* **Fastly** para entrega de contenido y caché

Todo está diseñado para ser ligero, respetar la privacidad y pensado desde el primer momento para la comunidad de modding.

### Comunidad y contribuciones

CRMM es un proyecto **de código abierto, creado y mantenido por la comunidad**, bajo la *Licencia Pública General Affero de GNU*.
Cualquiera puede ayudar a traducir el sitio, proponer nuevas funciones o, si se anima, colaborar directamente desde nuestro [repositorio en GitHub](${props.repoLink}). No pasa todos los días, pero cuando alguien lo hace, lo valoramos muchísimo.

### ¿Quieres participar?
Únete al [discord de Puzzle](${props.discordInvite}) y saluda. Ya sea que quieras contribuir o simplemente pasar el rato con otros modders, aquí eres bienvenido.

### ¿Qué sigue?

Todavía estamos en una etapa temprana, pero se vienen varias cositas. Desde **herramientas de moderación** hasta **integración con VirusTotal**, mejores **informes de proyectos** y mucho más: siempre estamos construyendo hacia una plataforma cada vez más grande y mejor.

Gracias a **TI** por ser parte de la comunidad CRMM y por hacer todo esto posible.
¡Estamos deseando ver tus creaciones ;). ¡Feliz Cosmic Reaching!
 `;
 }
