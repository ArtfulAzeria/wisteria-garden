---
title: Mis contenedores
tags:
  - docker
  - contenedor
  - proyecto
  - year-left
  - aemet-avisa
  - bot
  - bluesky
---
Te invito a explorar conmigo los contenedores que conforman por ahora el ecosistema de *azeria.dev*. Esta familia de contenedores no solo va creciendo con el tiempo, sino que también reciben soporte continuado para garantizar su correcto funcionamiento. Los contenedores están alojados en el servidor de [mi laboratorio personal](Mi%20laboratorio%20personal).

> [!example] aemet-avisa
> Bot para la red social [Bluesky](https://bsky.app/). Se ejecuta bajo la cuenta [@aemet-avisa.bot.azeria.dev](https://bsky.app/profile/aemet-avisa.bot.azeria.dev). Publica regularmente los [avisos meteorológicos emitidos por la AEMET](https://www.aemet.es/es/eltiempo/prediccion/avisos).
>
>Puedes conocer más al respecto visitando [su repositorio](https://github.com/ArtfulAzeria/aemet-avisa-v2).
>
>> [!info]- Galería
>> 
>> ![[aemet-avisa_example.png]]

> [!example] year-left
> Bot para la red social [Bluesky](https://bsky.app/). Se ejecuta bajo la cuenta [@year-left.bot.azeria.dev](https://bsky.app/profile/year-left.bot.azeria.dev). Publica regularmente los días restantes hasta Año Nuevo, con una barra de carga.
>
>Puedes conocer más al respecto visitando [su repositorio](https://github.com/ArtfulAzeria/year-left).
>
> > [!info]- Galería
> > 
> > ![[yearleft_example.png]]

> [!example] swag
> Reverse proxy, un stack creado por los desarrolladores de [LinuxServer](https://docs.linuxserver.io/).
> 
> [SWAG](https://docs.linuxserver.io/general/swag/#swag) es esencialmente un Nginx con php7, fail2ban, y validación de certificados de *Let's Encrypt*. Gestiona el tráfico entre los contenedores expuestos en mi dominio [azeria.dev](https://azeria.dev/)
>
> > [!info]- Galería
> > 
> > ![[swag.png | 100]]

> [!example] nginx
> Servidor web. Contiene los recursos principales de [azeria.dev](https://azeria.dev/). Los dos subdominios principales que sirve actualmente son [www.azeria.dev](https://azeria.dev/) y [wisteria-garden.azeria.dev](https://wisteria-garden.azeria.dev/).
>
> > [!info]- Galería
> > 
> > ![[nginx.png | 100]]

> [!example] fvtt
> Servidor de [FoundryVTT](https://foundryvtt.com/), un software de gestión de [juegos de rol](https://es.wikipedia.org/wiki/Juego_de_rol).
> 
> No está enlazado directamente en el resto del ecosistema porque se trata más de un proyecto personal. Alojado en el subdominio [foundryvtt.azeria.dev](https://foundryvtt.azeria.dev/), y pasando por el reverse proxy, me permite crear y llevar partidas de juegos de rol con mis amigos en un entorno profesional y de calidad.
>
> > [!info]- Galería
> > 
> > ![[foundryvtt.png | 100]]






