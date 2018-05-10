(function(){

// Crear las 9 celdas del tablero
for (i = 1; i < 10; i++) {

  var board = document.getElementById("board");
  var items = document.createElement("div");

  // Crear el atributo cell con el número de celda dinamicamente
  var att = document.createAttribute("cell");    
  // Pasar el número de celda como valor al atributo "Cell"
  att.value = i;  
  // Añadir el atributo "Cell" a cada celda
  board.appendChild(items).setAttributeNode(att); 
  // Añadir la clase item a cada celda
  board.appendChild(items).classList.add('item');
  // Añadir el evento onclick "laVieja" a cada celda
  board.appendChild(items).onclick = laVieja;
}

var playerCurrently = 1 // Jugador actual 1-2 (defecto: 1)
var playerOne = [] // Celdas seleccionadas por jugador 1
var playerTwo = [] // Celdas seleccionadas por jugador 2

// Evento principal
function laVieja() {

  // Combinaciones de celdas para ganar la partida
  var combinations = [ [1,2,3], [4,5,6], [7,8,9], [1,4,7], [2,5,8], [3,6,9], [1,5,9], [3,5,7] ]
  // Agrego las combinaciones para ganar a la interfaz
  document.getElementById('combinations').innerHTML = JSON.stringify(combinations)

  if (playerCurrently == 1){ // Si mueve el jugador 1:
    
    this.className += ' player-1'
    this.onclick = '' // Remuevo el onclick de la celda
    value = this.attributes.cell.value // Detecto el atributo "Cell"
    value_1 = parseInt(value) // Parseo el valor del atributo "Cell" de string a entero
    playerOne.push(value_1) // Añado el valor al array del jugador 1
    document.getElementById('player_1').innerHTML = playerOne // Agrego los datos del jugador 1 a la interfaz
    // Se actualiza el jugador de turno al jugador 2
    return playerCurrently = 2

  }else{ // Si mueve el jugador 2:
    
    this.className += ' player-2'
    this.onclick = '' // Remuevo el onclick de la celda
    value = this.attributes.cell.value // Detecto el atributo "Cell"
    value_2 = parseInt(value) // Parseo el valor del atributo "Cell" de string a entero
    playerTwo.push(value_2) // Añado el valor al array del jugador 2
    document.getElementById('player_2').innerHTML = playerTwo // Agrego los datos del jugador 2 a la interfaz
    // Se actualiza el jugador de turno al jugador 1
    return playerCurrently = 1

  }
}

})();
