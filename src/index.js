let nome = "Leonardo";
let XP = 10001;

if (XP>=0 && XP <1000){
    console.log(`O Herói de nome ${nome} está no nível de ferro`)
}
else if(XP>1001 && XP<=2000){
    console.log(`O Herói de nome ${nome} está no nível de bronze`)
}
else if(XP>2001 && XP<=5000){
    console.log(`O Herói de nome ${nome} está no nível de prata`)
}
else if(XP>5001 && XP<=7000){
    console.log(`O Herói de nome ${nome} está no nível de ouro`)
}
else if(XP>7001 && XP<=8000){
    console.log(`O Herói de nome ${nome} está no nível de platina`)
}
else if(XP>8001 && XP<=9000){
    console.log(`O Herói de nome ${nome} está no nível de ascendente`)
}
else if(XP>9001 && XP<=10000){
    console.log(`O Herói de nome ${nome} está no nível de imortal`)
}
else{
    console.log(`O Herói de nome ${nome} está no nível de Radiante`)
}
