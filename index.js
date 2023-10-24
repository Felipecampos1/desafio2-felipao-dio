function numPlayer(victory, defeat){
    let result = victory - defeat;
    
    return result;
}

function rankPlayer(points){
    let rankTotalPlayer = points;

    if (points < 10){
        rankTotalPlayer = 'Ferro'
    }
    else if(points > 10 && points < 20){
        rankTotalPlayer = 'Bronze'
    }
    else if(points > 21 && points <= 50){
        rankTotalPlayer = 'Prata'
    }
    else if(points > 51 && points <= 80){
        rankTotalPlayer = 'Ouro'
    }
    else if(points > 81 && points <= 90){
        rankTotalPlayer = 'Diamante'
    }
    else if(points > 91 && points <= 100){
        rankTotalPlayer = 'Lendário'
    }
    else if(points >= 101){
        rankTotalPlayer = 'Imortal'
    }
    
    return rankTotalPlayer;
}

let nameHero = 'Fecampostv'
let victoryPlayer = 90;
let defeatPlayer = 7;

let rank = numPlayer(victoryPlayer, defeatPlayer);
let resultRank = rankPlayer(rank)

console.log('O ' + nameHero + ' tem de saldo de ' + rank + ' pontos e está no nível de ' + resultRank + '!')