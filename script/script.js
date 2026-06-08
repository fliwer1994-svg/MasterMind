const select1 = document.querySelector("#select1")
const select2 = document.querySelector("#select2")
const select3 = document.querySelector("#select3")
const select4 = document.querySelector("#select4")
const button = document.querySelector("button")
const couleur = ["Losange rouge","Rond vert","Carré bleu","Triangle jaune"]
const resultat = document.querySelector(".resultat")
let tentative = 0




function random1() {

    const random = Math.floor(Math.random() * couleur.length)
    return couleur[random]
    
}

function secret(){
    const codeSecret = []
    for (let i = 0; i < 4; i++) {
        const couleurOrdinateur = random1() ;
        codeSecret.push(couleurOrdinateur)
    }
    return codeSecret
}
const afficherSecret = secret()
console.log(afficherSecret);

button.addEventListener('click',function(){
    const choixJoueur = [select1.value,select2.value,select3.value,select4.value]
    trouverReponse(choixJoueur)
})

function trouverReponse(choixJoueur) {
    let compteur1 = 0
    let compteur2 = 0

    for (let i = 0; i < 4; i++) {
        if (afficherSecret[i]===choixJoueur[i]) {
            compteur1 += 1
        }
        else if(afficherSecret.indexOf(choixJoueur[i])!= -1 ){
            compteur2 += 1
        }
    }

    tentative += 1

    if (compteur1 === 4) {
        resultat.innerHTML = "Vous avez gagné"
        return
    }
    if (tentative === 10) {
        resultat.innerHTML = "Vous avez perdu"
        return
    }
    resultat.innerHTML += `Vous avez ${compteur1} bien placé et ${compteur2} mal placé <br> `
} 