// положение корабля
const random = Math.floor(Math.random()*5)
const loc1 = random ;
const loc2 = loc1 + 1;
const loc3 = loc2 + 1;

let isSunk = false; 
let guess;
let hits = 0 ;
// создаем счетчик выстрелов
let guesses = 0;


while (isSunk === false) {
    guess = +prompt("Fire!Enter a number 0-6");
    if (guess  < 0 || guess > 6) {
        alert(" Please Enter valid number!")
    } else {
// увеличиваем счетчик выстрелов
guesses += 1;
    
         if (guess === loc1||guess === loc2||guess === loc3)  {
              alert("hit")
                 hits = hits + 1;
             if (hits === 3) {
               isSunk = true;
                 alert("die");
        }
             } else {
        alert("miss")
        }
    }
}
const stat = "You have " + hits + " hit out of " + guesses + " shots " 
alert(stat);