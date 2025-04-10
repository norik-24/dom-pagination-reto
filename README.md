# 🌀 Actividad: Paginado y Visualización de Personajes de Naruto

## 📌 Descripción General
Esta actividad tiene como objetivo implementar un sistema de paginación dinámica utilizando JavaScript, para mostrar los 20 primeros personajes obtenidos desde la API pública de Naruto:

🔗 https://dattebayo-api.onrender.com/characters

Cada página debe mostrar 4 personajes, organizados en tarjetas visuales que presenten la información más relevante de cada uno. Las tarjetas deben incluir:

- 🖼️ Imagen del personaje
- 📝 Nombre
- 📘 Información clave adicional (clan, aldea, habilidades o afiliación)

> **Nota:** El diseño base del proyecto puede modificarse o mejorarse, siempre y cuando las tarjetas incluyan la imagen y texto relevante para la identificación del personaje.

## 🎯 Requisitos Específicos

### 1. Paginación
- La interfaz debe mostrar el número total de páginas necesarias para visualizar los 20 personajes con 4 elementos por página (5 páginas en total)
- Los botones numerados de página deben generarse dinámicamente
- Se deben incluir dos botones adicionales:
  - « Anterior
  - Siguiente »
- Los botones "Anterior" y "Siguiente" deben desactivarse automáticamente cuando el usuario esté en la primera o última página, respectivamente

### 2. Tarjetas de Personajes
Cada tarjeta debe mostrar de forma clara:
- Imagen del personaje
- Nombre del personaje
- Al menos un dato clave adicional (puede ser aldea, clan, tipo de chakra, etc.)

### 3. Comportamiento Dinámico
- Al navegar entre páginas, los personajes anteriores deben desaparecer y mostrar los nuevos sin recargar la página
- El botón de la página actual debe aparecer resaltado o marcado
- La cantidad de páginas y los botones deben ajustarse automáticamente según la cantidad de personajes mostrados por página

### 4. Consumo de la API
- Se debe usar fetch() para consultar los datos desde la API
- Solo se deben usar los primeros 20 personajes para esta actividad, aunque la API contenga más

## ✅ Criterios de Evaluación

| Criterio | Descripción |
|----------|-------------|
| Funcionalidad | Se visualizan correctamente los personajes en bloques de 4 por página |
| Navegación | Los botones permiten navegar fluidamente entre páginas |
| Interfaz | Diseño limpio, con tarjetas bien estructuradas e información clara |
| Código | Código estructurado, comentado y que siga buenas prácticas de desarrollo |
| Dinamismo | El paginado se adapta automáticamente según los datos recibidos |

## 📤 Condiciones de Entrega
Se requiere que el estudiante adjunte el enlace del repositorio público de GitHub donde se pueda evidenciar la solución planteada o, en su defecto, el fork de este repositorio base.

¡Mucha suerte y éxitos! 💪🍥