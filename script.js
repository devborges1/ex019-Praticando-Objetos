let spaceship = {
    velocity: 0,
    speedUp: function(acceleration) {
        this.velocity += acceleration;
    }
}

function registerSpaceship() {
    spaceship.name = prompt("Qual o nome da nave?");
    spaceship.type = prompt("Qual o tipo da nave?");
    spaceship.maxVelocity = Number(prompt("Qual a velocidade máxima da nave? (km/s)"));
}

function acelerate() {
    let acceleration = Number(prompt("Qual a aceleração da nave? (km/s)"));
    spaceship.speedUp(acceleration);
    if(spaceship.velocity > spaceship.maxVelocity) {
        alert("A nave atingiu a velocidade máxima!");
    }
}

function stop() {
    alert ("A nave parou de acelerar!");
    spaceship.velocity = 0;
}

function showMenu() {
    let chosenOption
    do {
        chosenOption = prompt("Escolha uma opção: \n 1 - Acelerar \n 2 - Parar \n 3 - Sair");
        switch(chosenOption) {
            case "1":
                acelerate();
                break;
            case "2":
                stop();
                break;
            case "3":
                alert("Saindo...");
                break;
            default:
                alert("Opção inválida!");
        }
    } while(chosenOption != "3");
}

registerSpaceship();
showMenu();