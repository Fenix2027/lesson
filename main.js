
const scores =[60 , 50 , 50 , 58 , 54 , 54 ,
               58 , 52 , 54 , 48 , 61 , 64 ,
               69 , 18 , 44 , 55 , 69,  55]


let output ;
let hightScores = 0;
for (let i = 0; i < scores.length; i++) {
     output = "Bubble solution" + i + "scores" + scores[i]
     console.log(output);
     if (hightScores < scores[i]) {
        hightScores = scores[i]
        
     }
}
console.log("Bubble tests :" + scores.lenght);
console.log("Hight scores :" + hightScores);

const bestSolutions = []
for (let i = 0; i < scores.length; i++) {
    if (scores[i] === hightScores) {
       bestSolutions.push(i)
    }
    
}
console.log("Index Hight Scores : " + bestSolutions);
