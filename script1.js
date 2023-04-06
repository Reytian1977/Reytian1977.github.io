//Creation des personages
class Personnage {
    constructor(name, characterClass, vigueur, esprit, endurance, force, dexterite, intelligence, foi, arcane,) {
        this.name = name;
        this.characterClass = characterClass;
        this.vigueur = vigueur;
        this.esprit = esprit;
        this.endurance = endurance;
        this.force = force;
        this.dexterite = dexterite;
        this.intelligence = intelligence;
        this.foi = foi;
        this.arcane = arcane;
        this.avatar = "";
    }
}
//Funcion pour Afficher les personas avec des card en bootstrap
function AfficherAvatar(personnage) {
    $('#Affichages').append(`
    <div class="card m-2 avatar" style="width: 18rem;">
      <img src="${personnage.avatar}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${personnage.name}</h5>
        <p class="card-text">${personnage.characterClass}</p>
        <p class="card-text">Vigueur: ${personnage.vigueur}</p>
        <p class="card-text">Esprit: ${personnage.esprit}</p>
        <p class="card-text">Endurance: ${personnage.endurance}</p>
        <p class="card-text">Force: ${personnage.force}</p>
        <p class="card-text">Dextérité: ${personnage.dexterite}</p>
        <p class="card-text">Intelligence: ${personnage.intelligence}</p>
        <p class="card-text">Foi: ${personnage.foi}</p>
        <p class="card-text">Arcane: ${personnage.arcane}</p>
      </div>
    </div>
  `);
}

//Personages de bases
const aventuriersLocal = [
    new Personnage("Oral Schmeler IV", "Astrologer", 9, 15, 9, 8, 12, 16, 7, 9),
    new Personnage("Tad McLaughlin", "Bandit", 10, 11, 10, 9, 13, 9, 8, 14),
    new Personnage("Matteo Wunsch", "Confessor", 10, 13, 10, 12, 12, 9, 14, 9),
    new Personnage("Jack Beahan MD", "Warrior", 11, 12, 11, 10, 16, 10, 8, 9),
    new Personnage("Jack Beahan MD", "Hero", 14, 9, 12, 16, 9, 7, 8, 11),
    new Personnage("Jack Beahan MD", "Wretch", 10, 10, 10, 10, 10, 10, 10, 10),
    new Personnage("Jack Beahan MD", "Prisoner", 11, 12, 11, 11, 14, 14, 6, 9),
    new Personnage("Jack Beahan MD", "Prophet", 10, 42, 8, 12, 8, 8, 16, 11),
    new Personnage("Jack Beahan MD", "Samurai", 12, 11, 13, 12, 15, 9, 8, 8),
    new Personnage("Jack Beahan MD", "Vagabond", 15, 10, 11, 14, 13, 9, 9, 7)
];

//Funcion pour decider les avatars
function ChoisirAvatar(personnage, characterClass) {
    switch (characterClass) {
        case "Astrologer":
            personnage.avatar = "img/astrologue.jpg";
            break;
        case "Bandit":
            personnage.avatar = "img/bandit.jpg";
            break;
        case "Confessor":
            personnage.avatar = "img/confesseur.jpg";
            break;
        case "Warrior":
            personnage.avatar = "img/guerrier.jpg";
            break;
        case "Hero":
            personnage.avatar = "img/heros.jpg";
            break;
        case "Wretch":
            personnage.avatar = "img/indigent.jpg";
            break;
        case "Prisoner":
            personnage.avatar = "img/prisonnier.jpg";
            break;
        case "Prophet":
            personnage.avatar = "img/prophete.jpg";
            break;
        case "Samurai":
            personnage.avatar = "img/samurai.jpg";
            break;
        case "Vagabond":
            personnage.avatar = "img/vagabond.jpg";
            break;
        default:
            personnage.avatar = "img/indigent.jpg";
            break;
    }
}

$(document).ready(function () {
    for (let i = 0; i < aventuriersLocal.length; i++) {
        ChoisirAvatar(aventuriersLocal[i], aventuriersLocal[i].characterClass);
        AfficherAvatar(aventuriersLocal[i]);
    }
});