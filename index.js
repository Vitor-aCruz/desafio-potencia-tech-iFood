let heroi = "Zatch"
let xpinicial = 9001

if(xpinicial<=1000){
    console.log("O herói " + heroi +" está no ranque ferro, se esforce mais.");
}else if (xpinicial <=2000){
    console.log("O herói " + heroi +" está no ranque bronze, se esforce mais.");
}else if (xpinicial  <=5000){
    console.log("O herói " + heroi +" está no ranque prata, se esforce mais.");
}else if ( xpinicial <=7000){
    console.log("O herói " + heroi +" está no ranque ouro, você está no caminho certo, continue assim.");
}else if (xpinicial <=8000){
    console.log("O herói " + heroi +" está no ranque platina, você está no caminho certo, continue assim.");
}else if (xpinicial <=9000){
    console.log("O herói " + heroi +" está no ranque ascendente, você está no caminho certo, continue assim.");
}else if( xpinicial <=10000){
    xpnecessario=10001-xpinicial
    console.log("O herói " + heroi +" está no ranque imortal, falta "+xpnecessario +" para o Radiante, você consegue.");
    console.log(heroi+" Entrou em uma caverna ")
    xpatual=xpinicial
    do{
        console.log(heroi +" abateu um chefão, xp concedido :800");
        xpatual+=800
        console.log("Xp atual: "+xpatual);
    }while (xpatual<=10000)
    console.log("Parabéns "+heroi+" você está com "+xpatual+" pontos de experiência e alcançou o Radiante!!");
}else{
    console.log(heroi+ " é o grande herói da categoria Radiante");
}
