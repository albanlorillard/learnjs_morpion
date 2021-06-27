let currentPlayer;

init(); // On lance la fonction init une unique fois, à l'ouverture du fichier.

// la fonction init, initialise et est défini comme suit :
function init() {
    currentPlayer = 'X';
    document.getElementById('currentPlayer').innerHTML = currentPlayer; //innerHTML permet d'écrire à l'intérieur d'un élement html . ici <span id="currentPlayer"></span> devient <span id="currentPlayer">X</span>
}

function play(buttonObject) {

    if (buttonObject.innerHTML != '') { // Si le boutton n'est pas vide (donc à X ou O)
        return // return tout court est une astuce pour stopper la fonction sans continuer
    }

    buttonObject.innerHTML = currentPlayer;


    checkIfGameIsFinished();
    switchPlayer();
    document.getElementById('currentPlayer').innerHTML = currentPlayer; //innerHTML permet d'écrire à l'intérieur d'un élement html . ici <span id="currentPlayer"></span> devient <span id="currentPlayer">X</span>
}

function switchPlayer() {
    if (currentPlayer == 'X') {
        currentPlayer = 'O';
    } else {
        currentPlayer = 'X';
    }
}

function checkIfGameIsFinished() {

    if(
        (document.getElementById('button_1').innerHTML == document.getElementById('button_2').innerHTML && document.getElementById('button_2').innerHTML == document.getElementById('button_3').innerHTML && document.getElementById('button_2').innerHTML != '') ||
        (document.getElementById('button_4').innerHTML == document.getElementById('button_5').innerHTML && document.getElementById('button_5').innerHTML == document.getElementById('button_6').innerHTML && document.getElementById('button_5').innerHTML != '') ||
        (document.getElementById('button_7').innerHTML == document.getElementById('button_8').innerHTML && document.getElementById('button_8').innerHTML == document.getElementById('button_9').innerHTML && document.getElementById('button_8').innerHTML != '') || 
        (document.getElementById('button_1').innerHTML == document.getElementById('button_4').innerHTML && document.getElementById('button_4').innerHTML == document.getElementById('button_7').innerHTML && document.getElementById('button_1').innerHTML != '') || 
        (document.getElementById('button_2').innerHTML == document.getElementById('button_5').innerHTML && document.getElementById('button_5').innerHTML == document.getElementById('button_8').innerHTML && document.getElementById('button_8').innerHTML != '') || 
        (document.getElementById('button_3').innerHTML == document.getElementById('button_6').innerHTML && document.getElementById('button_9').innerHTML == document.getElementById('button_9').innerHTML && document.getElementById('button_8').innerHTML != '') ||   
        (document.getElementById('button_1').innerHTML == document.getElementById('button_5').innerHTML && document.getElementById('button_5').innerHTML == document.getElementById('button_9').innerHTML && document.getElementById('button_5').innerHTML != '') ||
        (document.getElementById('button_3').innerHTML == document.getElementById('button_5').innerHTML && document.getElementById('button_5').innerHTML == document.getElementById('button_7').innerHTML && document.getElementById('button_5').innerHTML != '')) {
            alert('Le gagnant est '+ currentPlayer);
    }

    let buttonEmpty = 0;
    for(let i = 1; i < 10; i++) {
        if (document.getElementById('button_'+i).innerHTML == ''){
            buttonEmpty++;
        }
    }

    if (buttonEmpty == 0) {
        alert('Match Nul !')
    } 

}
