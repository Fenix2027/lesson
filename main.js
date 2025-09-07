// Напишите программу, которая фильтрует список строк и возвращает список,
//  содержащий только имена ваших друзей.

// Если в имени ровно 4 буквы, можете быть уверены, что это ваш друг! 
// В противном случае можете быть уверены, что это не...

// Input = ["Ryan", "Kieran", "Jason", "Yous"]
// Output = ["Ryan", "Yous"]

// Input = ["Peter", "Stephen", "Joe"]
// Output = []
// Входные строки будут содержать только буквы.
// Примечание: сохраняйте исходный порядок имён в выходных данных.

// Основные принципы
function filter(array) {
  const array1 =[];
  for (let i = 0; i < array.length; i++) {
    
    const element = array[i];
    if (element.length === 4) {
      array1.push(element)
    }
    
  }
  return array1 ;
}
console.log(filter(["Peter", "Stephen", "Joe"]));
