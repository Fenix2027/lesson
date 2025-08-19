
const scores =[60 , 50 , 50 , 58 , 54 , 54 ,
               58 , 52 , 54 , 48 , 61 , 64 ,
               69 , 18 , 44 , 55 , 69,  55];








function printAndGetHightScores(array) {
    let output ;
    let hightScores = 0;
for (let i = 0; i < array.length; i++) {
     output = "Bubble solution" + i + "scores" + array[i]
     console.log(output);
     if (hightScores < array[i]) {
        hightScores = array[i]
        
     }
}
    return hightScores
}
const hightScore = printAndGetHightScores(scores);

console.log("Bubble tests :" + scores.length);
console.log("Hight scores :" + hightScore);

