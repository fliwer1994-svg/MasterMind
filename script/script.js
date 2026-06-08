const select1 = document.querySelector("#select1")
const select2 = document.querySelector("#select2")
const select3 = document.querySelector("#select3")
const select4 = document.querySelector("#select4")
const button = document.querySelector("button")
const couleur = ["♦", "●", "■", "▲"]
const resultat = document.querySelector(".resultat")
const historique = document.querySelector(".historique")
let tentative = 0

let time = null
let temps = 20;



function random1() {

    const random = Math.floor(Math.random() * couleur.length)
    return couleur[random]

}

function secret() {
    const codeSecret = []
    for (let i = 0; i < 4; i++) {
        const couleurOrdinateur = random1();
        codeSecret.push(couleurOrdinateur)
    }
    return codeSecret
}
const afficherSecret = secret()
console.log(afficherSecret);

button.addEventListener('click', function () {

    clearInterval(time)
    temps = 20
    time = setInterval(function(){
        temps -= 1
        document.querySelector('#time').innerHTML = temps
        if (temps === 0) {
            clearInterval(time)
            resultat.innerHTML = "Temps écoule"
        }
    },1000)


    const choixJoueur = [select1.value, select2.value, select3.value, select4.value]
    trouverReponse(choixJoueur)
})

function trouverReponse(choixJoueur) {
    let compteur1 = 0
    let compteur2 = 0
    let compteur3 = 0

    for (let i = 0; i < 4; i++) {
        if (afficherSecret[i] === choixJoueur[i]) {
            compteur1 += 1

        }
        else if (afficherSecret.indexOf(choixJoueur[i]) != -1) {
            compteur2 += 1
        }
        else {
            compteur3 += 1
        }
    }
// Probleme de doublon, je dois remettre les valeurs a zero avec (null) avec un autre tableau...
    // for (let i = 0; i < 4; i++) {
    //     afficherSecret[i]=null
    //     choixJoueur[i]=null
    // }

    tentative += 1

    if (compteur1 === 4) {
        resultat.innerHTML = `<h1>Vous avez gagné</h1>`
        return
    }
    if (tentative === 10) {
        resultat.innerHTML = `<h1>Vous avez perdu</h1>`
        return
    }
    resultat.innerHTML += `Vous avez ${compteur1} bien placé et ${compteur2} mal placé et ${compteur3} pas bon ${choixJoueur.join(" ")} <br> `
} 

