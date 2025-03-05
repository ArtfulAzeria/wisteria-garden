---
title: Mi laboratorio personal
tags:
  - programación
  - devops
  - seguridad
---
## Servidor
El sitio web [azeria.dev](https://www.azeria.dev/) no está alojado en servicios como AWS, Azure, GCP, ni similares. Aunque tengo experiencia con los mencionados, especialmente con AWS, buscaba un reto personal: revivir un viejo ordenador que tenía acumulando polvo y usarlo como servidor.

El servicio se ejecuta sobre una máquina dotada de Ubuntu Server 24, que alberga una dupla de servicios dockerizados:
- ![[swag.png| 14]] Reverse proxy (SWAG)
- ![[nginx.png| 14]] Servidor web (Nginx)

El Reverse Proxy es un stack llamado [SWAG](https://docs.linuxserver.io/general/swag/#swag), creado por los desarrolladores de [LinuxServer](https://docs.linuxserver.io/). SWAG es esencialmente un Nginx con php7, fail2ban, y validación de certificados de *Let's Encrypt*. Citando su propia documentación:

> *\[...] ==It is essentially an nginx webserver with php7, fail2ban (intrusion prevention) and Let's Encrypt cert validation built-in.== It is just MySQL short of a LEMP stack and therefore is best paired with our MariaDB docker image.*

Podría haber alojado la web en el Nginx integrado en SWAG, pero prefería desarrollar mis [propios servicios](Mis%20contenedores) fuera de su stack. Por ello, desplegué un Nginx en un contenedor aparte.

El Reverse proxy está configurado para redirigir el tráfico a mi contenedor de Nginx, utilizando una red interna en Docker que permite la comunicación entre ambos contenedores (swag y nginx) se puedan comunicar.

## DNS
Adquirí el dominio _azeria.dev_ a través de [Google Domains](https://domains.google/). Cuando este servicio fue descontinuado, sus dominios fueron migrados a [Squarespace](https://domains.squarespace.com/es/). Tras ello, migré el dominio nuevamente, esta vez a [Cloudflare](https://www.cloudflare.com/es-es/), y desde entonces es el servicio que uso.

Desde Cloudflare, redirijo todo el tráfico de mi dominio a otro adquirido a través de [DNSExit](https://dnsexit.com/). Esto me permite contar con un DDNS (*Dynamic DNS*), evitando el sobrecoste de contratar una IP estática con un ISP.
