
function getRandomElement(array) {
    const randomIndex = Math.floor(Math.random()*array.length)
    return array[randomIndex];
}

function makePhrases () {
    

const words1 = ["Мой кот", " Моя собака" , "Мой попугай"];
const words2 = ["любит есть" , "хочет погрызть" , "всегда ищет"];
const words3 = ["морковку" , "макароны" , "косточку"];

return getRandomElement(words1) + " "+ getRandomElement(words2) + " " + getRandomElement(words3)
}
alert(makePhrases());