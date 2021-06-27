let currentPlayer;

init(); // On lance la fonction init une unique fois, à l'ouverture du fichier.

// la fonction init, initialise et est défini comme suit :
function init() {
    // TODO: initialiser la variable currentPlayer à X ou O
    // TODO: via document.getElementById, récupérer notre SPAN créé précédemment dans le HTML, écrire dedans via .innerHTML, et y remplir par le contenu de la variable que l'on vient d'initialiser 
}
// A ce stade, si tu raffraichi la page, tu devrais voir "Au tour du joueur: X"


function play(buttonObject) {
    //buttonObject est notre objet bouton (comme si tu fais un getElementById, sauf qu'on le récupère car il est en paramètre de la fonction que l'on appele dans le HTML)

    if (buttonObject.innerHTML != '') { // Si le boutton n'est pas vide (donc à X ou O)
        return // return tout court est une astuce pour stopper la fonction sans continuer
    }

    // TODO: mettre le contenu de la variable currentPlayer dans le bouton en utilisant innerHTML
    
    // TODO: vérifier que le jeu est fini ou non : appelé juste la fonction qui est déjà codé.

    switchPlayer();

    // TODO: comme dans l'init, il faut mettre à jour de currentPlayer dans le span HTML que t'as créé ! 
}

function switchPlayer() {
   // TODO: Faire une fonction qui change le joueur en cours : "SI X alors O, Si O alors X"
}

function checkIfGameIsFinished() {

    // Ce gros if est un peu dégueux, il vérifie toute les combinaisons du morpion, je te le fais pas coder !
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


    // Ici, on regarde s'il reste des case vide, non jouée. Pour savoir si c'est match nul
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
