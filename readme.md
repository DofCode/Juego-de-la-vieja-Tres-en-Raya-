## Juego de la vieja (Tres en Raya) en JS Vanilla
---
[Demo aquí 👈](https://la-vieja.firebaseapp.com/)

![Juego de la vieja (Tres en Raya) en JS Vanilla](https://firebasestorage.googleapis.com/v0/b/la-vieja.appspot.com/o/1616616516561.PNG?alt=media&token=d870eaa2-126c-4f0c-8d60-51e2073bc71b "Juego de la vieja (Tres en Raya) en JS Vanilla")

Para probarlo clona el repositorio y descarga las dependencias con `npm install`, sólo se bajará **express** para el servidor, el resto es solo HTML, CSS y Javascript Vanilla...

Se puede mejorar muchisimo, hasta el momento sólo muestra los datos de las celdas que los jugadores han apretado, para obtener el ganador basta con hacer un recorrido al array de **combinaciones** y compararlas con la de cada jugador cada vez que haga el ciclo.

```javascript
var combinations = [ [1,2,3], [4,5,6], [7,8,9], [1,4,7], [2,5,8], [3,6,9], [1,5,9], [3,5,7] ]
```